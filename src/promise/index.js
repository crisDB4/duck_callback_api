const API= 'https://random-d.uk/api/v2';

const newDuckButton = document.querySelector('.new-duck-button');
const duckImg = document.querySelector('img');

function fetchData(urlApi) {
    return fetch(urlApi);
}



newDuckButton.addEventListener('click',()=>{
    fetchData(`${API}/random`) 
        .then(response => response.json())
        .then(data1 => {
            console.log(data1)
            duckImg.src = data1.url})
        .catch(err => console.log(err))
        .finally(() => console.log('Finally'))
})
