
// fetch a random pokemon's data for the enemy
async function fetchEnemyPokemonData() {
    const createRandomNumber = () => {
        let randomNum = Math.floor(Math.random() * 300)
        return randomNum
    }

    let randomNumber = createRandomNumber();

    console.log(randomNumber)

    const response = await fetch("https://pokeapi.co/api/v2/pokemon/" + randomNumber)
    const json = await response.json()

    console.log(json)

    const pokemonSprite = json.sprites.front_default
    const pokemonName = json.name
    const pokemonHp = json.stats[0].base_stat
    const pokemonType = json.types.map(type => { return type.type.name }).join(' - ')
    const pokemonAttack = json.stats[1].base_stat
    const pokemonDefense = json.stats[2].base_stat
    const pokemonSpecialAttack = json.stats[3].base_stat
    const pokemonSpecialDefense = json.stats[4].base_stat
    const pokemonSpeed = json.stats[5].base_stat

    document.getElementById('enemySprite').innerHTML = `
    <img src=${pokemonSprite}>
    `

    document.getElementById('enemyName').innerHTML = `${pokemonName}`
    document.getElementById('enemyType').innerHTML = `${pokemonType}`
    document.getElementById('enemyHp').innerHTML = `<span id='bold'>HP: </span>${pokemonHp}`
    document.getElementById('enemyAttack').innerHTML = `<span id='bold'>Attack: </span>${pokemonAttack}`
    document.getElementById('enemyDefense').innerHTML = `<span id='bold'>Defense: </span>${pokemonDefense}`
    document.getElementById('enemySpecialAttack').innerHTML = `<span id='bold'>Special Attack: </span>${pokemonSpecialAttack}`
    document.getElementById('enemySpecialDefense').innerHTML = `<span id='bold'>Special Defense: </span>${pokemonSpecialDefense}`
    document.getElementById('enemySpeed').innerHTML = `<span id='bold'>Speed: </span>${pokemonSpeed}`

    document.getElementById('enemyPokemon').style.visibility = "visible";

}