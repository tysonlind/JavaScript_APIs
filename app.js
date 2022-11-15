console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

//selecting necessary elements
let searchWord = document.querySelector("#searchWord");
let submitButton = document.querySelector("#submitSearch");
let imgRes = document.querySelector("img");
let feedback = document.querySelector("#feedback");

//initializing event listeners
submitButton.addEventListener("click", imageSearch);

function imageSearch (){
    feedback.textContent = "";
    imgRes.src = "#";
    let queryValue = searchWord.value;
    getImage(queryValue);
    searchWord.value = "";
    
};
//async fetch for GIF, which is then loaded as the source of img
async function getImage(query){
    try {
    let apiFetch = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=bKU6BUVB00GBtKZxYXBWGSiQOI0hQBbP&q=${query}&limit=1&offset=0&rating=g&lang=en`, { mode: "cors"});
    let imgData = await apiFetch.json();
    let imgUrl = imgData.data[0].images.downsized.url;
    imgRes.src = imgUrl;
} catch (err){
    console.error(err);
    feedback.textContent = err.message;
}
};
