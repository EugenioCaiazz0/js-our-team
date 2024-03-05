/*dichiarazione degli oggetti "teammate" e delle proprietà di ogni singolo oggetto*/

/*const team = 
[
    {
     Identity:',
     teamRole: `Forward`,
     photoID: "assets/img/angela-caroll-chief-editor.jpg"
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

/*print in console delle proprietà degli oggetti
for (let teammate of team) {
    console.log(teammate.Identity + "  " +
     teammate.teamRole + "  " + 
     teammate.photoID);
}

/*print in DOM
const teamBook = document.getElementById(`teamBook`);
for (let teammate of team) {
   teamBook.innerHTML += 
   `<p> ID: ${teammate.Identity} <p>
    <p> Role: ${teammate.teamRole} <p>
    <p> Picture: ${teammate.photoID} <p>`;
}
*/

const team = 
[
    {
        Identity: 'Wojciech Szczęsny',
        teamRole: `Goalkeeper`,
        photoID: "assets/img/Szczesny.webp",
        marketValue: `8.0 millions \u20AC`,
        age: `33`,
       },{
        Identity: 'Mattia Perin',
        teamRole: `Goalkeeper`,
        photoID: "assets/img/Perin.webp",
        marketValue: `3.0 millions \u20AC`,
        age: `31`,
       },{
        Identity: 'Carlo Pinsoglio',
        teamRole: `Goalkeeper`,
        photoID: "assets/img/Pinsoglio.webp",
        marketValue: `0.2 millions \u20AC`,
        age: `33`,
       },{
        Identity: 'Gleison Bremer Silva Nascimento',
        teamRole: `Defender`,
        photoID: "assets/img/Bremer.webp",
        marketValue: `50.0 millions \u20AC`,
        age: `26`,
       },{
        Identity: 'Federico Gatti',
        teamRole: `Defender`,
        photoID: "assets/img/Gatti.webp",
        marketValue: `18.0 millions \u20AC`,
        age: `25`,
       },{
        Identity: 'Tiago Djalò',
        teamRole: `Defender`,
        photoID: "assets/img/Djalo.webp",
        marketValue: `15.0 millions \u20AC`,
        age: `23`,
       },{
        Identity: 'Danilo Luiz da Silva',
        teamRole: `Defender`,
        photoID: "assets/img/Danilo.webp",
        marketValue: `12.0 millions \u20AC`,
        age: `32`,
       },{
        Identity: 'Daniele Rugani',
        teamRole: `Defender`,
        photoID: "assets/img/Rugani.webp",
        marketValue: `4.0 millions \u20AC`,
        age: `29`,
       },{
        Identity: 'Andrea Cambiaso',
        teamRole: `Defender`,
        photoID: "assets/img/Cambiaso.webp",
        marketValue: `15.0 millions \u20AC`,
        age: `24`,
       },{
        Identity: 'Alex Sandro',
        teamRole: `Defender`,
        photoID: "assets/img/Sandro.webp",
        marketValue: `2.0 millions \u20AC`,
        age: `33`,
       },{
        Identity: 'Mattia de Sciglio',
        teamRole: `Defender`,
        photoID: "assets/img/De Sciglio.webp",
        marketValue: `2.0 millions \u20AC`,
        age: `31`,
       },{
        Identity: 'Manuel Locatelli',
        teamRole: `Midfielder`,
        photoID: "assets/img/Locatelli.webp",
        marketValue: `33.0 millions \u20AC`,
        age: `26`,
       },{
        Identity: 'Adrien Rabiot',
        teamRole: `Midfielder`,
        photoID: "assets/img/Rabiot.webp",
        marketValue: `40.0 millions \u20AC`,
        age: `28`,
       },{
        Identity: 'Weston mcKennie',
        teamRole: `Midfielder`,
        photoID: "assets/img/McKennie.webp",
        marketValue: `23.0 millions \u20AC`,
        age: `25`,
       },{
        Identity: 'Fabio Miretti',
        teamRole: `Midfielder`,
        photoID: "assets/img/Miretti.webp",
        marketValue: `15.0 millions \u20AC`,
        age: `20`,
       },{
        Identity: 'Nicolò Fagioli',
        teamRole: `Midfielder`,
        photoID: "assets/img/Fagioli.jpeg",
        marketValue: `15.0 millions \u20AC`,
        age: `23`,
       },{
        Identity: 'Carlos Alcaraz',
        teamRole: `Midfielder`,
        photoID: "assets/img/Alcaraz.webp",
        marketValue: `15.0 millions \u20AC`,
        age: `21`,
       },{
        Identity: 'Hans Nicolusi Caviglia',
        teamRole: `Midfielder`,
        photoID: "assets/img/Caviglia.webp",
        marketValue: `3.0 millions \u20AC`,
        age: `23`,
       },{
        Identity: 'Paul Pogba',
        teamRole: `Retired`,
        photoID: "assets/img/Pogba.webp",
        marketValue: `0.0 millions \u20AC`,
        age: `30`,
       },{
        Identity: 'Filip Kostic',
        teamRole: `Forward`,
        photoID: "assets/img/Kostic.webp",
        marketValue: `12.0 millions \u20AC`,
        age: `31`,
       },{
        Identity: 'Federico Chiesa',
        teamRole: `Forward`,
        photoID: "assets/img/Chiesa.webp",
        marketValue: `50.0 millions \u20AC`,
        age: `26`,
       },{
        Identity: 'Samuel Iling Junior',
        teamRole: `Forward`,
        photoID: "assets/img/Iling.webp",
        marketValue: `10.0 millions \u20AC`,
        age: `20`,
       },{
        Identity: 'Kenan Yildiz',
        teamRole: `Forward`,
        photoID: "assets/img/Yildiz.webp",
        marketValue: `10.0 millions \u20AC`,
        age: `18`,
       },{
        Identity: 'Dusan Vlahovic',
        teamRole: `Forward`,
        photoID: "assets/img/Vlahovic.webp",
        marketValue: `60.0 millions \u20AC`,
        age: `24`,
       },{
        Identity: 'Moise Kean',
        teamRole: `Forward`,
        photoID: "assets/img/Kean.webp",
        marketValue: `18.0 millions \u20AC`,
        age: `24`,
       },{
        Identity: 'Arkadiusz Milik',
        teamRole: `Forward`,
        photoID: "assets/img/Milik.webp",
        marketValue: `7.0 millions \u20AC`,
        age: `30`,
       }
    ]


