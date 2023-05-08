const api = require('./src/api'); //src api den dosya çeker
const express = require('express')
const app = express();



app.use('/', api); //ilk sayfayı apiden alıp buraya yansıtır 
app.use('/api/animals/', api); //api sayfasını üsteki gibi yapar



app.listen(3000, () => { //sunucuyu 3000 portunda başlatır
  console.log('server started');
});
