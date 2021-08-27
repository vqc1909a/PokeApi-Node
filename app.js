const express = require("express")
const app = express()

//PORT
const port = process.env.PORT || 4000

//Middlewares
app.use(express.static("public"))
app.set('view engine', 'ejs')
app.set('views', './views')

//Routes
app.use(require("./routes/PokemonRoute"))

//Page Not Found
app.use((req, res) => {
 return res.render("pages/PageNotFound", {
  title: "Page Not Found | PokeApi",
  description: "Aplicación realizada utilizando la api de PokéApi" 
 })
})

app.listen(port, (req, res) => {
 return console.log(`Server run on ${port}`)
})

