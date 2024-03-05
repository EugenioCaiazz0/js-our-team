/*dichiarazione degli oggetti "teammate" e delle proprietà di ogni singolo oggetto*/
const team = 
[
    {
     Identity: 'Wayne Barrett',
     teamRole: `Founder & CEO`,
     photoID: `wayne-barnett-founder-ceo.jpg`
    },
    {
     Identity: 'Angela Caroll',
     teamRole: `Chief Editor`,
     photoID: `angela-caroll-chief-editor.jpg`
    },
    {
     Identity: 'Walter Gordon',
     teamRole: `Office Manager`,
     photoID: `walter-gordon-office-manager.jpg`
    },
    {
     Identity: 'Angela Lopez',
     teamRole: `Social Media Manager`,
     photoID: `angela-lopez-social-media-manager.jpg`
    },
    {
     Identity: 'Scott Estrada',
     teamRole: `Developer`,
     photoID: `scott-estrada-developer.jpg`
    },
    {
     Identity: 'Barbara Ramos',
     teamRole: `Graphic Designer`,
     photoID: `barbara-ramos-graphic-designer.jpg`
    }
]

/*print in console delle proprietà degli oggetti*/
for (let teammate of team) {
    console.log(teammate.Identity + "  " +
     teammate.teamRole + "  " + 
     teammate.photoID);
}

/*print in DOM*/
const teamBook = document.getElementById(`teamBook`);
for (let teammate of team) {
   teamBook.innerHTML += 
   `<p> ID: ${teammate.Identity} <p>
    <p> Role: ${teammate.teamRole} <p>
    <p> Picture: ${teammate.photoID} <p>`;
}