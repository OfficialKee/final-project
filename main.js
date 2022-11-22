// WHAT DO WE WANT TO ACCOMPLISH????//

//build pokemon game
//two players... chose pokemon randomly or by name
//turn based fighting game.
// each player starts with designated health . 
// 3 rounds?
//want animation when they fight 
//mew two is pokemon 150... important information!

// -------------------------------------------------------------

        //QuerySelectors//

//-------------------------------------------------------------
 let imgOne = document.querySelector('#pokemonOne');
 let imgTwo = document.querySelector('#pokemonTwo');


//-------------------------------------------------------------

        // GLOBAL OBJECTS, ARRAYS, VARIABLE//

// ------------------------------------------------------------
let pokemonOne = {};
let pokemonTwo = {};


// -----------------------------------------------------------

// ---------------------------------------------------------------
        //FUNCTIONS FOR PROJECT//

// ----------------------------------------------------------------

//created function to generate random numbers for fairness in pokemon selection  pokedex of 900 pokemon.
let choosePokemon = async () => {
    let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomNumber()}/`);
    let data = await response.json();
    //pokemon array
     console.log(data)
     //name of pokemon
     let pokemonName = data.name;
     //to loop through move list
    let pokemonMoves = data.moves[0].move.name;
    let pokemonMoves2 = data.moves[1].move.name;
    let pokemonMoves3 = data.moves[2].move.name;
    //this is HP
    
     let pokemonHP = data.stats[0].base_stat;

    //this is attack
     let pokemonAtk = data.stats[1].base_stat;
    //this is defense
   let pokemonDef = data.stats[2].base_stat;
    
    //this is the type
    let pokemonType =data.types[0].type.name;

    pokemonOne.name = pokemonName
    pokemonOne.atk = pokemonAtk
    pokemonOne.def = pokemonDef
    pokemonOne.type = pokemonType
    //created empty array, added 3 attacks to 'moves key array'
    pokemonOne.move = []
    pokemonOne.move.push(pokemonMoves)
    pokemonOne.move.push(pokemonMoves2)
    pokemonOne.move.push(pokemonMoves3)

    //test 
    console.log(data.sprites.front_shiny)
    imgOne.src = data.sprites.front_shiny


    
};
let choosePokemon2 = async () => {
    let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomNumber()}/`);
    let data = await response.json();
    //pokemon array
     //console.log(data)
     //name of pokemon
     let pokemonName = data.name;
     //to loop through move list

    let pokemonMoves = data.moves[0].move.name;
    let pokemonMoves2 = data.moves[1].move.name;
    let pokemonMoves3 = data.moves[2].move.name;
    //this is HP
    
     let pokemonHP = data.stats[0].base_stat;

    //this is attack
     let pokemonAtk = data.stats[1].base_stat;
    //this is defense
   let pokemonDef = data.stats[2].base_stat;
    
    //this is the type
    let pokemonType =data.types[0].type.name;

    pokemonTwo.name = pokemonName
    pokemonTwo.atk = pokemonAtk
    pokemonTwo.def = pokemonDef
    pokemonTwo.type = pokemonType
    //created empty array, added 3 attacks to 'moves key array'
    pokemonTwo.move = []
    pokemonTwo.move.push(pokemonMoves)
    pokemonTwo.move.push(pokemonMoves2)
    pokemonTwo.move.push(pokemonMoves3)


    imgTwo.src = data.sprites.front_shiny

    
};
function randomNumber(){
    let number = Math.floor(Math.random()*900);
while(number<1){
    number = Math.floor(Math.random()*1000);
    
}
while(number>900){
    number = Math.floor(Math.random()*1000);
    
}
    console.log(number);
    return number;
};

//-------------------------------------------------------------------------

// test functions
choosePokemon();
choosePokemon2();
console.log(pokemonOne)
console.log(pokemonTwo)


//so far i have achieved  getting the Name, the HP , the ATK , the DEF , and the TYPE from any given pokemon.
//upon refresh the pokemon objects are updated with new pokemon

//now to make the game based off recieved paramters





