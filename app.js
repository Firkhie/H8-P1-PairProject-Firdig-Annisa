const router = require("./routes/router")
const express = require('express')
const app = express()
const session = require('express-session')
const port = 3000

app.set('view engine', 'ejs')
app.use(express.urlencoded({extended: false}))
app.use(express.static('public'))

app.use(session({
  secret: 'rahasia nich',
  resave: false,
  saveUninitialized: false,
  cookie: { 
      secure: false,
      sameSite: true 
  }
}))

app.use(router)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})