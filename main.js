//build pokemon game
//two players... chose pokemon randomly or by name
//turn based fighting game.
// each player starts with designated health . 
// 3 rounds?
//want animation when they fight 
//mew two is pokemon 150... important information!

// -------------------------------------------------------------

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
     //console.log(data)
     //name of pokemon
     let pokemonName = data.name;
     //to loop through move list
    let pokemonMoves = data.moves[0].move.name;
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
    pokemonOne.move = pokemonMoves

    
}
let choosePokemon2 = async () => {
    let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomNumber()}/`);
    let data = await response.json();
    //pokemon array
     //console.log(data)
     //name of pokemon
     let pokemonName = data.name;
     //to loop through move list
    let pokemonMoves = data.moves[0].move.name;
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
    pokemonTwo.move = pokemonMoves

    
}
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
}



// test functions
choosePokemon();
choosePokemon2();
console.log(pokemonOne)
console.log(pokemonTwo)


//so far i have achieved  getting the Name, the HP , the ATK , the DEF , and the TYPE from any given pokemon.
//upon refresh the pokemon objects are updated with new pokemon

//now to make the game based off recieved paramters


function iChooseYou(){

}


