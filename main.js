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
 let restartGame = ()=>{
  window.location = 'index.html '
}


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
//attack animation
let attackBall = document.querySelector('#attackBall');
//attack colors 
 let leafAttack = 'https://th.bing.com/th/id/R.fb7f00e5d9f33c02df3c0ea6e95d8882?rik=8veNBJzHKsJb1g&riu=http%3a%2f%2fbestanimations.com%2fMilitary%2fExplosions%2fexplosion-animation-5.gif&ehk=r%2fNqV4a%2fh4%2faKUfBbMpN2tZ7tasklkuwdO6pCy71Vxs%3d&risl=&pid=ImgRaw&r=0';
 let lightningAttack = 'https://www.animatedimages.org/data/media/41/animated-lightning-and-thunderbolt-image-0003.gif';
 let windAttack = 'https://th.bing.com/th/id/R.fa1772d3e424fcf4dee0fb98097a4b51?rik=1BMJt0OH01KAGg&riu=http%3a%2f%2fthedogladysden.com%2fwp-content%2fuploads%2f2013%2f05%2fpuff-of-smoke.gif&ehk=eJ6zTUn35D%2bY4vKL5I5qjAi9XODmtLgnum2lqPIopjM%3d&risl=&pid=ImgRaw&r=0';
 let fireAttack = 'https://i.gifer.com/origin/00/00ae53a95ee7af0be395f5291d792c9a.gif';
 let waterAttack = 'https://img.itch.zone/aW1nLzQyNTM5MjUuZ2lm/347x500/5bpeWY.gif';
 let rockAttack = 'https://cdn.forums.klei.com/monthly_2017_02/cavein_fall.gif.cd264d70f2bf74cce1037040dd5f5e9a.gif'
 let emptyString = ''
 //function to manipulate attack image
 function changeAttack(attackType){
  attackBall.src = `${attackType}`
 }
 let simpsonKiller = ()=>{
  pokemonOnField.src = 'https://media.tenor.com/images/8ac941c36812a99995c29fd8527222bb/tenor.gif'
  
 };
 let iKilledKenny = ()=>{
  pokemonOnField2.src = 'https://media0.giphy.com/media/l0HlQrYmGIbYH1wYg/giphy.gif?cid=790b761144bd095685c155270e0307cffe0e6e4f28fcdbcf&rid=giphy.gif&ct=g'
 };
 
// trainer health bars
let healthBarOne = document.querySelector('#healthOne');
let healthBarTwo = document.querySelector('#HwalthTwo');
//game start button
let fightButton = document.querySelector('#fightButton');
//pokemon buttons array
let addPokemon = document.querySelectorAll('.pokemon');
let addPokemonTwo = document.querySelectorAll('.pokemonTwo');
// pokemon attacks
let atkOne = document.querySelector('#atkOne');
let atkTwo = document.querySelector('#atkTwo');
let atkThree = document.querySelector('#atkThree');
let atkFour = document.querySelector('#atkOne2');
let atkFive = document.querySelector('#atkTwo2');
let atkSix = document.querySelector('#atkThree2');
// pokemon buttons individual
let pokemonOne =document.querySelector('#pokemonOneOne');
let pokemonTwo =document.querySelector('#pokemonOneTwo');
let pokemonThree =document.querySelector('#pokemonOneThree');
let pokemonFour =document.querySelector('#pokemonTwoOne');
let pokemonFive =document.querySelector('#pokemonTwoTwo');
let pokemonSix =document.querySelector('#pokemonTwoThree');
let announcement = document.querySelector('#announcement');
//creating booleans to facilitate fight sequence...... false booleans for pokemon selection will be set to true once selected
let pokemonChosen = false;
let p1 = false;
let p2 = false;
let p3 = false;
let p4 = false;
let p5 = false;
let p6 = false;
//booleans for attack choices
let atk1 = false;
let atk2 = false;
let atk3 = false;
let atk4 = false;
let atk5 = false;
let atk6 = false;
//creating an empty array becuase i might need it
let battleArray = []
let player1 = 3
let player2 = 3
//stored array in my local storage earlier so now im retrieving that information so that it can be applied to game
let getPlayerOne = JSON.parse(localStorage.getItem('playerOne'))
    let getPlayerTwo = JSON.parse(localStorage.getItem('playerTwo'))
    // console.log(getPlayerOne);
    //  console.log(getPlayerTwo);




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
    pokemonTwo.disabled=true;
    pokemonThree.disabled = true;
    p1 = true;
    battleArray=[]
    battleArray.push(getPlayerOne[0])
    console.log(battleArray)

  })
  
}

