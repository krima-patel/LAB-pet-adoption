const pets = [
    {
      id: 1,
      name: "Dusty",
      color: "Green",
      specialSkill: "Gives sincere apologies.",
      type: "cat",
      imageUrl: "http://kittentoob.com/wp-content/uploads/2015/06/funny-cat-with-a-towel.jpg"
    },
    {
      id: 2,
      name: "Trouble",
      color: "Brown",
      specialSkill: "Just picks the tomatoes off of a sandwich instead of requesting a whole new sandwich.",
      type: "dino",
      imageUrl: "dino1.jpg"
    },
    {
      id: 3,
      name: "Whiskers",
      color: "Yellow",
      specialSkill: "Can prove he is a real man by drinking whiskey.",
      type: "dino",
      imageUrl: "https://mydinosaurs.com/wp-content/uploads/2017/02/2-3-600x400.jpg"
    },
    {
      id: 4,
      name: "Coco",
      color: "Black",
      specialSkill: "Burps minimally.",
      type: "dog",
      imageUrl: "http://cdn.akc.org/content/article-body-image/funny-pembroke_welsh_corgi.jpg"
    },
    {
      id: 5,
      name: "Spooky",
      color: "Brown",
      specialSkill: "Comfortable in the outdoors for up to eight hours.",
      type: "cat",
      imageUrl: "http://www.catster.com/wp-content/uploads/2017/08/A-fluffy-cat-looking-funny-surprised-or-concerned.jpg"
    },
    {
      id: 6,
      name: "Tiger",
      color: "Black",
      specialSkill: "Can read (but cannot understand) Hebrew.",
      type: "dog",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/7/7e/Basset_Hound_600.jpg"
    },
    {
      id: 7,
      name: "Oreo",
      color: "Yellow",
      specialSkill: "Able to stop chewing ice or whistling on request.",
      type: "cat",
      imageUrl: "https://i.pinimg.com/originals/9d/da/3e/9dda3e5fd2b9886fc3d13ee47f52e8a0.jpg"
    },
    {
      id: 7,
      name: "Ginger",
      color: "Grey",
      specialSkill: "Comfortable in the outdoors for up to eight hours.",
      type: "dino",
      imageUrl: "dino2.jpg"
    },
    {
      id: 8,
      name: "Sassy",
      color: "Brown",
      specialSkill: "Adept at talking self and others out of fights.",
      type: "cat",
      imageUrl: "https://tailandfur.com/wp-content/uploads/2015/09/40-Amazing-Cat-Funny-Moment-Pictures-Feature-Image.jpg"
    },
    {
      id: 9,
      name: "Sammy",
      color: "Blue",
      specialSkill: "Listens attentively to boring stories.",
      type: "cat",
      imageUrl: "https://i.pinimg.com/originals/04/54/92/0454926d39eeb420f4f01948e94e9e41.jpg"
    },
    {
      id: 10,
      name: "Coco",
      color: "Orange",
      specialSkill: "Can be around food without staring creepily at it.",
      type: "dino",
      imageUrl: "dino3.jpg"
    },
    {
      id: 11,
      name: "Buster",
      color: "Green",
      specialSkill: "Does not use excessive acronyms.",
      type: "dog",
      imageUrl: "https://i.pinimg.com/originals/1f/30/8c/1f308c9c108a384b91b39430cc7312e9.jpg"
    },
    {
      id: 12,
      name: "Chester",
      color: "Red",
      specialSkill: "Expertly quotes and recognizes dialogue from early seasons of The Simpsons.",
      type: "dog",
      imageUrl: "http://1kjkdg1axrkd2g03cnboj761.wpengine.netdna-cdn.com/wp-content/uploads/2017/12/braydon-anderson-105552-e1512684107659.jpg"
    },
    {
      id: 13,
      name: "Samantha",
      color: "Brown",
      specialSkill: "Always up for dessert.",
      type: "cat",
      imageUrl: "http://3.bp.blogspot.com/-RzIFLsIO-XQ/UFoMLOT66JI/AAAAAAAAVps/JRF98hdA9S8/s640/funny-cat-pictures-016-027.jpg"
    },
    {
      id: 14,
      name: "Coco",
      color: "Red",
      specialSkill: "Burps minimally.",
      type: "cat",
      imageUrl: "http://cathumor.net/wp-content/uploads/2013/12/cat-humor-funny-karate-cat-2.jpg"
    },
    {
      id: 15,
      name: "Smokey",
      color: "Brown",
      specialSkill: "Drives at a safe rate of speed in snow or rain.",
      type: "dino",
      imageUrl: "dino4.jpg"
    },
    {
      id: 16,
      name: "Muffin",
      color: "Yellow",
      specialSkill: "Does not freak out if you haven’t seen his favorite movie (The Big Lebowski).",
      type: "cat",
      imageUrl: "cat1.jpg"
    },
    {
      id: 17,
      name: "Salem",
      color: "Brown",
      specialSkill: "Proficient in air guitar",
      type: "dino",
      imageUrl: "dino5.jpg"
    },
    {
      id: 18,
      name: "Callie",
      color: "Blue",
      specialSkill: "Listens attentively to boring stories.",
      type: "dog",
      imageUrl: "http://dailynewsdig.com/wp-content/uploads/2014/03/Creative-And-Funny-Dog-Stock-Photography-Pictures-2.jpg"
    },
    {
      id: 19,
      name: "Spooky",
      color: "Black",
      specialSkill: "Uses litter box at appropriate hours.",
      type: "cat",
      imageUrl: "cat2.jpg"
    },
    {
      id: 20,
      name: "Miss kitty",
      color: "Red",
      specialSkill: "Owns a Nintendo Power Glove.",
      type: "dino",
      imageUrl: "dino6.jpg"
    },
    {
      id: 21,
      name: "Snuggles",
      color: "Orange",
      specialSkill: "Is comfortable with jokes about his receding hairline.",
      type: "cat",
      imageUrl: "cat3.jpg"
    },
    {
      id: 22,
      name: "Buddy",
      color: "Red",
      specialSkill: "Enjoys fine wine.",
      type: "dog",
      imageUrl: "http://1.bp.blogspot.com/-VjM0CmtN-vU/T7YX-LXa09I/AAAAAAAADA0/Vt1oGWEG0lw/s1600/sheepdog+border+collie+shakes+off+water+funny+picture+photo+pulling+faces+raspberry+tongue.jpg"
    },
    {
      id: 23,
      name: "George",
      color: "Brown",
      specialSkill: "Participates in karaoke but does not force others to go out to karaoke.",
      type: "dog",
      imageUrl: "dog1.jpg"
    },
    {
      id: 24,
      name: "Salem",
      color: "Red",
      specialSkill: "Knows the words to 4 rap songs.",
      type: "cat",
      imageUrl: "cat4.jpg"
    },
    {
      id: 25,
      name: "Bubba",
      color: "Yellow",
      specialSkill: "Cleans himself.",
      type: "dog",
      imageUrl: "https://www.thetrendywhippet.co.uk/wp-content/uploads/2016/11/IMG_1651-600x400.jpg"
    },
    {
      id: 26,
      name: "Chloe",
      color: "Green",
      specialSkill: "Admits he is wrong",
      type: "dino",
      imageUrl: "https://assets.creationmuseum.org/img/pages/1703-DinoDen-TwoCard.jpg"
    },
    {
      id: 27,
      name: "Nala",
      color: "Purple",
      specialSkill: "Dances when he has to.",
      type: "cat",
      imageUrl: "https://tailandfur.com/wp-content/uploads/2016/03/40-Scary-and-Funny-Cat-Pictures-8.jpg"
    },
    {
      id: 28,
      name: "Oscar",
      color: "Green",
      specialSkill: "Gives hugs with appropriate pressure and for the right length of time.",
      type: "cat",
      imageUrl: "http://img.izismile.com/img/img2/20090219/cats_02.jpg"
    },
    {
      id: 29,
      name: "Lucy",
      color: "Red",
      specialSkill: "Doesn’t get weirded out by the word “moist.”",
      type: "dino",
      imageUrl: "dino7.jpg"
    }
  ];
