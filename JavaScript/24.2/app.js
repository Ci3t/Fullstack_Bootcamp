




function Pokemon(pokemonName, pokemonType,
    pokemonAttackList) {
    this.name = pokemonName;
    this.type = pokemonType;
    this.attackList = pokemonAttackList;
}

Pokemon.prototype.callPokemon = function(){
    console.log(`i Choose you ${this.name}`);
}
Pokemon.prototype.pokemonType = function(){
    console.log(`Type ${this.type}`);
}

Pokemon.prototype.attack  = function(atknum){
    console.log(`${this.name} type ${this.type} Uses ${this.attackList[atknum]}`);
}

const poke1 = new Pokemon("Charmander","Fire",['Fireball','FlameThrower']);
const poke2 = new Pokemon("Balbasur","Grass",['Leaf Razor','Whip']);
const poke3 = new Pokemon("Pickatchu","Electric",['Shock','Thunder']);

poke1.callPokemon()
poke1.attack([0])
poke2.callPokemon()
poke2.attack([1])
poke3.callPokemon()
poke3.attack([1])