if(pokemonTwo){
  pokemonTwo.addEventListener('click',()=>{
    console.log(getPlayerOne[1].moves);
    atkOne.innerHTML = getPlayerOne[1].moves[0]
    atkTwo.innerHTML = getPlayerOne[1].moves[1]
    atkThree.innerHTML = getPlayerOne[1].moves[2]
    pokemonOnField.src = getPlayerOne[1].back
    pokemonOne.disabled = true;
    pokemonThree.disabled = true;
    p2 = true;
    battleArray=[]
    battleArray.push(getPlayerOne[1])
  })
}

if(pokemonThree){
  pokemonThree.addEventListener('click',()=>{
    console.log(getPlayerOne[2].moves);
    atkOne.innerHTML = getPlayerOne[2].moves[0]
    atkTwo.innerHTML = getPlayerOne[2].moves[1]
    atkThree.innerHTML = getPlayerOne[2].moves[2]
    pokemonOnField.src = getPlayerOne[2].back
    pokemonOne.disabled = true;
    pokemonTwo.disabled = true;
    p3 = true;
    battleArray=[]
    battleArray.push(getPlayerOne[2]);
  })
}

if(pokemonFour){
  pokemonFour.addEventListener('click',()=>{
    console.log(getPlayerTwo[0].moves);
    atkFour.innerHTML = getPlayerTwo[0].moves[0]
    atkFive.innerHTML = getPlayerTwo[0].moves[1]
    atkSix.innerHTML = getPlayerTwo[0].moves[2]
    pokemonOnField2.src = getPlayerTwo[0].front
    pokemonFive.disabled=true;
    pokemonSix.disabled = true;
    p4 = true;
    battleArray.push(getPlayerTwo[0])
    console.log(battleArray)

  })
}

if(pokemonFive){
  pokemonFive.addEventListener('click',()=>{
    console.log(getPlayerTwo[1].moves);
    atkFour.innerHTML = getPlayerTwo[1].moves[0]
    atkFive.innerHTML = getPlayerTwo[1].moves[1]
    atkSix.innerHTML = getPlayerTwo[1].moves[2]
    pokemonOnField2.src = getPlayerTwo[1].front
    pokemonFour.disabled = true;
    pokemonSix.disabled = true;
    p5= true;
    battleArray.push(getPlayerTwo[1]);
  })
}

if(pokemonSix){
  pokemonSix.addEventListener('click',()=>{
    console.log(getPlayerTwo[2].moves);
    atkFour.innerHTML = getPlayerTwo[2].moves[0]
    atkFive.innerHTML = getPlayerTwo[2].moves[1]
    atkSix.innerHTML = getPlayerTwo[2].moves[2]
    pokemonOnField2.src = getPlayerTwo[2].front
    pokemonFour.disabled = true;
    pokemonFive.disabled = true;
    p6 = true;
    battleArray.push(getPlayerTwo[2]);
  })
}
// click events for attacks 
if(atkOne){
  atkOne.addEventListener('click',()=>{
    atk1=true;
    atkTwo.disabled = false;
    atkThree.disabled = false;
    atkOne.disabled = true;
    atkOne.style.background = 'red'
    atkTwo.style.background = ''
    atkThree.style.background = ''
    if(battleArray[0].name === 'bulbasaur'){
      changeAttack(leafAttack);
      setTimeout(changeAttack,4000,emptyString);
    }else if(battleArray[0].name === 'charmander'){
      changeAttack(fireAttack);
      setTimeout(changeAttack,4000,emptyString);
    }else if(battleArray[0].name === 'squirtle'){
      changeAttack(waterAttack);
      setTimeout(changeAttack,4000,emptyString);
    }else if(battleArray[0].name === 'pidgey'){
      changeAttack(windAttack);
      setTimeout(changeAttack,4000,emptyString);
    }else if(battleArray[0].name === 'geodude'){
      changeAttack(rockAttack);
      setTimeout(changeAttack,4000,emptyString);

    }else if(battleArray[0].name === 'pikachu'){
      changeAttack(lightningAttack);
      setTimeout(changeAttack,4000,emptyString);
    }
    

  })

}

