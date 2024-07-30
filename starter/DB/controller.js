const mongoose = require('mongoose')
const ConnectionSTring = 'mongodb://localhost:27017'


mongoose.connect(ConnectionSTring)
.then(()=> console.log('CONNECTED TO DB...'))
.catch((err)=>console.log(err))


