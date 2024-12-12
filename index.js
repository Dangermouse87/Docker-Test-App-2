// require libraries required as dependencies
const express = require('express');
const redis = require('redis');
// for forcing error purposes
const process = require('process');

// create new instance of express and new connection to redis
const app = express();
const client = redis.createClient({
  host: 'redis-server',
  port: 6379
});
client.set('visits', 0);

// route handler
// callback function to get visits and then update the number
app.get('/', (req, res) => {
  // running process exit to force an error
  // process.exit(0);
  client.get('visits', (err, visits) => {
    res.send('Number of visits ' + visits);
    client.set('visits', parseInt(visits) + 1);
  });
});

// Set port to listen into
app.listen(8080, () => {
  console.log('listening on port 8080s');
});
