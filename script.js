const fetch = require('node-fetch');

const fs = require('fs');

let url = 'http://jsonplaceholder.typicode.com/posts'

let settings = { method: 'Get'};


      fetch(url, settings)
     .then(res => res.json())
     .then((json) => {
        const data = JSON.stringify(json, null, 4);

        fs.writeFile('./result/posts.json', data, err => {
            if (err) {
                console.log('Error writing file', err)
            }else {
                console.log('file created and saved succesfully!')
            }
        })
         })


         