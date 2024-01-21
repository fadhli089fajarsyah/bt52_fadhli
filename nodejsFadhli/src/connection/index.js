const { Pool } = require('pg')

const dbPool = new Pool({
    user: 'postgres',
    database: 'fadhli_stage1'    ,
    password: 'Fadhli123',
    port: 5432
})

module.exports = dbPool