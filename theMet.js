const baseURL = "https://collectionapi.metmuseum.org/public/collection/v1/search";
const objectURL = "https://collectionapi.metmuseum.org/public/collection/v1/objects";
let artDisplay = document.querySelector('.display');
let viewArt = document.querySelector('.display');

const searchQuery = document.querySelector('input');
console.log(searchQuery);
const submitBtn = document.querySelector('button');

const hoverImage = document.querySelector('.display');

submitBtn.addEventListener('click', (e) => {
    e.preventDefault()
fetch(`${baseURL}?q=${searchQuery.value}`) 
.then(function (result){
    return result.json();   
})


.then(function (json){
    console.log(json)
    displayResults(json)
});
})

function displayResults(json) {
    while (artDisplay.firstChild) {
        artDisplay.removeChild(artDisplay.firstChild); 
     }

    let printArt = document.createElement('p');
    printArt.innerText = `There are ${json.objectIDs.length} pieces of art in our collection related to '${searchQuery.value}'. Here's a preview of five of them. Visit the museum to see more!`; 
    artDisplay.appendChild(printArt)


    // let sampleArr = json.objectIDs  
    // let sample = sampleArr(Math.floor(Math.random()*sampleArr.length))

    if(json.objectIDs.length === 0) {
        // console.log(`There are no results for '${searchQuery.value}'. Try another!`);
        // document.querySelector('artDisplay').innerText = `There are no results for '${searchQuery.value}'. Try another!`
      } else {
        for(let i = 0; i <= 4; i++) {
            console.log(json.objectIDs[i])

fetch(`${objectURL}/${json.objectIDs[i]}`)
.then(function (result) {
    return result.json();
})
    

.then(function (json) {
    console.log(json.primaryImage)
    viewImages(json)
})

function viewImages(json) {
    let img = document.createElement('img');
    img.src =  json.primaryImage;
   viewArt.appendChild(img);
}
        }
    }
}