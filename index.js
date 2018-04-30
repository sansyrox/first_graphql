const fetch = require('node-fetch');
 
const accessToken = 'afeaf292d7612504dc403ba6136a4cbdc0393d3c';
const query = `
query { 
  organization(login:"freeCodeCamp"){
		members(first:10){
      edges{
        node{
          name
        }
      }
    }
    ,repositories(first:5) {
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