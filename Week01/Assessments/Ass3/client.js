const axios = require(`axios`);

// Challenge A
const getRes = async () => {
    const res = await axios.get(`http://localhost:4000/`);
    console.log(res.data);
};
getRes();

// Challenge B
const getChars = async () => {
    const chars = await axios.get(`http://localhost:4000/characters/`);
    console.log(chars.data);
};
getChars();

// Challenge C
const getBlood = async (type) => {
    const blood = await axios.get(`http://localhost:4000/char/${type}`);
    console.log(blood.data);
};
getBlood("Pure-blood");

// Challenge D
const getQuote = async () => {
    const quote = await axios.get(`https://api.quotable.io/random`);
    console.log(quote.data.content);
};
getQuote();

// Challenge E
const getPokemon = async (name) => {
    const pokemon = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
    console.log(pokemon.data);
    // relevant data can be chosen by changing "pokemon.data" into "pokemon.data.moves" or "pokemon.data.stats" (or whatever you like)
}
getPokemon("pikachu");
