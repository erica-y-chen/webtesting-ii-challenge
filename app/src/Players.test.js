import React from 'react';
import { render } from 'react-testing-library';
import 'react-testing-library/cleanup-after-each';

import Players from './Players';

describe('<Players />', () => {
    it('should render "no players available" if not players provided', () => {
        const { getByText } = render(<Players />)

        getByText(/no players available/i);
    })

    it('should render the provided list of players', () => {
        const players= [
            {id: 1, name: 'Thor', balls: 0, strikes: 1},
            {id: 2, name: 'Spiderman', balls: 0, strikes: 1},
            {id: 3, name: 'Ironman', balls: 0, strikes: 1},
            {id: 4, name: 'Black Widow', balls: 0, strikes: 1}
          ]
    
        // this is a good place to use the data-testid property
        const { getAllByTestId } = render(<Players players={players} />);
    
        const playerNames = getAllByTestId('player-name').map(n => n.textContent);
        const names = players.map(p => p.name);
        expect(playerNames).toHaveLength(players.length);
        expect(playerNames).toEqual(names);
      });
})