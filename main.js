/*
Below are Six buttons which  will be utilized to choose the teams of pokemon for each player.
Two empty player arrays have also been created to hold teams of pokemon.

*/

let bulbasaur = document.querySelector('#bulbasaur');
let charmander = document.querySelector('#charmander');
let squirtle = document.querySelector('#squirtle');
let pikachu = document.querySelector('#pikachu');
let pidgey = document.querySelector('#pidgey');
let geodude = document.querySelector('#geodude');
let pickPlayer = document.querySelector('#pickPlayer')
 let playerOne = [];
 let playerTwo = [];


/*

Six event Listeners that  upon click will fetch the pokemon ans the attributes from the Api,
Selected attributes will then be used to create a pokemon object for each pokemon 
The Pokemon Objects will then be added to each player array, construction an 'array of objects'


*/



bulbasaur.addEventListener('click',async () => {
    let response = await fetch(`https://pokeapi.co/api/v2/pokemon/bulbasaur/`);
  let data = await response.json();
  //console.log(data)
 let pokemon = {}
 let moves = []

    bulbasaur.style.display = 'none';
       let name = data.name;
     //to loop through move list

    let move1 = data.moves[0].move.name;
    let move2 = data.moves[1].move.name;
    let move3 = data.moves[2].move.name;
    let img = data.sprites.front_shiny
    //console.log(img)
    moves.push(move1);
    moves.push(move2);
    moves.push(move3);
    
    //this is HP
    
     let hp = data.stats[0].base_stat;

    //this is attack
     let atk = data.stats[1].base_stat;
    //this is defense
   let def = data.stats[2].base_stat;

    pokemon.name = name;
    pokemon.moves = moves;
    pokemon.attack = atk;
    pokemon.defense = def;
    pokemon.img = img

    console.log(pokemon)
    if(playerOne.length === playerTwo.length && playerOne.length < 3){
    playerOne.push(pokemon)
    }else if (playerOne.length !==  playerTwo.length && playerTwo.length < 3){
     playerTwo.push(pokemon);
    }

    console.log(playerOne)
    console.log(playerTwo)


   
});



charmander.addEventListener('click',async () => {
    let response = await fetch(`https://pokeapi.co/api/v2/pokemon/charmander/`);
  let data = await response.json();
  //console.log(data)

  let pokemon = {}
 let moves = []

    charmander.style.display = 'none'
       let name = data.name;
     //to loop through move list

    let move1 = data.moves[0].move.name;
    let move2 = data.moves[1].move.name;
    let move3 = data.moves[2].move.name;
    let img = data.sprites.front_shiny;
    //console.log(img);
    moves.push(move1);
    moves.push(move2);
    moves.push(move3);
    
    //this is HP
    
     let hp = data.stats[0].base_stat;

    //this is attack
     let atk = data.stats[1].base_stat;
    //this is defense
   let def = data.stats[2].base_stat;

    pokemon.name = name;
    pokemon.moves = moves;
    pokemon.attack = atk;
    pokemon.defense = def;
    pokemon.img = img

    console.log(pokemon)
    if(playerOne.length === playerTwo.length && playerOne.length < 3){
    playerOne.push(pokemon)
    }else if (playerOne.length !==  playerTwo.length && playerTwo.length < 3){
         playerTwo.push(pokemon);
        
    }

    console.log(playerOne);
    console.log(playerTwo)
});


squirtle.addEventListener('click',async () => {
    let response = await fetch(`https://pokeapi.co/api/v2/pokemon/squirtle/`);
  let data = await response.json();
  //console.log(data)

  let pokemon = {}
 let moves = []

    squirtle.style.display = 'none'
       let name = data.name;
     //to loop through move list

    let move1 = data.moves[0].move.name;
    let move2 = data.moves[1].move.name;
    let move3 = data.moves[2].move.name;
    let img = data.sprites.front_shiny
    //console.log(img)
    moves.push(move1);
    moves.push(move2);
    moves.push(move3);
    
    //this is HP
    
     let hp = data.stats[0].base_stat;

    //this is attack
     let atk = data.stats[1].base_stat;
    //this is defense
   let def = data.stats[2].base_stat;

    pokemon.name = name;
    pokemon.moves = moves;
    pokemon.attack = atk;
    pokemon.defense = def;
    pokemon.img = img

    console.log(pokemon)
    if(playerOne.length === playerTwo.length && playerOne.length < 3){
    playerOne.push(pokemon)
    }else if (playerOne.length !==  playerTwo.length && playerTwo.length < 3){
         playerTwo.push(pokemon);
        
    }
    console.log(playerOne);
    console.log(playerTwo)
});


