// Uppgift 1: Hämta checkboxen

// Hämta checkboxen
const htmlCheckbox = document.querySelector('.checkbox');

//console.log(htmlCheckbox);

// Uppgift 2: Hämta alla textfält som en samling, hämtar en htmlCollection

const allTextfieldElements = document.getElementsByClassName('textfield');
//console.log(allTextfieldElements);

// Hämta upp samlingen av textfält, hämtar en NodeList

const allTextfields = document.querySelectorAll('.textfield');
//console.log(allTextfields);
//console.log(allTextfields);

// Uppgift 3:  Hämta knappen

const htmlButton = document.getElementById('form_button');
//console.log(htmlButton);

// Uppgift 4: Hämta div-elementet 

let htmlDiv = document.querySelector('.form_div');
//console.log(htmlDiv);

// Uppgift 5

// Hämta textfält med klassen content

let contentInput = document.getElementById('content');

// Funktion för att visa keyboardinput i textfält och form_div
function showInput () {
    htmlDiv.innerHTML = contentInput.value;
    console.log(allTextfields.item(1));
 }

 // Sätter en eventlistener på textfältet
contentInput.addEventListener('input', showInput);


// Uppgift 6 

// Sätter en eventlyssnare på checkboxen
htmlCheckbox.addEventListener('change',changeDivColor)

// Eventlyssnare på inputfältet för färg
allTextfields.item(0).addEventListener('input', logEventStarterColor);

// Funktion för att ändra färg på form_div när man trycker i checkboxen
function changeDivColor () { 

    // Hämta färg från inputfield
    const divColor = allTextfields.item(0).value;
    // sätt färgen som hämtats som bakgrund i diven 
    htmlDiv.style.backgroundColor = divColor;
}

// Funktion för att logga det element som startar eventet
function logEventStarterColor() {
    console.log(allTextfields.item(0));
}

// Function för att gömma form_div
htmlButton.addEventListener('click', () => {

    htmlDiv.style.display = 'none';
});




















