//const request = require('request');
const axios = require('axios');

const gitHubApi = 'https://api.github.com/users/rafaspimenta/repos';
const gitHubApiWithUser = user => `https://api.github.com/users/${user}/repos`;
const users = ['rafaspimenta', 'rmanguinho', 'otaviolemos'];

(async () => {
    /*const res = axios.get(gitHubApiWithUser(users[0]));
    const res1 = axios.get(gitHubApiWithUser(users[1]));
    const res2 = axios.get(gitHubApiWithUser(users[2]));

    await Promise.all([res, res1, res2])
        .then(data => console.log(data.map(element => element.status)));*/

    for (let user of users) {
        console.log('user', user);
        const res = await axios.get(gitHubApiWithUser(user));
        console.log(res.status);
    }
    
})();

console.log('test');

/*
// axios async await
( async () => {    
    const res = await axios.get(gitHubApi);
    console.log(res.data[0]);
})();

console.log('test');
*/


/*
// axios promise
console.time()
axios.get(gitHubApi)
    .then(res => console.log('data', res.data[0].html_url))
    .then(() => console.log('test'))
    .then(() => console.timeEnd());
*/

/* 
//request callback
const myHeaders = { 
    headers: { 
        'User-Agent': 'node.js'
    }
};

request(gitHubApi, myHeaders, (err, res, body) => {
    const json = JSON.parse(body);


    const { html_url } = json;
    console.log(html_url);
    
    console.log(json.map(element => element.html_url)); 
    });
*/

