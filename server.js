// Server
'use strict'
const Sequelize = require('sequelize')
const app = require('./app/app')
const config = require('./app/app.config')

const sequelize = new Sequelize(config.db, config.username, config.pwd, {
  host: 'localhost',
  dialect: 'mysql',
  operatorsAliases: false
})
// Connection uri
// const sequelize = new Sequelize('mysql://user:pass@example.com:5432/dbname');
sequelize.authenticate().then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error(`Unable to connect to the database: ${err}`);
  });

app.listen(port, () => {
  console.log(`Server listening on port ${config.port}`);
})
