const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const {Op, Breed , Temperament} = require('../db');
//const { getAllBreeds, getBreedByName} = require('../utils/utilsAPI');
const { getApiBreed, getApiTemperament } = require ('../utils/utilsAPI');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
  
// acá está incluida la busqueda de todos y la de name por query
router.get ('/breeds', async (req, res)=>{
    let name = req.query.name;

    try {
        let thereAre = await Breed.findAll();
        // si no tengo datos en la DB creo los registros
        if (!thereAre.length) await getApiBreed();
            } catch (error) {
            console.log(error)
         }
    if (name) {
        try {
          let bree = await Breed.findAll({
              where: {
                  name: {
                      [Op.iLike]: '%' + name + '%' //compara parte del nombre ignorando mayúsculas y minúsculas
                  }
              }
            });
           return res.json(bree);
        }  catch(error) {console.log(error);}
  } else if (req.query.filter) {
        try {
            let bree = await Breed.findAll({
                where: {
                    status: req.query.filter
                },
                limit: 6,
                offset: req.query.page,
                order:[["name", req.query.order]],
                include: { model: Temperament}
            });
            return res.json (bree)
        } catch(error) {console.log(error);}
        } else {
            try {
                let bree = await Breed.findAll({
                    // limit: 6,
                    // offset: req.query.page,
                    //include: { model: Temperament }
                });
                return res.json(bree)
            } catch (error) {console.log(error);}
         }
});

router.get("/breed/:id", async (req, res) => {
    const id = req.params.id;
    try {
        let bree = await Breed.findByPk(id);
        return res.json(bree);
    } catch (error) {
        console.log(error)
    }
})

router.get("/temperaments", async (req, res) => {
    let name = req.query.name;

    try {
        let thereAre = await Temperament.findAll();
        // si no tengo datos en la DB creo los registros
        if (!thereAre.length) await getApiTemperament();
        } catch (error) {
            console.log(error)
        }
    if (name) {
        try {
          let temp = await Temperament.findAll({
              where: {
                  name: {
                      [Op.iLike]: '%' + name + '%' //compara parte del nombre ignorando mayúsculas y minúsculas
                  }
              }
            });
           return res.json(temp);
  }  catch(error) {
      console.log(error)
  }
} else  {
    const allTemperaments = await Temperament.findAll();
    res.send(allTemperaments);}
})

router.post("/temperaments", async (req, res) =>{
    const temperament = req.body;
    //{name:"temp1", breeId: [1,2,3]} por body viene el temperament y los Ids de las razas que lo tienen
    try{
        let [temp, created] = await Temperament.findOrCreate({
            where: {
                name: temperament.name,
            }
        });
        console.log(created);
        await temp.setBreeds(temperament.breeId);
        return res.json(temp)
    } catch (error) {
        console.log(error)
    }
})


router.put("/breed/:id", async (req, res) => {
    const id = req.params.id;
    const breed = req.body;
    //{id: 1, name: "breed2"}
    try {
        let bree = await Breed.update(breed, {
            where: {
                id: id
            }
        });
        return res.json({ cambiado: true})
    } catch (error) {
        console.log(error)
    }
})

router.delete ("/breed/:id", async (req,res) => {
    const id = req.params.id;
    try {
        let bree = await Breed.destroy ({
            where: {
                id: id
            }
        });
        return res.json ({ borrado: true})
    } catch (error) {
        console.log(error)
    }
})

module.exports = router;
