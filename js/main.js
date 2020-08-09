const startBattle = () => {
    let userPokemon = document.getElementById('userName').innerHTML
    let enemyPokemon = document.getElementById('enemyName').innerHTML

    async function fetchBattlePokemonData() {
        const userResponse = await fetch("https://pokeapi.co/api/v2/pokemon/" + userPokemon)
        const userJson = await userResponse.json()

        const userHP = userJson.stats[0].base_stat
        const userAttack = userJson.stats[1].base_stat
        const userDefense = userJson.stats[2].base_stat
        const userSpecialAttack = userJson.stats[3].base_stat
        const userSpecialDefense = userJson.stats[4].base_stat
        const userSpeed = userJson.stats[5].base_stat

        let userAttackSum = userAttack + userSpecialAttack + userSpeed
        let userDefenseSum = userHP + userDefense + userSpecialDefense

        console.log("user attack total: " + userAttackSum)
        console.log("user defense total: " + userDefenseSum)

        // enemy calculations

        const enemyResponse = await fetch("https://pokeapi.co/api/v2/pokemon/" + enemyPokemon)
        const enemyJson = await enemyResponse.json()

        const enemyHP = enemyJson.stats[0].base_stat
        const enemyAttack = enemyJson.stats[1].base_stat
        const enemyDefense = enemyJson.stats[2].base_stat
        const enemySpecialAttack = enemyJson.stats[3].base_stat
        const enemySpecialDefense = enemyJson.stats[4].base_stat
        const enemySpeed = enemyJson.stats[5].base_stat

        let enemyAttackSum = enemyAttack + enemySpecialAttack + enemySpeed
        let enemyDefenseSum = enemyHP + enemyDefense + enemySpecialDefense

        console.log("enemy attack total: " + enemyAttackSum)
        console.log("enemy defense total: " + enemyDefenseSum)


        if (userAttackSum >= enemyDefenseSum && userSpeed >= enemySpeed) {
            alert(`${userPokemon} is the likely winner based off of it's attack power! ${enemyPokemon}'s defense doesn't stand a chance!`)
        }
        if (enemyDefenseSum > userAttackSum && enemySpeed > userSpeed) {
            alert(`${enemyPokemon} is too tough! You narrowly escaped this one!`)
        }
        if (enemyDefenseSum > userAttackSum && enemySpeed < userSpeed || userAttackSum >= enemyDefenseSum && userSpeed <= enemySpeed) {
            alert(`${userPokemon} and ${enemyPokemon} are so powerful! This battle is too close to call! It's up their Pokemon Trainers now...`)
        }
    }

    fetchBattlePokemonData();
    window.setTimeout(fetchEnemyPokemonData, 2000);

}