const {Breed , Temperament} = require('../db');
const axios = require('axios');
  
const data = async () => {
    const arr = await axios.get("https://api.thedogapi.com/v1/breeds");
    return  arr;
}

const getApiBreed = async () => {

  //guardo todo lo de la API
    const apiBreeds = await data();
    // console.log('APIBREEDS ', apiBreeds.data)

 const apiBreedData = apiBreeds.data;
  //guardo la info de breeds en la tabla Breed
  let apiInfo = apiBreedData.map(async (d) => {
    let [breedCreated, created] = await Breed.findOrCreate({ //este destructuring DEBE ir entre [], puede obviarse 'created'
      where: {
          id: d.id,
          name: d.name,
          weight_imperial: d.weight.imperial,
          weight_metric: d.weight.metric,
          height_imperial: d.height.imperial,
          height_metric: d.height.metric,
          life_span: d.life_span,
          image_url: d.image.url
       }
      });    
    // busca los Temperamentos en la Db
    if (d.temperament) {
      const apiTemps = d.temperament?.split(', ');
      let temperamentDb = await Temperament.findAll({
        where: { name : apiTemps }
      });
      temperamentDb && breedCreated.addTemperament(temperamentDb);    
    }  
  });  
  // console.log('API INFO ', apiInfo) 
  // return apiInfo;
}

  const getApiTemperament = async () => {

    //guardo todo lo de la API
    const apiBreeds = await data();
    
    //guardo la info de temperamentos en la tabla Temperament 
    const apiTemperaments = await apiBreeds.data.map(b => b.temperament);
    const apiTemps = apiTemperaments?.map(temp => (temp?.split(', '))).join().split(',');
    apiTemps.forEach(t => {
      if (t) Temperament.findOrCreate({where: {name: t}});
    });
    return apiTemps;
      // const apiTemperaments = d.temperament;
      // const apiTemps = apiTemperaments?.split(', ');
      // apiTemps?.forEach(t => {
      //   Temperament.findOrCreate({where: {name: t}});
      // });
      // breedCreated.addTemperaments(apiTemps);
      
      // let temperamentDb = Temperament.findAll({
      //    where: { name : apiTemps }
      //   });
         
    }

module.exports = {
  getApiBreed,
  getApiTemperament,
  }