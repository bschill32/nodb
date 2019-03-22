//packages
const express = require("express"),
  bodyParser = require("body-parser"),
  //my use's
  app = express(),
  mc = require("./controllers/Movies")
//middlewear
app.use(bodyParser.json())

//endpoints
app.get(`/api/movies`, mc.get)
app.post(`/api/movies`, mc.create)
app.put(`/api/movies/:id`, mc.update)
app.delete(`/api/movies/:id`, mc.delete)

//nodemon
const port = 3232
app.listen(port, () => {
  console.log(`The Red Coats are Coming on ${port}`)
})
