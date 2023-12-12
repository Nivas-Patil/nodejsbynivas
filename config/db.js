const { MongoClient } = require('mongodb')
const URL = process.env.MONGO_URL
// Create Instance of MongoClient for mongodb
const client = new MongoClient(URL)
const dbcon = client.connect()
    .then(() => {
        console.log('Connected Successfully!')
        console.log('Exiting..')
        client.close()
    })
    .catch(error => console.log('Failed to connect!', error))
module.exports = dbcon;