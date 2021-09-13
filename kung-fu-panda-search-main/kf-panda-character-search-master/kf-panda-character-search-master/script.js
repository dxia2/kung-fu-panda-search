//kung fu panda character search

//varibles for html elements
let searchBtnEl = document.getElementById("search-btn")
let nameInputEl = document.getElementById("name-input");
let charImgEl = document.getElementById("char-img");
let charNameEl = document.getElementById("char-name");
let charQuoteEl = document.getElementById("char-quote");

//event listener to button
searchBtnEl.addEventListener("click", characterSearch);


//event function
function characterSearch(){
    let name = nameInputEl.value.toLowerCase(); 

    if(name === "po" || name === "dragon warrior" || name === "the dragon warrior"){
        charImgEl.src = "images/po.png";
        charNameEl.innerHTML = "Po";
        charQuoteEl.innerHTML = "Buddy, I am the Dragon Warrior.";
    }else if(name === "viper" || name === "master viper"){
        charImgEl.src = "images/viper.png";
        charNameEl.innerHTML = "Viper";
        charQuoteEl.innerHTML = "I don't need to bite to fight!";
    }else if(name === "mantis"){
        charImgEl.src = "images/mantis.png";
        charNameEl.innerHTML = "Mantis";
        charQuoteEl.innerHTML = "Fear the bug!";
    }else if(name === "crane"){
        charImgEl.src = "images/crane.png";
        charNameEl.innerHTML = "Crane";
        charQuoteEl.innerHTML = "You can chain my body, but you will never chain my warrior spirit!";
    }else{
        charImgEl.src = "images/question-mark.png";
        document.getElementById("char-name").innerHTML = "------";
        charQuoteEl.innerHTML = "Character not found.";
    }
}




