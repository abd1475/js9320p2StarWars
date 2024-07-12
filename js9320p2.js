let stars = [
  {
    "id": 1,
    "name": "Luke Skywalker",
    "pic":  "https://vignette.wikia.nocookie.net/starwars/images/2/20/LukeTLJ.jpg",
    "homeworld": "tatooine"
  },
  {
    "id": 2,
    "name": "C-3PO",
    "pic": "https://vignette.wikia.nocookie.net/starwars/images/3/3f/C-3PO_TLJ_Card_Trader_Award_Card.png",
    "homeworld": "tatooine"
  },
  {
    "id": 3,
    "name": "R2-D2",
    "pic": "https://vignette.wikia.nocookie.net/starwars/images/e/eb/ArtooTFA2-Fathead.png",
    "homeworld": "naboo"
  },
  {
    "id": 4,
    "name": "Darth Vader",
    "pic": "https://vignette.wikia.nocookie.net/fr.starwars/images/3/32/Dark_Vador.jpg",
    "homeworld": "tatooine"
  },
  {
    "id": 5,
    "name": "Leia Organa",
    "pic": "https://vignette.wikia.nocookie.net/starwars/images/f/fc/Leia_Organa_TLJ.png",
    "homeworld": "alderaan"
  },
  {
    "id": 6,
    "name": "Owen Lars",
    "pic": "https://vignette.wikia.nocookie.net/starwars/images/e/eb/OwenCardTrader.png",
    "homeworld": "tatooine"
  },
  {
    "id": 7,
    "name": "Beru Whitesun lars",
    "pic": "https://vignette.wikia.nocookie.net/starwars/images/c/cc/BeruCardTrader.png",
    "homeworld": "tatooine"
  },
  {
    "id": 8,
    "name": "R5-D4",
    "pic": "https://vignette.wikia.nocookie.net/starwars/images/c/cb/R5-D4_Sideshow.png",
    "homeworld": "tatooine"
  },
  {
    "id": 9,
    "name": "Biggs Darklighter",
    "pic": "https://vignette.wikia.nocookie.net/starwars/images/0/00/BiggsHS-ANH.png",
    "homeworld": "tatooine"
  },
  {
    "id": 10,
    "name": "Obi-Wan Kenobi",
    "pic": "https://vignette.wikia.nocookie.net/starwars/images/4/4e/ObiWanHS-SWE.jpg",
    "homeworld": "stewjon"
  },
  {
    "id": 11,
    "name": "Anakin Skywalker",
    "pic": "https://vignette.wikia.nocookie.net/starwars/images/6/6f/Anakin_Skywalker_RotS.png",
    "homeworld": "tatooine"
  },
  {
    "id": 12,
    "name": "Wilhuff Tarkin",
    "pic": "https://vignette.wikia.nocookie.net/starwars/images/c/c1/Tarkininfobox.jpg",
    "homeworld": "eriadu"
  },
  {
    "id": 13,
    "name": "Chewbacca",
    "pic": "https://vignette.wikia.nocookie.net/starwars/images/4/48/Chewbacca_TLJ.png",
    "homeworld": "kashyyyk"
  },
  {
    "id": 14,
    "name": "Han Solo",
    "pic": "https://vignette.wikia.nocookie.net/starwars/images/e/e2/TFAHanSolo.png",
    "homeworld": "corellia"
  },
  {
    "id": 15,
    "name": "Greedo",
    "pic": "https://vignette.wikia.nocookie.net/starwars/images/c/c6/Greedo.jpg",
    "homeworld": "Rodia"
  },
  {
    "id": 16,
    "name": "Jabba Desilijic Tiure",
    "pic": "https://vignette.wikia.nocookie.net/starwars/images/7/7f/Jabba_SWSB.png",
    "homeworld": "tatooine"
  },
  {
    "id": 18,
    "name": "Wedge Antilles",
    "pic": "wedge.png",
    "homeworld": "corellia"
  },
  {
    "id": 19,
    "name": "Jek Tono Porkins",
    "pic": "https://vignette.wikia.nocookie.net/starwars/images/e/eb/JekPorkins-DB.png",
    "homeworld": "bestine"
  },
  {
    "id": 20,
    "name": "Yoda",
    "pic": "https://vignette.wikia.nocookie.net/starwars/images/d/d6/Yoda_SWSB.png",
  },
  {
    "id": 21,
    "name": "Palpatine",
    "pic": "https://vignette.wikia.nocookie.net/starwars/images/d/d8/Emperor_Sidious.png",
    "homeworld": "naboo"
  }
];

