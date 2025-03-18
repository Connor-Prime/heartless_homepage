console.log("hello")

// document.getElementById("dropDown").addEventListener("click",(e)=>{showButtons(e)})

document.getElementById("mobiledropDown").addEventListener("click",(e)=>{showButtons(e)})
// console.log(document.getElementById("dropDown"))
let dropdownClicked=false;
let navButtons=document.getElementsByClassName("navButton");

console.log(navButtons)

function showButtons(e){

    console.log("clicked")
    if(dropdownClicked){

        let i=0
        while (i<navButtons.length){
            
            navButtons[i].style.display="none";
            console.log(navButtons[i])
            i++;
        }
        console.log("clicked2")
        dropdownClicked=false;
        return;
    }else{

        let i=0
        while (i<navButtons.length){
            navButtons[i].style.display="block";
            console.log(navButtons[i])
            i++;
        }
        console.log("clicked3")
        dropdownClicked=true;
        return;
    }
}