if(atkTwo){
  atkTwo.addEventListener('click',()=>{
    atk2 = true;
    atkTwo.disabled = true
    atkThree.disabled = false;
    atkOne.disabled = false;
    atkOne.style.background = ''
    atkTwo.style.background = 'red'
    atkThree.style.background = ''
    if(battleArray[0].name === 'bulbasaur'){
      changeAttack(leafAttack);
      setTimeout(changeAttack,4000,emptyString);
    }else if(battleArray[0].name === 'charmander'){
      changeAttack(fireAttack);
      setTimeout(changeAttack,4000,emptyString);
    }else if(battleArray[0].name === 'squirtle'){
      changeAttack(waterAttack);
      setTimeout(changeAttack,4000,emptyString);
    }else if(battleArray[0].name === 'pidgey'){
      changeAttack(windAttack);
      setTimeout(changeAttack,4000,emptyString);
    }else if(battleArray[0].name === 'geodude'){
      changeAttack(rockAttack);
      setTimeout(changeAttack,4000,emptyString);

    }else if(battleArray[0].name === 'pikachu'){
      changeAttack(lightningAttack);
      setTimeout(changeAttack,4000,emptyString);
    }

  })

}

if(atkThree){
  atkThree.addEventListener('click',()=>{
    atk3 = true;
    atkThree.disabled = true;
    atkOne.disabled = false;
    atkTwo.disabled = false;
    atkOne.style.background = ''
    atkTwo.style.background = ''
    atkThree.style.background = 'red'
    if(battleArray[0].name === 'bulbasaur'){
      changeAttack(leafAttack);
      setTimeout(changeAttack,4000,emptyString);
    }else if(battleArray[0].name === 'charmander'){
      changeAttack(fireAttack);
      setTimeout(changeAttack,4000,emptyString);
    }else if(battleArray[0].name === 'squirtle'){
      changeAttack(waterAttack);
      setTimeout(changeAttack,4000,emptyString);
    }else if(battleArray[0].name === 'pidgey'){
      changeAttack(windAttack);
      setTimeout(changeAttack,4000,emptyString);
    }else if(battleArray[0].name === 'geodude'){
      changeAttack(rockAttack);
      setTimeout(changeAttack,4000,emptyString);

    }else if(battleArray[0].name === 'pikachu'){
      changeAttack(lightningAttack);
      setTimeout(changeAttack,4000,emptyString);
    }
  })

}