pikachu.addEventListener('click',async () => {
    let response = await fetch(`https://pokeapi.co/api/v2/pokemon/pikachu/`);
  let data = await response.json();
  //console.log(data)

  let pokemon = {}
 let moves = []

    pikachu.style.display = 'none'
       let name = data.name;
     //to loop through move list

    let move1 = data.moves[0].move.name;
    let move2 = data.moves[1].move.name;
    let move3 = data.moves[2].move.name;
    let img = data.sprites.front_shiny
    //console.log(img)
    moves.push(move1);
    moves.push(move2);
    moves.push(move3);
    
    //this is HP
    
     let hp = data.stats[0].base_stat;

    //this is attack
     let atk = data.stats[1].base_stat;
    //this is defense
   let def = data.stats[2].base_stat;

    pokemon.name = name;
    pokemon.moves = moves;
    pokemon.attack = atk;
    pokemon.defense = def;
    pokemon.img = img

    console.log(pokemon)
    if(playerOne.length === playerTwo.length && playerOne.length < 3){
    playerOne.push(pokemon)
    }else if (playerOne.length !==  playerTwo.length && playerTwo.length < 3){
         playerTwo.push(pokemon);
        
    }

    console.log(playerOne);
    console.log(playerTwo)
});


pidgey.addEventListener('click',async () => {
    let response = await fetch(`https://pokeapi.co/api/v2/pokemon/pidgey/`);
  let data = await response.json();
  //console.log(data)

  let pokemon = {}
 let moves = []

    pidgey.style.display = 'none'
       let name = data.name;
     //to loop through move list

    let move1 = data.moves[0].move.name;
    let move2 = data.moves[1].move.name;
    let move3 = data.moves[2].move.name;
    let img = data.sprites.front_shiny;
    //console.log(img)
    moves.push(move1);
    moves.push(move2);
    moves.push(move3);
    
    
    //this is HP
    
     let hp = data.stats[0].base_stat;

    //this is attack
     let atk = data.stats[1].base_stat;
    //this is defense
   let def = data.stats[2].base_stat;

pokemon.name = name;
pokemon.moves = moves;
pokemon.attack = atk;
pokemon.defense = def;
pokemon.img = img

console.log(pokemon)
if(playerOne.length === playerTwo.length && playerOne.length < 3){
    playerOne.push(pokemon)
    }else if (playerOne.length !==  playerTwo.length && playerTwo.length < 3){
         playerTwo.push(pokemon);
        
    }

    console.log(playerOne);
    console.log(playerTwo)
});


geodude.addEventListener('click',async () => {
    let response = await fetch(`https://pokeapi.co/api/v2/pokemon/geodude/`);
  let data = await response.json();
  //console.log(data)

  let pokemon = {}
 let moves = []

    geodude.style.display = 'none'
       let name = data.name;
     //to loop through move list

    let move1 = data.moves[0].move.name;
    let move2 = data.moves[1].move.name;
    let move3 = data.moves[2].move.name;
    let img = data.sprites.front_shiny;
    //console.log(img)
    moves.push(move1);
    moves.push(move2);
    moves.push(move3);
    
    //this is HP
    
     let hp = data.stats[0].base_stat;

    //this is attack
     let atk = data.stats[1].base_stat;
    //this is defense
   let def = data.stats[2].base_stat;

    pokemon.name = name;
    pokemon.moves = moves;
    pokemon.attack = atk;
    pokemon.defense = def;
    pokemon.img = img

    console.log(pokemon)
    if(playerOne.length === playerTwo.length && playerOne.length < 3){
    playerOne.push(pokemon)
    }else if (playerOne.length !==  playerTwo.length && playerTwo.length < 3){
         playerTwo.push(pokemon);
        
    }
    console.log(playerOne);
    console.log(playerTwo)
});




