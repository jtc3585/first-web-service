// 6 - this will return a random number no bigger than `max`, as a string
// we will also doing our query parameter validation here
const randomNumberJSON = (max = 1) => {
  const number = Math.random() * max;
  const responseObj = {
    timestamp: new Date(),
    number,
  };
  return JSON.stringify(responseObj);
};

const getRandomNumberResponse = (request, response, params) => {
  response.writeHead(200, { 'Content-Type': 'application/json' });
  response.write(randomNumberJSON(params.max));
  response.end();
};

module.exports.getRandomNumberResponse = getRandomNumberResponse;