if(atkFour){  `                                                                       `
  atkFour.addEventListener('click',()=>{
    if(battleArray[1].name === 'bulbasaur'){
      changeAttack(leafAttack);
      setTimeout(changeAttack,4000,emptyString);
    }else if(battleArray[1].name === 'charmander'){
      changeAttack(fireAttack);
      setTimeout(changeAttack,4000,emptyString);
    }else if(battleArray[1].name === 'squirtle'){
      changeAttack(waterAttack);
      setTimeout(changeAttack,4000,emptyString);
    }else if(battleArray[1].name === 'pidgey'){
      changeAttack(windAttack);
      setTimeout(changeAttack,4000,emptyString);
    }else if(battleArray[1].name === 'geodude'){
      changeAttack(rockAttack);
      setTimeout(changeAttack,4000,emptyString);

    }else if(battleArray[1].name === 'pikachu'){
      changeAttack(lightningAttack);
      setTimeout(changeAttack,4000,emptyString);
    }
    atkFour.disabled = true;
    atkFive.disabled = false;
    atkSix.disabled = false;
    atkFour.style.background = 'red'
    atkFive.style.background = ''
    atkSix.style.background = ''
    atk4 = true;
    if(p1 === true || p2 === true || p3 === true){
      console.log(battleArray)
      if(battleArray[0].attack - battleArray[1].defense > 0){
          // pokemonOnField2.src = 'https://media.tenor.com/images/8ac941c36812a99995c29fd8527222bb/tenor.gif'
          setTimeout(iKilledKenny,3000);
          console.log('pokemon 2 dead')
          if(p4 === true){
            pokemonFive.disabled = false;
            pokemonSix.disabled = false;
            pokemonFour.style.display = 'none';
            // alert('you got beat down player 2 try again')
            announcement.innerHTML = 'player 2 you got spanked, get em next round!'
            p4 = false;
            player2 = player2 - 1;
            if(player2 === 0){
              alert('Player 1 Winner Winner Chicken dinner. Go back to Home page to play again!')
              //window.location = 'index.html '
              announcement.innerHTML = 'Bye Guys!!'
              setTimeout(restartGame,7000)

            }
          }if(p5 === true){
            pokemonFour.disabled = false;
            pokemonSix.disabled = false;
            pokemonFive.style.display = 'none';
            // alert('you got beat down player 2 try again')
            announcement.innerHTML = 'player 2 you got spanked, get em next round!'
            player2 = player2 - 1;
            p5 = false;
            if(player2 === 0){
              alert('Player 1 Winner Winner Chicken dinner. Go back to Home page to play again!')
             // window.location = 'index.html '
             announcement.innerHTML = 'Bye Guys!!'
              setTimeout(restartGame,7000)
            }

          }if(p6 === true){
            pokemonFour.disabled = false;
            pokemonFive.disabled = false;
            pokemonSix.style.display = 'none';
            // alert('you got beat down player 2 try again')
            announcement.innerHTML = 'player 2 you got spanked, get em next round!'
            player2 = player2 - 1;
            p6 = false;
            if(player2 === 0){
              alert('Player 1 Winner Winner Chicken dinner. Go back to Home page to play again!')
              // window.location = 'index.html '
              announcement.innerHTML = 'Bye Guys!!'
              setTimeout(restartGame,7000)
            }

          }
      }else if(battleArray[0].attack - battleArray[1].defense < 0){
        // pokemonOnField.src = 'https://media0.giphy.com/media/l0HlQrYmGIbYH1wYg/giphy.gif?cid=790b761144bd095685c155270e0307cffe0e6e4f28fcdbcf&rid=giphy.gif&ct=g';
        setTimeout(simpsonKiller,3000);
        console.log('pokemon one dead');
        atkOne.style.background = ''
        atkTwo.style.background = ''
        atkThree.style.background = ''
        atkTwo.disabled = false;
         atkThree.disabled = false;
        atkOne.disabled = false;
        if(p1 === true){
          pokemonTwo.disabled = false;
          pokemonThree.disabled = false;
          pokemonOne.style.display = 'none';
          // alert('you got beat down player 1 try again')
          announcement.innerHTML = 'player 1 you got spanked, get em next round!'
          player1 = player1 - 1;
          p1 = false;
          if(player1 === 0){
            alert('Player 2 Winner Winner Chicken dinner. Go back to Home page to play again!')
            // window.location = 'index.html '
            announcement.innerHTML = 'Bye Guys!!'
            setTimeout(restartGame,7000)
          }
        }if(p2 === true){
          pokemonOne.disabled = false;
          pokemonThree.disabled = false;
          pokemonTwo.style.display = 'none';
          // alert('you got beat down player 1 try again')
          announcement.innerHTML = 'player 1 you got spanked, get em next round!'
          player1 = player1 - 1;
          p2 = false;
          if(player1 === 0){
            alert('Player 2 Winner Winner Chicken dinner. Go back to Home page to play again!')
            // window.location = 'index.html '
            announcement.innerHTML = 'Bye Guys!!'
            setTimeout(restartGame,7000)
          }

        }if(p3 === true){
          pokemonOne.disabled = false;
          pokemonTwo.disabled = false;
          pokemonThree.style.display = 'none';
          // alert('you got beat down player 1 try again')
          announcement.innerHTML = 'player 1 you got spanked, get em next round!'
          player1 = player1 - 1;
          p3 = false;
          if(player1 === 0){
            alert('Player 2 Winner Winner Chicken dinner. Go back to Home page to play again!')
            // window.location = 'index.html '
            announcement.innerHTML = 'Bye Guys!!'
            setTimeout(restartGame,7000)
          }

        }
      }
    }

  })

}


