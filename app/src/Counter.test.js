const counter = require ('./Counter.js');

describe('Counter.js', () => {
    describe('ball() method', () => {
        it('tests for ball', () => {
            const player = {id: 1, name: 'Thor', balls: 0, strikes: 1}
            expect(counter.ball(player)).toEqual({...player, balls: 1})
        })
    })

    describe('strike() method', () => {
        it('tests for strikes', () => {
            const player = {id: 1, name: 'Thor', balls: 0, strikes: 3}
            expect(counter.strike(player)).toEqual({...player, strikes: 0})
        })
    })

    describe('foul() method', () => {
        it('tests for fouls', () => {
            const player = {id: 1, name: 'Thor', balls: 0, strikes: 1}
            expect(counter.foul(player)).toEqual({...player, balls: 0, strikes:2})
        })
    })

    describe('hit() method', () => {
        it('tests for hits', () => {
            const player = {id: 1, name: 'Thor', balls: 3, strikes: 1}
            expect(counter.hit(player)).toEqual({...player, balls: 0, strikes:0})
        })
    })
})



// function hit(player) {
//     return{...players, balls: 0, strikes: 0}
// }