const teamBook = document.getElementById(`teamBook`);
const goalies = document.getElementById(`Goalkeepers`);
const defenders = document.getElementById(`Defenders`);
const fielders = document.getElementById(`Midfielders`);
const forwards = document.getElementById(`Forwards`);


for (let teammate of team) {

    if(teammate.teamRole == "Goalkeeper")
    {
        goalies.innerHTML += 
        `<div class="col-3 m-3 ">
            <div class="card text-bg-primary ">
            <img src="${teammate.photoID}" class="playerImg" alt="${teammate.Identity}">
              <div class="card-body cardInfo">
                <h5>${teammate.Identity}</h5>
                <h6> ${teammate.teamRole}</h6>
                <h6> ${teammate.age}      ${teammate.marketValue}</h6>
              </div>
            </div>
        </div>`
    }
    else if (teammate.teamRole == "Defender") 
    {
    defenders.innerHTML += 
    `<div class="col-3 m-3 ">
        <div class="card text-bg-primary ">
        <img src="${teammate.photoID}" class="playerImg" alt="${teammate.Identity}">
          <div class="card-body cardInfo">
            <h5>${teammate.Identity}</h5>
            <h6> ${teammate.teamRole}</h6>
            <h6> ${teammate.age}      ${teammate.marketValue}</h6>
          </div>
        </div>
    </div>`
    } else if (teammate.teamRole == "Midfielder")
    {
        fielders.innerHTML += 
        `<div class="col-3 m-3 ">
            <div class="card text-bg-primary ">
            <img src="${teammate.photoID}" class="playerImg" alt="${teammate.Identity}">
              <div class="card-body cardInfo">
                <h5>${teammate.Identity}</h5>
                <h6> ${teammate.teamRole}</h6>
                <h6> ${teammate.age}      ${teammate.marketValue}</h6>
              </div>
            </div>
        </div>`
    } else if (teammate.teamRole == "Forward")
    {
        forwards.innerHTML += 
        `<div class="col-3 m-3 ">
            <div class="card text-bg-primary ">
            <img src="${teammate.photoID}" class="playerImg" alt="${teammate.Identity}">
              <div class="card-body cardInfo">
                <h5>${teammate.Identity}</h5>
                <h6> ${teammate.teamRole}</h6>
                <h6> ${teammate.age}      ${teammate.marketValue}</h6>
              </div>
            </div>
        </div>`
    }

}