const renderToDom = (divId, textToRender) => {
  const selectedElement = document.querySelector(divId);
  selectedElement.innerHTML = textToRender;
};

pets.forEach((item, index)=>{
  item.id = index+1;
});

const petModal = () => {
  const domString = 
  `
  <!-- Button trigger modal -->
    <button type="button" class="btn btn-light" data-bs-toggle="modal" data-bs-target="#add-video">
    Add a Pet Here!
    </button>
     <!-- Modal -->
  <div class="modal fade" id="add-video" tabindex="-1" aria-labelledby="add-video" aria-hidden="true">
    <div class="modal-dialog modal-fullscreen-md-down">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Add a Pet Here!</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body" id="modal-body">
        <form>
        <div class="form-floating mb-3">
          <input class="form-control form-control-lg" type="text" placeholder="Name" id="name" aria-label="name" required>
          <label for="name">Name:</label>
        </div>
    
        <div class="form-floating mb-3">
          <input class="form-control form-control-lg" type="text" placeholder="Color" id="color" aria-label="color" required>
          <label for="title">Color:</label>
        </div>
    
        <div class="form-floating mb-3">
        <input class="form-control form-control-lg" type="text" placeholder="Special Skill" id="specialSkill" aria-label="specialSkill" required>
        <label for="title">Special Skill:</label>
      </div>
        
      <div class="form-floating mb-3">
      <input class="form-control form-control-lg" type="text" placeholder="Type of Pet" id="type" aria-label="type" required>
      <label for="title">Type:</label>
    </div>
      
    <div class="form-floating mb-3">
    <input class="form-control form-control-lg" type="text" placeholder="Image URL" id="imageUrl" aria-label="imageUrl" required>
    <label for="title">Image URL:</label>
  </div>
    
        <button 
          type="submit" 
          class="btn btn-success" 
        >
          Submit
        </button>
      </form>
        </div>
      </div>
    </div>
  </div>
`;
renderToDom("#formContainer", domString);
};