if(atkFive){
  
  atkFive.addEventListener('click',()=>{
    if(battleArray[1].name === 'bulbasaur'){
      changeAttack(leafAttack);
      setTimeout(changeAttack,4000,emptyString);
    }else if(battleArray[1].name === 'charmander'){
      changeAttack(fireAttack);
      setTimeout(changeAttack,4000,emptyString);
    }else if(battleArray[1].name === 'squirtle'){
      changeAttack(waterAttack);
      setTimeout(changeAttack,4000,emptyString);
    }else if(battleArray[1].name === 'pidgey'){
      changeAttack(windAttack);
      setTimeout(changeAttack,4000,emptyString);
    }else if(battleArray[1].name === 'geodude'){
      changeAttack(rockAttack);
      setTimeout(changeAttack,4000,emptyString);

    }else if(battleArray[1].name === 'pikachu'){
      changeAttack(lightningAttack);
      setTimeout(changeAttack,4000,emptyString);
    }
    atkFive.disabled = true;
    atkFour.disabled = false;
    atkSix.disabled = false;
    atkFour.style.background = ''
    atkFive.style.background = 'red'
    atkSix.style.background = ''
    atk5 = true;
    if(p1 === true || p2 === true || p3 === true){
      console.log(battleArray)
      if(battleArray[0].attack - battleArray[1].defense >0){
          // pokemonOnField2.src = 'https://media.tenor.com/images/8ac941c36812a99995c29fd8527222bb/tenor.gif'
          setTimeout(iKilledKenny,3000);
          console.log('pokemon 2 dead')
          if(p4 === true){
            pokemonFive.disabled = false;
            pokemonSix.disabled = false;
            pokemonFour.style.display = 'none';
            // alert('you got beat down player 2 try again')
            announcement.innerHTML = 'player 2 you got spanked, get em next round!'
            player2 = player2 - 1;
            p4 = false;
            p1 = false;
            p2 = false;
            p3 = false;
            if(player2 === 0){
              alert('Player 1 Winner Winner Chicken dinner. Go back to Home page to play again!')
              // window.location = 'index.html '
              announcement.innerHTML = 'Bye Guys!!'
              setTimeout(restartGame,7000)
            }
           
          }if(p5 === true){
            pokemonFour.disabled = false;
            pokemonSix.disabled = false;
            pokemonFive.style.display = 'none';
            // alert('you got beat down player 2 try again')
            announcement.innerHTML = 'player 2 you got spanked, get em next round!'
            player2 = player2 - 1;
            p5 = false;
            p1 = false;
            p2 = false;
            p3 = false;
            if(player2 === 0){
              alert('Player 1 Winner Winner Chicken dinner. Go back to Home page to play again!')
              // window.location = 'index.html '
              announcement.innerHTML = 'Bye Guys!!'
              setTimeout(restartGame,7000)
            }

          }if(p6 === true){
            pokemonFour.disabled = false;
            pokemonFive.disabled = false;
            pokemonSix.style.display = 'none';
            // alert('you got beat down player 2 try again')
            announcement.innerHTML = 'player 2 you got spanked, get em next round!'
            player2 = player2 - 1;
            p6 = false;
            p1 = false;
            p2 = false;
            p3 = false;
            if(player2 === 0){
              alert('Player 1 Winner Winner Chicken dinner. Go back to Home page to play again!')
              // window.location = 'index.html '
              announcement.innerHTML = 'Bye Guys!!'
              setTimeout(restartGame,7000)
            }

          }
      }else if(battleArray[0].attack - battleArray[1].defense < 0){
        // pokemonOnField.src = 'https://media0.giphy.com/media/l0HlQrYmGIbYH1wYg/giphy.gif?cid=790b761144bd095685c155270e0307cffe0e6e4f28fcdbcf&rid=giphy.gif&ct=g';
        setTimeout(simpsonKiller,3000);
        console.log('pokemon one dead');
        atkOne.style.background = ''
        atkTwo.style.background = ''
        atkThree.style.background = ''
        atkTwo.disabled = false;
         atkThree.disabled = false;
        atkOne.disabled = false;
        if(p1 === true){
          pokemonTwo.disabled = false;
          pokemonThree.disabled = false;
          pokemonOne.style.display = 'none';
          // alert('you got beat down player 1 try again')
          announcement.innerHTML = 'player 1 you got spanked, get em next round!'
          player1 = player1 - 1;
          p1 = false;
          p4 =false;
          p5 =false;
          p6 =false;
          if(player1 === 0){
            alert('Player 2 Winner Winner Chicken dinner. Go back to Home page to play again!')
            // window.location = 'index.html '
            announcement.innerHTML = 'Bye Guys!!'
            setTimeout(restartGame,7000)
          }
        }if(p2 === true){
          pokemonOne.disabled = false;
          pokemonThree.disabled = false;
          pokemonTwo.style.display = 'none';
          // alert('you got beat down player 1 try again')
          announcement.innerHTML = 'player 1 you got spanked, get em next round!'
          player1 = player1 - 1;
          p2 = false;
          p4 = false;
          p5 = false;
          p6 = false;
          if(player1 === 0){
            alert('Player 2 Winner Winner Chicken dinner. Go back to Home page to play again!')
            announcement.innerHTML = 'Bye Guys!!'
            setTimeout(restartGame,7000)
          }

        }if(p3 === true){
          pokemonOne.disabled = false;
          pokemonTwo.disabled = false;
          pokemonThree.style.display = 'none';
          // alert('you got beat down player 1 try again')
          announcement.innerHTML = 'player 1 you got spanked, get em next round!'
          player1 = player1 - 1;
          p3 = false;
          p4 = false;
          p5 = false;
          p6 = false;
          if(player1 === 0){
            alert('Player 2 Winner Winner Chicken dinner. Go back to Home page to play again!')
            // window.location = 'index.html '
            announcement.innerHTML = 'Bye Guys!!'
            setTimeout(restartGame,7000)
          }

        }
      }
    }


  })

}



