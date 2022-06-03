const express = require('express')
const app = express()
const PORT = process.env.PORT || 8000
const cors = require('cors')
const path = require('path')

const rappers = {
    '21 sav': {
        'age':29,
        'birthName':'sheyaa',
        'birthLocation': 'London'
    },
    'dylan': {
        'age': 'dylan',
        'birthName' : 'dylan',
        'birthLocation': 'dylan'
    }
    
}
app.use(cors())
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/index.html")
})

app.get('/api/:rapperName', (req, res)=> {
    const rapperName = req.params.rapperName.toLowerCase()
    if(rappers[rapperName]) {
        res.json(rappers[rapperName])
    }
    else{
        res.json(rappers['dylan'])
    }
})


app.listen((PORT), () => {
    console.log(`Listening on ${PORT}`)
})