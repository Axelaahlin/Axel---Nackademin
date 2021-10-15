let input = document.querySelector("#input")
let add = document.querySelector("#add")
let fastTrack = document.querySelector("#fastTrack")
let container = document.querySelector("#container")
let lista = document.querySelector("#listan")
let underRubrik = document.querySelector("#underrubrik")
// Pekar på alla HTML element. 

let kön = [];
underRubrik.innerText = "There's currently no people in line."
//Skapar en tom array som ska motsvara kön. 

add.addEventListener ("click", () => {
kön.push(input.value.toLowerCase()); 
if (input.value === "") {
  alert("Vänligen skriv in ett namn.")
} else {
  let listItem = document.createElement("li");
  let listItemText = document.createElement("span");
  let checkainbutton = document.createElement("button");
  
  checkainbutton.innerText = "Checked in";
  listItemText.innerText = input.value;

  checkainbutton.addEventListener("click", (e) => { 
   kön.forEach((person, index) => {
    let listPerson = e.target.previousElementSibling.innerText;
    kön.forEach ((person, index) => {
      if (person === listPerson.toLowerCase()){
        kön.splice(index,1);
      }
    })
  })
  listItem.remove();  
  console.log(kön.length)
  if (kön.length < 1) {
    underRubrik.innerText = "There's currently no people in line"
  }
  });
  //Eventlistener som tar bort från listan.
  
  lista.appendChild(listItem); 
  listItem.appendChild(listItemText);
  listItem.appendChild(checkainbutton);
  //Appendar alla element.
  if (kön.length >= 1){
    underRubrik.innerText = "The queue:"
   } 
  
}
input.value = "";
});

fastTrack.addEventListener ("click", () => {
kön.unshift(input.value.toLowerCase());
if (input.value === "") {
  alert("Vänligen skriv in ett namn.")
} else {
  let listItem = document.createElement("li");
  let listItemText = document.createElement("span");
  let checkainbutton = document.createElement("button");
  
  checkainbutton.innerText = "checked in";
  listItemText.innerText = input.value;
  
  checkainbutton.addEventListener("click", (e) => { 
    kön.forEach((person, index) => {
      let listPerson = e.target.previousElementSibling.innerText;
      kön.forEach ((person, index) => {
        if (person === listPerson.toLowerCase()){
          kön.splice(index,1);
        }
      })
    })
    listItem.remove(); 
    console.log(kön.length)
    if (kön.length < 1) {
      underRubrik.innerText = "There's currently no people in line"
    }
  });
  //Eventlistener som tar bort från listan.
  
  lista.prepend(listItem); 
  listItem.appendChild(listItemText);
  listItem.appendChild(checkainbutton);
  //Appendar alla element.
  if (kön.length >= 1){
    underRubrik.innerText = "The queue:"
   } 
}
input.value = "";
});



