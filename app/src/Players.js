import React from 'react';
// import 'react-testing-library/cleanup-after-each';

function Players(props) {
    const { players = [] } = props;

    if(!players || !players.length > 0 ) {
        return <h3>No Players Available</h3>
    }

    return(
        <div>
            <h3>Player List</h3>
            {players.map(p => (
                 <div data-testid="player-name" key={p.id}>
                    {p.name}
                </div>
            ))}
        </div>
    );
}

export default Players; 