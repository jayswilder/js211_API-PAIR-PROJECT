async function fetchWaterPokemonData() {
    const createRandomNumber = () => {
        let randomNum = Math.floor(Math.random() * 140)
        return randomNum
    }

    let randomNumber = createRandomNumber();

    console.log(randomNumber)

    const response = await fetch("https://pokeapi.co/api/v2/type/11")
    const json = await response.json()
    console.log(json)
    const pokemonData = json.pokemon[randomNumber].pokemon.url

    async function getPokemonData() {
        const response = await fetch(pokemonData)
        const json = await response.json()
        // console.log(json)
        const pokemonSprite = json.sprites.front_default
        const pokemonName = json.name
        console.log(pokemonName)
        const pokemonHp = json.stats[0].base_stat
        const pokemonType = json.types.map(type => { return type.type.name }).join(' - ')
        const pokemonAttack = json.stats[1].base_stat
        const pokemonDefense = json.stats[2].base_stat
        const pokemonSpecialAttack = json.stats[3].base_stat
        const pokemonSpecialDefense = json.stats[4].base_stat
        const pokemonSpeed = json.stats[5].base_stat

        document.getElementById('userSprite').innerHTML = `
        <img src=${pokemonSprite}>
        `
        document.getElementById('userName').innerHTML = `${pokemonName}`
        document.getElementById('userType').innerHTML = `${pokemonType}`
        document.getElementById('userHp').innerHTML = `<span id='bold'>HP: </span>${pokemonHp}`
        document.getElementById('userAttack').innerHTML = `<span id='bold'>Attack: </span>${pokemonAttack}`
        document.getElementById('userDefense').innerHTML = `<span id='bold'>Defense: </span>${pokemonDefense}`
        document.getElementById('userSpecialAttack').innerHTML = `<span id='bold'>Special Attack: </span>${pokemonSpecialAttack}`
        document.getElementById('userSpecialDefense').innerHTML = `<span id='bold'>Special Defense: </span>${pokemonSpecialDefense}`
        document.getElementById('userSpeed').innerHTML = `<span id='bold'>Speed: </span>${pokemonSpeed}`

        document.getElementById('userPokemon').style.visibility = "visible";

    }
    getPokemonData()
}