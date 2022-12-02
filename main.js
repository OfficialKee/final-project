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
let pickPlayer = document.querySelector('#pickPlayer');
let rulesButton = document.querySelector('#instruction');
let startButton = document.querySelector('#startButton');
 let playerOne = [];
 let playerTwo = [];
 let playerOne_serialized = JSON.stringify(playerOne);
let playerTwo_serialized = JSON.stringify(playerTwo);


/*

Six event Listeners that  upon click will fetch the pokemon ans the attributes from the Api,
Selected attributes will then be used to create a pokemon object for each pokemon 
The Pokemon Objects will then be added to each player array, constructing an 'array of objects' for each player.


*/

if(bulbasaur){
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
    pokemon.img = img;
    pokemon.front = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/1.gif';
    pokemon.back = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/1.gif'

    console.log(pokemon)
    if(playerOne.length === playerTwo.length && playerOne.length < 3){
    playerOne.push(pokemon)
    }else if (playerOne.length !==  playerTwo.length && playerTwo.length < 3){
     playerTwo.push(pokemon);
    }

    console.log(playerOne)
    console.log(playerTwo)


   
});

}

if(charmander){
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
    pokemon.img = img;
    pokemon.front = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/shiny/4.gif';
    pokemon.back = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/shiny/4.gif';

    console.log(pokemon)
    if(playerOne.length === playerTwo.length && playerOne.length < 3){
    playerOne.push(pokemon)
    }else if (playerOne.length !==  playerTwo.length && playerTwo.length < 3){
         playerTwo.push(pokemon);
        
    }
    playerOne_serialized = JSON.stringify(playerOne);
    playerTwo_serialized = JSON.stringify(playerTwo);

    console.log(playerOne);
    console.log(playerTwo)
});

}

if(squirtle){
  squirtle.addEventListener('click',async () => {
    let response = await fetch(`https://pokeapi.co/api/v2/pokemon/squirtle/`);
  let data = await response.json();
  //console.log(data)

  let pokemon = {}
 let moves = []

    squirtle.style.display = 'none'
       let name = data.name;
     //to loop through move list

    let move1 = data.moves[6].move.name;
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
    pokemon.img = img;
    pokemon.front = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/shiny/7.gif';
    pokemon.back = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/shiny/7.gif'

    console.log(pokemon)
    if(playerOne.length === playerTwo.length && playerOne.length < 3){
    playerOne.push(pokemon)
    }else if (playerOne.length !==  playerTwo.length && playerTwo.length < 3){
         playerTwo.push(pokemon);
        
    }
      playerOne_serialized = JSON.stringify(playerOne);
      playerTwo_serialized = JSON.stringify(playerTwo);
    console.log(playerOne);
    console.log(playerTwo)
});

}

if(pikachu){
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
    let move2 = data.moves[3].move.name;
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
    pokemon.img = img;
    pokemon.front = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/shiny/female/25.gif';
    pokemon.back = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/shiny/25.gif';

    console.log(pokemon)
    if(playerOne.length === playerTwo.length && playerOne.length < 3){
    playerOne.push(pokemon)
    }else if (playerOne.length !==  playerTwo.length && playerTwo.length < 3){
         playerTwo.push(pokemon);
        
    }
    playerOne_serialized = JSON.stringify(playerOne);
    playerTwo_serialized = JSON.stringify(playerTwo);

    console.log(playerOne);
    console.log(playerTwo)
});

}

if(pidgey){
  pidgey.addEventListener('click',async () => {
    let response = await fetch(`https://pokeapi.co/api/v2/pokemon/pidgey/`);
  let data = await response.json();
  //console.log(data)

  let pokemon = {}
 let moves = []

    pidgey.style.display = 'none'
       let name = data.name;
     //to loop through move list

    let move1 = data.moves[4].move.name;
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
pokemon.img = img;
pokemon.front = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/shiny/16.gif';
pokemon.back = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/shiny/16.gif';

console.log(pokemon)
if(playerOne.length === playerTwo.length && playerOne.length < 3){
    playerOne.push(pokemon)
    }else if (playerOne.length !==  playerTwo.length && playerTwo.length < 3){
         playerTwo.push(pokemon);
        
    }
  playerOne_serialized = JSON.stringify(playerOne);
  playerTwo_serialized = JSON.stringify(playerTwo);

    console.log(playerOne);
    console.log(playerTwo)
});

}

if(geodude){
  geodude.addEventListener('click',async () => {
    let response = await fetch(`https://pokeapi.co/api/v2/pokemon/geodude/`);
  let data = await response.json();
  //console.log(data)

  let pokemon = {}
 let moves = []

    geodude.style.display = 'none'
       let name = data.name;
     //to loop through move list

    let move1 = data.moves[5].move.name;
    let move2 = data.moves[1].move.name;
    let move3 = data.moves[4].move.name;
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
    pokemon.img = img;
    pokemon.front = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/shiny/74.gif';
    pokemon.back = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/shiny/74.gif';

    console.log(pokemon)
    if(playerOne.length === playerTwo.length && playerOne.length < 3){
    playerOne.push(pokemon)
    }else if (playerOne.length !==  playerTwo.length && playerTwo.length < 3){
         playerTwo.push(pokemon);
        
    }
    playerOne_serialized = JSON.stringify(playerOne);
    playerTwo_serialized = JSON.stringify(playerTwo);
    console.log(playerOne);
    console.log(playerTwo)
});

}

