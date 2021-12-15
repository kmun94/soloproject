const { Pool } = require('pg')
// v-- REPLACE THE EMPTY STRING WITH YOUR LOCAL/MLAB/ELEPHANTSQL URI
const myURI = 'postgres://lvukcjpl:GLEv022EqGX8-_R3-LHuhosKTk7BN_Co@kashin.db.elephantsql.com/lvukcjpl';
// UNCOMMENT THE LINE BELOW IF USING MONGO
// const URI = process.env.MONGO_URI || myURI;
// UNCOMMENT THE LINE BELOW IF USING POSTGRESQL
const URI = process.env.PG_URI || myURI;
const pool = new Pool ({
  connectionString: myURI
});
// <-- export your model
module.exports = {
  query: (text, params, callback) => {
    console.log('executed query', text);
    return pool.query(text, params, callback);
  }
};