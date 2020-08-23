const app = require('./app')
const port = process.env.PORT || 3333
require('dotenv').config()

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`)
})
