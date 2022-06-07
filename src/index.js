const  express = require('express');
const  morgan = require('morgan');
const  cors = require('cors');
const app =  express();

app.use(cors())
app.use(morgan('dev'))
app.use(express.urlencoded({extended:false}))
app.use(express.json())

let PORT = process.env.PORT || 4000


app.use(require('./Routes/testApi/testService'))
app.listen(PORT, ()=>{
    console.log('is executed '+ PORT)
})