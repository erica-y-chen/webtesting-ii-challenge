import React from 'react';
import { render, fireEvent } from 'react-testing-library';
import 'react-testing-library/cleanup-after-each';

import Counter from './Counter.js';

describe('Counter.js', () => {
    it('player rolls a ball', () => {
        const players = {balls: 0, strikes: 1}
    const { getByText, getByTestId } = render(<Counter balls={players.balls} strikes = {players.strikes} />);

        // const { getByText } = render(<Counter />);
        const button = getByText(/ball/i);
        fireEvent.click(button);
        // const balls = getAllByTestId('id')
            // getByText(/hello/i); 
            expect(players.balls).toEqual(1)
    })

    // it('renders "success" text', async () => {
    //     const wrapper = rtl.render(<App />);
    //     expect(wrapper.queryByText(/success/i)).not.toBeInTheDocument();
    //     rtl.fireEvent.click(wrapper.getByTestId('messageButton'));
    //     // "find" queries support async/await!
    //     expect(await wrapper.findByText(/success/i));
    //   });
    // describe('ball() method', () => {
    //     it('tests for ball', () => {
    //         const player = {id: 1, name: 'Thor', balls: 0, strikes: 1}
    //         expect(counter.ball(player)).toEqual({...player, balls: 1})
    //     })
    // })

    // describe('strike() method', () => {
    //     it('tests for strikes', () => {
    //         const player = {id: 1, name: 'Thor', balls: 0, strikes: 3}
    //         expect(counter.strike(player)).toEqual({...player, strikes: 0})
    //     })
    // })

    // describe('foul() method', () => {
    //     it('tests for fouls', () => {
    //         const player = {id: 1, name: 'Thor', balls: 0, strikes: 1}
    //         expect(counter.foul(player)).toEqual({...player, balls: 0, strikes:2})
    //     })
    // })

    // describe('hit() method', () => {
    //     it('tests for hits', () => {
    //         const player = {id: 1, name: 'Thor', balls: 3, strikes: 1}
    //         expect(counter.hit(player)).toEqual({...player, balls: 0, strikes:0})
    //     })
    // })
})



// function hit(player) {
//     return{...players, balls: 0, strikes: 0}
// }