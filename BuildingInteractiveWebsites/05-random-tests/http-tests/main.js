const http = require('http');

// Creates server instance
const server = http.createServer((req, res) => {
  // Write server code here
  const { method } = req;
  console.log(method);
  switch (method) {
    case 'GET': return handleGetRequest(req, res);
    default: throw new Error(`unsupported request method: ${method}`);
  }
});

// Starts server listening on specified port
server.listen(4001, () => {
  const { address, port } = server.address();
  console.log(`Server is listening on: http://${address}:${port}`);
});

const handleGetRequest = (req, res) => {
  console.log(req.url);
  if (req.url === '/users') {
    res.setHeader('Content-Type', 'application/json');    
    return res.end(JSON.stringify([]));
  }
}

/*
const url = 'http://example.com/project/1?v=1&t=2';


const myUrl = new URL(url);

console.log(myUrl.searchParams);

async function logMovies() {
  const response = await fetch("http://example.com/movies.json");
  const movies = await response.json();
  console.log(movies);
}

logMovies();

*/

/*
// Creating a new promise that runs the function in the setTimeout after 5 seconds. 
const newPromise = new Promise((resolve, reject) => {
  setTimeout(() => resolve("All done!"), 5000);
});

// Creating an asynchronous function using an arrow expression and saving it to a the variable asyncFunction. 
const asyncFunction = async () => {
  // Awaiting the promise to resolve and saving the result to the variable finalResult.
  const finalResult = await newPromise;
    
  // Logging the result of the promise to the console
  console.log(finalResult); // Output: All done!
}

asyncFunction();
*/

/*const fs = require('fs');

fs.readFile('./hello.txt', (err, data) => {
  if (err) console.log(err);

  console.log(data.toString());
});

setTimeout()
setImmediate()
*/
/*
const util =  require('node:util');

function getUser (id, callback) {
    return setTimeout(() => {
      if (id === 5) {
        callback(null, { nickname: 'Teddy' });
      } else {
        callback(new Error('User not found'));
      }
    }, 1000);
  }

const getUserPromise = util.promisify(getUser);

getUserPromise(5)
  .then((user) => {
      console.log(`User found! Their nickname is: ${user.nickname}`);
  })
  .catch((error) => {
      console.log('User not found', error);
  });



*/