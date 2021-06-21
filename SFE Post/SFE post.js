const axios = require('axios');

axios.post('http://localhost:8080/Post', {
    Name: 'Fred',
    Age: '23'
  })
  .then(function (response) {
    console.log(response);
  })