if(rulesButton){

  rulesButton.addEventListener('click',()=>{
    alert('In order to begin the game Player 1 must choose a pokeball. Player 2 will then choose their pokeball. This sequence will continue until there are no more pokeballs remaining.Once all the pokeballs are gone click the Start Game button , and you will enter the battlefield. ')
  });
  
}

if(startButton){
  startButton.addEventListener('click',()=>{
    localStorage.setItem('playerOne',playerOne_serialized);
    localStorage.setItem('playerTwo',playerTwo_serialized);
    console.log(playerOne_serialized && playerTwo_serialized);
  



  })
}


/*.............................................Page TWo Main JS!!!!! ............................................*/

/*Query Selecting elements from game.html
*/ 
// pokemon shown on field
let pokemonOnField = document.querySelector('#trainerOneTeam');
let pokemonOnField2 = document.querySelector('#trainerTwoTeam');
//game start button
let fightButton = document.querySelector('#fightButton');
//pokemon buttons array
let addPokemon = document.querySelectorAll('.pokemon');
let addPokemonTwo = document.querySelectorAll('.pokemonTwo');
// pokemon attacks
let atkOne = document.querySelector('#atkOne');
let atkTwo = document.querySelector('#atkTwo');
let atkThree = document.querySelector('#atkThree');
let atkOne2 = document.querySelector('#atkOne2');
let atkTwo2 = document.querySelector('#atkTwo2');
let atkThree2 = document.querySelector('#atkThree2');
// pokemon buttons individual
let pokemonOne =document.querySelector('#pokemonOneOne');
let pokemonTwo =document.querySelector('#pokemonOneTwo')
let pokemonThree =document.querySelector('#pokemonOneThree')
let pokemonOne2 =document.querySelector('#pokemonTwoOne')
let pokemonTwo2 =document.querySelector('#pokemonTwoTwo')
let pokemonThree2 =document.querySelector('#pokemonTwoThree')
//creating boolean to checl if pokemon is dead

//stored array in my local storage earlier so now im retrieving that information so that it can be applied to game
let getPlayerOne = JSON.parse(localStorage.getItem('playerOne'))
    let getPlayerTwo = JSON.parse(localStorage.getItem('playerTwo'))
    console.log(getPlayerOne);
     console.log(getPlayerTwo);




if(fightButton){
      fightButton.addEventListener('click',()=>{
        console.log('hi')
        //created loop to add   pokemon  to webpage upon click of fight button 
        
       for (let i = 0; i < 3; i++) {
        addPokemon[i].style.backgroundImage = `url('${getPlayerOne[i].img}')`
        
       }
       for (let i = 0; i < 3; i++) {
        addPokemonTwo[i].style.backgroundImage = `url('${getPlayerTwo[i].img}')`
        
       }
       fightButton.disabled = true;
       alert('Populated below are the pokemon that you chose on the last page.  The pokemon have attacks specific to their type. Some pokemon are better against certain types. When a pokemon is knocked out , you will be prompted to choose another. The battle ends when either player doesnt have any pokemon that are able to continue. Last man Standing is the winner! ');
        })
        
      }


///assigning attack to buttons as pokemon are chosen

if(pokemonOne){
  pokemonOne.addEventListener('click',()=>{
    console.log(getPlayerOne[0].moves);
    atkOne.innerHTML = getPlayerOne[0].moves[0]
    atkTwo.innerHTML = getPlayerOne[0].moves[1]
    atkThree.innerHTML = getPlayerOne[0].moves[2]
    pokemonOnField.src = getPlayerOne[0].back
  })
}

if(pokemonTwo){
  pokemonTwo.addEventListener('click',()=>{
    console.log(getPlayerOne[1].moves);
    atkOne.innerHTML = getPlayerOne[1].moves[0]
    atkTwo.innerHTML = getPlayerOne[1].moves[1]
    atkThree.innerHTML = getPlayerOne[1].moves[2]
    pokemonOnField.src = getPlayerOne[1].back
  })
}

if(pokemonThree){
  pokemonThree.addEventListener('click',()=>{
    console.log(getPlayerOne[2].moves);
    atkOne.innerHTML = getPlayerOne[2].moves[0]
    atkTwo.innerHTML = getPlayerOne[2].moves[1]
    atkThree.innerHTML = getPlayerOne[2].moves[2]
    pokemonOnField.src = getPlayerOne[2].back
  })
}

if(pokemonOne2){
  pokemonOne2.addEventListener('click',()=>{
    console.log(getPlayerTwo[0].moves);
    atkOne2.innerHTML = getPlayerTwo[0].moves[0]
    atkTwo2.innerHTML = getPlayerTwo[0].moves[1]
    atkThree2.innerHTML = getPlayerTwo[0].moves[2]
    pokemonOnField2.src = getPlayerTwo[0].front
  })
}

if(pokemonTwo2){
  pokemonTwo2.addEventListener('click',()=>{
    console.log(getPlayerTwo[1].moves);
    atkOne2.innerHTML = getPlayerTwo[1].moves[0]
    atkTwo2.innerHTML = getPlayerTwo[1].moves[1]
    atkThree2.innerHTML = getPlayerTwo[1].moves[2]
    pokemonOnField2.src = getPlayerTwo[1].front
  })
}

if(pokemonThree2){
  pokemonThree2.addEventListener('click',()=>{
    console.log(getPlayerTwo[2].moves);
    atkOne2.innerHTML = getPlayerTwo[2].moves[0]
    atkTwo2.innerHTML = getPlayerTwo[2].moves[1]
    atkThree2.innerHTML = getPlayerTwo[2].moves[2]
    pokemonOnField2.src = getPlayerTwo[2].front
  })
}

