const { Router } = require('express');
// const { Sequelize } = require('sequelize/dist');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const { Op, Breed, Temperament } = require('../db');
//const { getAllBreeds, getBreedByName} = require('../utils/utilsAPI');
const { getApiBreed, getApiTemperament } = require('../utils/utilsAPI');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

// acá está incluida la busqueda de todos y la de name por query
router.get('/breeds', async (req, res) => {
    let name = req.query.name;
    let filterBreed = req.query.filter;
    let filterTemperament = req.query.temp;

    try {
        let thereAre = await Breed.findAll();
        // si no tengo datos en la DB creo los registros
        if (!thereAre.length) await getApiBreed();
    } catch (error) {
        res.status(404).send('Breeds not found.');
    }
    if (name) {
        try {
            let bree = await Breed.findAll({
                where: {
                    name: {
                        [Op.iLike]: '%' + name + '%' //compara parte del nombre ignorando mayúsculas y minúsculas
                    }
                },
                include: { model: Temperament },
                limit: 8,
                offset: req.query.page,
            });
            return res.json(bree);
        } catch (error) { res.status(404).send('Breed not found.'); }
    }
    if (filterBreed) {
        try {
            let bree = await Breed.findAll({
                where: {
                    name: filterBreed
                },
                include: { model: Temperament }
            });
            return res.json(bree)
        } catch (error) { res.status(404).send('Breeds not found.'); }
    }
    if (filterTemperament && filterTemperament != 'All') {
        try {
            const allBreeds = await Breed.findAll({
                include: {
                    model: Temperament,
                    where: {
                        name: filterTemperament
                    }
                },
                order: [["name", req.query.order]],
            });
            return res.json(allBreeds)
        } catch (error) { res.status(404).send('Breeds not found.'); }
    }
    // else {
    try {
        let bree = await Breed.findAll({
            limit: 8,
            offset: req.query.page,
            order: [["name", req.query.order]],
            include: { model: Temperament }
        });
        return res.json(bree)
    } catch (error) { res.status(404).send('Breeds not found.'); }
    // }
});

router.get("/breed/:id", async (req, res) => {
    const id = req.params.id;
    try {
        // let bree = await Breed.findByPk(id);
        let bree = await Breed.findByPk(id, {
            include: { model: Temperament }
        });
        return res.json(bree);
    } catch (error) {
        res.status(404).send('Breeds not found.');
    }
})

router.get("/breed", async (req, res) => {
    try {
        // let breeds = await Breed.findAll({
        //     attributes: [['name']],
        // });
        let breeds = await Breed.findAll();
        return res.json(breeds.map(b => b.name));
    } catch (error) {
        res.status(404).send('Breeds not found.');
    }
})

router.get("/temperaments", async (req, res) => {
    try {
        let thereAre = await Temperament.findAll();
        // si no tengo datos en la DB creo los registros
        if (!thereAre.length) {
            await getApiTemperament();
        }
    } catch (error) {
        res.status(404).send('Temperament not found.');
    }
    const allTemperaments = await Temperament.findAll({
        order: ["name"],
    });
    res.send(allTemperaments);
})

router.post("/temperaments", async (req, res) => {
    const temperament = req.body;
    //{name:"temp1", breedId: [1,2,3]} por body viene el temperament y los Ids de las razas que lo tienen
    try {
        let [temp, created] = await Temperament.findOrCreate({
            where: {
                name: temperament.name,
            }
        });
        // console.log(created);
        await temp.setBreeds(temperament.breeId);
        return res.json(temp)
    } catch (error) {
        res.status(404).send('Temperaments not found.');
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
        return res.json({ cambiado: true })
    } catch (error) {
        res.status(404).send('Breed not found.');
    }
})

router.delete("/breed/:id", async (req, res) => {
    const id = req.params.id;
    try {
        let bree = await Breed.destroy({
            where: {
                id: id
            }
        });
        return res.json({ borrado: true })
    } catch (error) {
        res.status(404).send('Breed not deleted.');
    }
})

module.exports = router;