if(atkSix){
  atkSix.addEventListener('click',()=>{
    if(battleArray[1].name === 'bulbasaur'){
      changeAttack(leafAttack);
      setTimeout(changeAttack,4000,emptyString);
    }else if(battleArray[1].name === 'charmander'){
      changeAttack(fireAttack);
      setTimeout(changeAttack,4000,emptyString);
    }else if(battleArray[1].name === 'squirtle'){
      changeAttack(waterAttack);
      setTimeout(changeAttack,4000,emptyString);
    }else if(battleArray[1].name === 'pidgey'){
      changeAttack(windAttack);
      setTimeout(changeAttack,4000,emptyString);
    }else if(battleArray[1].name === 'geodude'){
      changeAttack(rockAttack);
      setTimeout(changeAttack,4000,emptyString);

    }else if(battleArray[1].name === 'pikachu'){
      changeAttack(lightningAttack);
      setTimeout(changeAttack,4000,emptyString);
    }
    atk6.disabled = true;
    atk5.disabled = false;
    atk4.disabled = false;
    atkFour.style.background = ''
    atkFive.style.background = ''
    atkSix.style.background = 'red'
    atk6 = true;
    if(p1 === true || p2 === true || p3 === true){
      console.log(battleArray)
      if(battleArray[0].attack - battleArray[1].defense < 0){
          // pokemonOnField2.src = 'https://media.tenor.com/images/8ac941c36812a99995c29fd8527222bb/tenor.gif'
          setTimeout(iKilledKenny,3000);
          console.log('pokemon 2 dead')
          if(p4 === true){
           
            
            pokemonFive.disabled = false;
            pokemonSix.disabled = false;
            pokemonFour.style.display = 'none';
            // alert('you got beat down player 2 try again')
            announcement.innerHTML = 'player 2 you got spanked, get em next round!'
            player2 = player2 - 1;
            p4 = false;
            p1 = false;
            p2 = false;
            p3 = false;
            if(player2 === 0){
              alert('Player 1 Winner Winner Chicken dinner. Go back to Home page to play again!')
              // window.location = 'index.html '
              announcement.innerHTML = 'Bye Guys!!'
              setTimeout(restartGame,7000)
            }
          }if(p5 === true){
            
            pokemonFour.disabled = false;
            pokemonSix.disabled = false;
            pokemonFive.style.display = 'none';
            alert('you got beat down player 2 try again')
            announcement.innerHTML = 'player 2 you got spanked, get em next round!'
            player2 = player2 - 1;
            p5 = false;
            p1 = false;
            p2 = false;
            p3 = false;
            if(player2 === 0){
              alert('Player 1 Winner Winner Chicken dinner. Go back to Home page to play again!')
              // window.location = 'index.html '
              announcement.innerHTML = 'Bye Guys!!'
              setTimeout(restartGame,7000)
            }

          }if(p6 === true){
           
           
            pokemonFour.disabled = false;
            pokemonFive.disabled = false;
            pokemonSix.style.display = 'none';
            // alert('you got beat down player 2 try again')
            announcement.innerHTML = 'player 2 you got spanked, get em next round!'
            player2 = player2 - 1;
            p6 = false;
            p1 = false;
            p2 = false;
            p3 = false;
            if(player2 === 0){
              alert('Player 1 Winner Winner Chicken dinner. Go back to Home page to play again!')
              // window.location = 'index.html '
              announcement.innerHTML = 'Bye Guys!!'
              setTimeout(restartGame,7000)
            }

          }
      }else if(battleArray[0].attack - battleArray[1].defense > 0){
        // pokemonOnField.src = 'https://media0.giphy.com/media/l0HlQrYmGIbYH1wYg/giphy.gif?cid=790b761144bd095685c155270e0307cffe0e6e4f28fcdbcf&rid=giphy.gif&ct=g';
        setTimeout(simpsonKiller,3000);
        console.log('pokemon one dead');
        atkOne.style.background = ''
        atkTwo.style.background = ''
        atkThree.style.background = ''
        atkTwo.disabled = false;
         atkThree.disabled = false;
        atkOne.disabled = false;
        if(p1 === true){
          pokemonTwo.disabled = false;
          pokemonThree.disabled = false;
          pokemonOne.style.display = 'none';
          // alert('you got beat down player 1 try again')
          announcement.innerHTML = 'player 1 you got spanked, get em next round!'
          player1 = player1 - 1;
          p1 = false;
          p4 = false;
          p5 = false;
          p6 = false;
          if(player1 === 0){
            alert('Player 2 Winner Winner Chicken dinner. Go back to Home page to play again!')
            // window.location = 'index.html '
            announcement.innerHTML = 'Bye Guys!!'
            setTimeout(restartGame,7000)
          }
        }if(p2 === true){
          pokemonOne.disabled = false;
          pokemonThree.disabled = false;
          pokemonTwo.style.display = 'none';
          // alert('you got beat down player 1 try again')
          announcement.innerHTML = 'player 1 you got spanked, get em next round!'
          player1 = player1 - 1;
          p2 = false;
          p4 =false;
          p5 =false;
          p6 =false;

          if(player1 === 0){
            alert('Player 2 Winner Winner Chicken dinner. Go back to Home page to play again!')
            // window.location = 'index.html '
            announcement.innerHTML = 'Bye Guys!!'
            setTimeout(restartGame,7000)
          }

        }if(p3 === true){
          pokemonOne.disabled = false;
          pokemonTwo.disabled = false;
          pokemonThree.style.display = 'none';
          // alert('you got beat down player 1 try again')
          announcement.innerHTML = 'player 1 you got spanked, get em next round!'
          player1 = player - 1;
          p3 = false;
          p4 = false;
          p5 = false;
          p6 = false;
          
          if(player1 === 0){
            alert('Player 2 Winner Winner Chicken dinner. Go back to Home page to play again!')
            // window.location = 'index.html '
            announcement.innerHTML = 'Bye Guys!!'
            setTimeout(restartGame,7000)
          }

        }


      }
    }
  


  })
  
}

 
