
'use strict';
const assert = require('assert');

let pokemon = [];



// ======================================================================
// Test to make sure can call fetch with correct URL & gets correct data.
// ======================== Mistyped Address ============================
// ======================================================================

function getPokemon(fetch, id) {
    return fetch("https://pokeapi.co/api/v2/pokemon/" + id)
        .then(reponse => reponse.json())
        .then(data => pokemon = data.results)
}

describe('getPokemon', () => {
    it('Calls fetch with correct url and checks for mistakes in spelling', () => {
        const fakeFetch = url => {
            assert(
                url !=
                `https://pokeapi.co/api/v2/pokemoon/6`
            )
            return new Promise(function (resolve) {
            })
        }
        getPokemon(fakeFetch, 6)
    })
})

// ======================================================================
// Test to make sure can call fetch with correct URL & gets correct data.
// ======================== Mistyped Address ============================
// ======================================================================

function getPokemon2(fetch, id) {
    return fetch("https://pokeapi.co/api/v2/pokemon/" + id)
        .then(reponse => reponse.json())
        .then(data => pokemon = data.results)
}

describe('getPokemon2', () => {
    it('calls fetch with correct url', () => {
        const fakeFetch2 = url => {
            assert(
                url ===
                `https://pokeapi.co/api/v2/pokemon/6`
            )
            return new Promise(function (resolve) {
            })
        }
        getPokemon2(fakeFetch2, 6)
    })

    it('Verifies that the requested pokemon id is valid (within range)', (done) => {
        const fakeFetch2 = url => {
            return Promise.resolve({
                json: () => Promise.resolve({
                    results: [
                        {
                            name: 'Charizard',
                            hp: 78,
                            attack: 84,
                            defense: 78,
                            specialAttack: 109,
                            specialDefense: 85,
                            speed: 100
                        }
                    ]
                })
            })
        }
        getPokemon2(fakeFetch2, 6)
            .then(results => {
                assert(results[1] == undefined)
                done();
            })
    })
})

// ======================================================================
// Test to make sure can call fetch with correct URL & gets correct data.
// ========================= Wrong API key ==============================
// ======================================================================

function getPokemon(fetch, apiKey, id) {
    return fetch("https://pokeapi.co/api/v2/pokemon/" + apiKey + id)
        .then(reponse => reponse.json())
        .then(data => pokemon = data.results)
}

describe('getPokemon', () => {
    it('Calls fetch with correct API key and checks for mistakes', () => {
        const fakeFetch = url => {
            assert(
                url !=
                `https://pokeapi.co/api/v2/pokemon/159688/6`
            )
            return new Promise(function (resolve) {
            })
        }
        getPokemon(fakeFetch, 15698, 6)
    })
})

// ======================================================================
// Test to make sure can call fetch with correct URL & gets correct data.
// ========================= Hypothetical 4 =============================
// ======================================================================

function getPokemon4(fetch, id) {
    return fetch("https://pokeapi.co/api/v2/pokemon/" + id)
        .then(reponse => reponse.json())
        .then(data => pokemon = data.results)
}

describe('getPokemon4', () => {
    it('calls fetch with correct url', () => {
        const fakeFetch4 = url => {
            assert(
                url ===
                `https://pokeapi.co/api/v2/pokemon/6`
            )
            return new Promise(function (resolve) {
            })
        }
        getPokemon4(fakeFetch4, 6)
    })

    it('Verifies the name of the requested pokemon', (done) => {
        const fakeFetch4 = url => {
            return Promise.resolve({
                json: () => Promise.resolve({
                    results: [
                        {
                            name: 'Charizard',
                            hp: 78,
                            attack: 84,
                            defense: 78,
                            specialAttack: 109,
                            specialDefense: 85,
                            speed: 100
                        }
                    ]
                })
            })
        }
        getPokemon4(fakeFetch4, 6)
            .then(results => {
                assert(results[0].name === 'Charizard')
                done();
            })
    })
})

// ======================================================================
// Test to make sure can call fetch with correct URL & gets correct data.
// ========================= Hypothetical 5 =============================
// ======== Add pokemons HP, Defense, & Special Defense together ========
// =========== Compare the two together to determine a winner ===========

function getPokemon5(fetch, id) {
    return fetch("https://pokeapi.co/api/v2/pokemon/" + id)
        .then(reponse => reponse.json())
        .then(data => pokemon = data.results)
}

describe('getPokemon5', () => {
    it('calls fetch with correct url', () => {
        const fakeFetch5 = url => {
            assert(
                url ===
                `https://pokeapi.co/api/v2/pokemon/6`
            )
            return new Promise(function (resolve) {
            })
        }
        getPokemon5(fakeFetch5, 6)
    })

    it('compares the 2 pokemon hp, def, specialDefense & determines which is greater', (done) => {
        const fakeFetch5 = url => {
            return Promise.resolve({
                json: () => Promise.resolve({
                    results: [
                        {
                            name: 'Charizard',
                            hp: 78,
                            attack: 84,
                            defense: 78,
                            specialAttack: 109,
                            specialDefense: 85,
                            speed: 100
                        },
                        {
                            name: 'Blastoise',
                            hp: 79,
                            attack: 83,
                            defense: 100,
                            specialAttack: 85,
                            specialDefense: 105,
                            speed: 78
                        }
                    ]
                })
            })
        }
        getPokemon5(fakeFetch5, 6)
            .then(results => {
                assert(results[0].hp + results[0].defense + results[0].specialDefense === 241)
                assert(results[1].hp + results[1].defense + results[1].specialDefense === 284)
                // determines that 'Blastoise's total defense stats are greater than Charizard's
                assert(results[1].hp + results[1].defense + results[1].specialDefense > results[0].hp + results[0].defense + results[0].specialDefense)
                done();
            })
    })
})
