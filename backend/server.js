const express = require('express')
const graphql = require('express-graphql')
const schema = require('./schema')
const cors = require('cors');

const app = express()
app.options('/graphql', cors())
app.use(cors());
app.use(
  '/graphql/blogposts',
  graphql({
    schema: schema,
    graphiql: true,
  })
)

app.listen(3000)