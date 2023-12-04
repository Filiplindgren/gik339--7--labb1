// Uppgift 1: Hämta checkboxen

// Hämta checkboxen
const htmlCheckbox = document.querySelector('.checkbox');


// Uppgift 2: Hämta alla textfält som en samling, hämtar en htmlCollection

const allTextfieldElements = document.getElementsByClassName('textfield');

// Hämta upp samlingen av textfält, hämtar en NodeList

const allTextfields = document.querySelectorAll('.textfield');


// Uppgift 3:  Hämta knappen

const htmlButton = document.getElementById('form_button');


// Uppgift 4: Hämta div-elementet 

let htmlDiv = document.querySelector('.form_div');


// Uppgift 5

// Hämta textfält med klassen content
let contentInput = document.getElementById('content');


 // Funktion som används för båda textfälten för det som ska hända när man interagerar med dem på hemsidan, div ändrar färg, text skrivs ut i div
 // Elementen som startar eventet loggas också 
 function showInputAllTextfields(e) {
    // Hämta textfälten
    const colorInputField = allTextfields.item(0);
    const contentInputField = allTextfields.item(1);

    // Hämta deras name attirbut och lagra i en variabel
    const contentInputName = contentInputField.getAttribute('name');
    const colorInputName = colorInputField.getAttribute('name');

    // Logga eventobjektet
    console.log(e);
    // Om namnet är 'content' så ska innehålet i den skrivas ut i diven
    // Hämta inputfältets färg
    const divColor = colorInputField.innerHTML.value;
    
    // 
    htmlDiv.style.backgroundColor = divColor;
    // Text från textfält 'innehåll' ska skrivas ut i diven 
    htmlDiv.innerHTML = contentInput.value;

 }

 
 // Sätter en eventlistener på textfältet
contentInput.addEventListener('input', showInputAllTextfields); 

// Uppgift 6 
// hämta inputfält för färg
let colorInput = document.getElementById('color');



// Sätter en eventlyssnare på checkboxen med en anonym funktion 
// För att ändra färg i diven
htmlCheckbox.addEventListener('change', () => {
     // Hämta färg från inputfield
     const divColor = allTextfields.item(0).value;
     // sätt färgen som hämtats som bakgrund i diven 
     htmlDiv.style.backgroundColor = divColor;
});

// Logga element som startar eventet
colorInput.addEventListener('input',showInputAllTextfields);


// Function för att ta bort form_div
htmlButton.addEventListener('click', () => {
    htmlDiv.remove();
});




















