const fetch = require('node-fetch');
 
const accessToken = '6fdb9953ca4dfea1a1ad56905156572d4de2a9a0';
const query = `
query { 
  viewer {
    repositories(first:5) {
      edges {
        node {
          name
        }
      }
    }
  }
}
 `;
 
fetch('https://api.github.com/graphql', {
  method: 'POST',
  body: JSON.stringify({query}),
  headers: {
    'Authorization': `Bearer ${accessToken}`,
  },
}).then(res => res.text())
  .then(body => console.log(body)) 
  .catch(error => console.error(error));