console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

//selecting necessary elements
let searchWord = document.querySelector("#searchWord");
let submitButton = document.querySelector("#submitSearch");
let imgRes = document.querySelector("img");

//initializing event listeners
submitButton.addEventListener("click", imageSearch);

function imageSearch (){
    let queryValue = searchWord.value;
    console.log(queryValue);
    getImage(queryValue);

}
//async fetch for GIF, which is then loaded as the source of img
async function getImage(query){
    console.log(`${query}`);
    try {
    let apiFetch = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=bKU6BUVB00GBtKZxYXBWGSiQOI0hQBbP&q=${query}&limit=1&offset=0&rating=g&lang=en`, { mode: "cors"});
    let imgData = await apiFetch.json();
    let imgUrl = imgData.data[0].images.downsized.url;
    imgRes.src = imgUrl;
} catch (err){
    console.error(err);
}
};
