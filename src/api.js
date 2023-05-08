const express = require('express'); //express modülünü yükler
const router = express.Router(); //routeri atar

router.get('/', (req, res) => { //ilk sayfayı oluşturur
res.send('<h1>Rasgele resim apisi</h1> /api/animals/ Hayvanlar') //eklenebilir düzenlenenbilir.
});

router.get('/api/animals', (req, res) => { //apiyi oluşturur
const animals = ['koylu.fun', '1', '2', '3', '4']; //data
const randomAnimal = animals[Math.floor(Math.random() * animals.length)];
const data = { "animal": randomAnimal }; //random değer seçer
res.json(data) //değeri yansıtır
});


module.exports = router; //routeri atar