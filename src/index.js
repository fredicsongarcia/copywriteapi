const  express = require('express');
const  morgan = require('morgan');
const  cors = require('cors');
const app =  express();

app.set('port',4000)

app.use(cors())
app.use(morgan('dev'))
app.use(express.urlencoded({extended:false}))
app.use(express.json())

app.use(require('./Routes/testApi/testService'))
app.listen(app.get('port'), ()=>{
    console.log('is executed')
})