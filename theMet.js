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
    printArt.innerText = `There are ${json.objectIDs.length} pieces of art in our collection related to your keyword. Here's a little peek at five them. Visit the museum to see more!`; 
    artDisplay.appendChild(printArt)

    if(json.objectIDs.length === 0) {
        console.log("Interesting, there are no results for that keyword. Try another!");
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

// hoverImage.addEventListener("mouseover", event => {
// fetch(`${objectURL}/${json.objectIDs[i]}`)
// .then(function (result) {
// return result.json();
// })

// .then(function(json) {
//     console.log(json.title)
//     // flashTitle(json)
// })

// function flashTitle(json) {
//     let showTitle = document.createElement('p');
//     showTitle.innerText = `"${json.title}"`;
//     hoverTitle.appendChild(showTitle);
// }

        }
    }
}













//pass displayResults into a new function to show the image associated with the first 5 IDs from the loop...call back ? 


//     let showArt = document.createElement('li')
//     showArt.src = (json.primaryImage)  //THIS?????
// }

//a function that displays the IMAGES of the first ten IDs related to the keyword

// function showArt(json) {
//fetch(``) 
//.then(function (result){
//    return result.json();


// // }
