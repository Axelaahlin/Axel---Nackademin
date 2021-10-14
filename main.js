let input = document.querySelector("#input")
let add = document.querySelector("#add")
let fastTrack = document.querySelector("#fastTrack")
let container = document.querySelector("#container")
let lista = document.querySelector("#listan")
// Pekar på alla HTML element. 

let kön = [];
//Skapar en tom array som ska motsvara kön. 

add.addEventListener ("click", () => {
kön.push(input.value.toLowerCase()); 
console.log(kön);
if (input.value === "") {
  alert("Vänligen skriv in ett namn.")
} else {
  let listItem = document.createElement("li");
  let listItemText = document.createElement("span");
  let checkainbutton = document.createElement("button");
  
  checkainbutton.innerText = "Incheckad";
  listItemText.innerText = input.value;
  
  checkainbutton.addEventListener("click", (e) => {
  listItem.remove(); 
  });
  //Eventlistener som tar bort från listan.
  
  lista.appendChild(listItem); 
  listItem.appendChild(listItemText);
  listItem.appendChild(checkainbutton);
  //Appendar alla element.
}
input.value = "";
});

fastTrack.addEventListener ("click", () => {
kön.unshift(input.value.toLowerCase());
console.log(kön)

})