const filterBtns  = () => {
  let domString =`
  <div class="d-grid gap-2 d-md-block">
  <button class="btn btn-primary" type="button" id="cat">Cats</button>
  <button class="btn btn-primary" type="button" id="dog">Dogs</button>
  <button class="btn btn-primary" type="button" id="dino">Dinos</button>
  <button class="btn btn-primary" type="button" id="all">View All</button>
</div>
`;
renderToDom("#filterContainer", domString)
};

const renderCards = (array) => {
  let domString = '';
  for (const item of array) {
    domString += `<div class="card" style="width: 18rem;">
    <div class="card-body">
    <div>
      <button class="btn btn-primary" id="delete--${item.name}">Delete Me</button>
    </div>
      <h2 class="card-text"><b>${item.name}</b></h2>
      <img src="${item.imageUrl}" class="card-img-top" alt="...">
      <h5 class="color">${item.color}</h5>
      <p class=skl>${item.specialSkill}</p>
      <div class="d-grid gap-2">
        <p>${item.type}</p>
      </div>
    </div>
  </div>`;
  }
  renderToDom('#animals', domString);
};

// EventListeners:
const eventListeners = () => {
  document.querySelector('#filterContainer').addEventListener('click', (e) => {
    if (e.target.id === "all") {
      renderCards(pets);
    } else if (e.target.id) {
      const types = pets.filter(taco => {
        console.log(taco.type, e.target.id);
        return (taco.type === e.target.id)})
      renderCards(types);
      console.log(types);
    }
  })};

// Delete Buttons:
document.querySelector('#animals').addEventListener('click', (e) => {
  if (e.target.id) {
    const [method, name] = e.target.id.split('--');
    const index = pets.findIndex(pet => pet.name === name)
    if (e.target.id.includes('delete')) {
      pets.splice(index, 1)
      renderCards(pets);
    }
  }
});

// Animal Form: 
const form = document.querySelector('#formContainer');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const petObj = {
    name: document.querySelector('#name').value,
    color: document.querySelector('#color').value,
    specialSkill: document.querySelector('#specialSkill').value,
    type: document.querySelector('#type').value,
    imageUrl: document.querySelector('#imageUrl').value,
  }
  pets.push(petObj);
  renderCards(pets);
  formModal.hide()
  form.requestFullscreen();
});


// Render Functions, put at end to ensure documents load:
const startApp = () => {
  petModal()
  filterBtns()
  renderCards(pets)
  eventListeners()
  };
  startApp()
