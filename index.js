const express = require('express')
const app = express()
const port = 3000

//import item ki router file
const item = require('./routes/item');

//load into application
app.use('/api', item);

// -> /api/ -> item home page
// -> /api/items -> item post page
// -> /api/items/id -> put/delete page



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
