//const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
const API= 'https://random-d.uk/api/v2';

const newDuckButton = document.querySelector('.new-duck-button');
const duckImg = document.querySelector('img');

function fetchData(urlApi, callback) {
    let xhttp = new XMLHttpRequest();
    xhttp.open('GET', urlApi, true);
    
    xhttp.onreadystatechange = function (event) {
        if(xhttp.readyState ===4) {
            if(xhttp.status === 200){
                callback(null, JSON.parse(xhttp.responseText))
            } else {
                const error = new Error('Error '+urlApi);
    
                return callback(error, null);
            }
        }
    }
    xhttp.send();
}



newDuckButton.addEventListener('click',()=>{
    fetchData(`https://random-d.uk/api/v2/random`, function(error1, data1) {
        if (error1) return console.error(error1);
        duckImg.src = data1.url;
})
})