// Homeworlds in an array
function getHomeworlds(input, field) {
  const output = [];
  for (var i=0; i<input.length; ++i) {
    output.push(input[i][field] ?? "other");
  };
  return output
};
const homeworldRaw = getHomeworlds(stars, "homeworld"); 
const homeworldUnique = [...new Set(homeworldRaw)];     
const homeworlds = homeworldUnique.map((lower) => lower.toLowerCase()); 

// Showing and hiding of the characters
let button = document.querySelector(".btn");
let contnr = document.querySelector(".container");
let item   = document.createElement("div");          
item.classList.add("row");
contnr.appendChild(item);
let hide = false;

function renderStars() {
  if(hide) {
    item.innerHTML="";
    hide = false;
    button.innerHTML="Show The Stars";
    button.style.backgroundColor="#198754";
    filterStars.innerHTML="";
  }else {
    filterButton();
    stars.forEach((star) => {
      item.innerHTML+= `
        <div class="col-12 col-md-6 col-xl-3 my-5" id="filterDiv" data-id="${star.homeworld ?? "other"}">
          <div class="card h-100">          
            <img src="${star.pic}" class="card-img-top h-100">
            <div class="card-body">
              <h4 class="card-title">${star.name}</h4>
              <p  class="card-text">${star.homeworld ?? "other"}</p>
            </div>
          </div>
        </div>  
      `;
    });
    hide = true;
    button.innerHTML="Hide The Stars";
    button.style.backgroundColor="#dc3545"
  };
};

// Filter
function filter() {
  if (filteredHomeworld != null) {
    document.querySelectorAll("#filterDiv").forEach(function(charac) {
      let id = charac.getAttribute("data-id").toLowerCase();

      if (id == filteredHomeworld) {
        charac.style.display = "block";
      } else {
        charac.style.display = "none";
      }
    });
  };
};

// Filter Button
function filterButton() {
  item.innerHTML += `
    <div class="row-col-lg-4 text-center">
      <button class="btn btn-dark rounded-pill p-2 px-4 fs-4 my-4" onclick="filterButtonText()" id="filter-button"> 
      Filter The Stars</button> 
    </div>
  `;
};

// Filter Button Text and show inputs
let inputsCreated = false;
function filterButtonText() {
  radioInputs();
  let filterButton = document.getElementById("filter-button");
  let filterStars  = document.getElementById("filter-stars");
  
  if (filterButton && filterStars) {
   
    if (inputsCreated) {
      filterStars.innerHTML = "";
      if (filterButton.innerText == "Hide The Filter") {
        filterButton.innerText = "Filter The Stars";
        filterButton.style.backgroundColor="#212529"
      } else {
        filterButton.innerText = "Hide The Filter ";
        radioInputs();
        filterButton.style.backgroundColor="#0d6efd"
      }
    };
  };
};

// Radio inputs
let filterStars  = document.getElementById("filter-stars");
function radioInputs() {
  homeworlds.forEach((homeworld) => {
    filterStars.innerHTML += `
      <div class="col-3">
        <div class="form-check col-2">
          <input class="form-check-input" type="radio" name="starsRadios" onclick="filterRenderCard('${homeworld}')"  id="starsInput" value="${homeworld}"/>
          <label class="form-check-label text-white" for="starsInput">${homeworld}</label> 
        </div>
      </div>
    `;
  });
  inputsCreated = true;
};

// Filtered homeworlds
let filteredHomeworld;
function filterRenderCard(homeworld) {
  filteredHomeworld = homeworld;
  if (filteredHomeworld != null) {
    document.querySelectorAll("#filterDiv").forEach(function (element) {
      let id = element.getAttribute("data-id").toLowerCase();

      if (id == filteredHomeworld) {
        element.style.display = "block";
      } else {
        element.style.display = "none";
      }
    });
  };
};



