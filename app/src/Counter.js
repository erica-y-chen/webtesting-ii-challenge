module.exports = {
    ball,
    strike,
    foul,
    hit
}

function ball(player) {
    if(player.balls<4) {
        return {...player, balls: player.balls + 1};
    }
    else {
        return {...player, strikes: 0, balls: 0}
    }
}

function strike(player) {
    if(player.strikes<3) {
        return {...player, strikes: player.strikes + 1};
    }
    else {
        return {...player, strikes: 0, balls: 0}
    }
}

function foul(player) {
    if(player.strikes=0) {
        return {...player, strikes: 1};
    }
    else if (player.strikes=1) {
        return {...player, strikes: 2}
    }
    else {
        return {...player, strikes: player.strikes}
    }
}

function hit(player) {
    return{...player, balls: 0, strikes: 0}
}
// - balls and strikes reset to 0 when a player reaches 3 strikes or 4 balls.
// - balls and strikes reset to 0 when a `hit` is recorded.
// - a `foul` increases strikes up to 2. With no strikes, a foul makes it 1 strike. With 1 strike, a foul makes it 2 strikes. With two strikes a foul has no effect, count stays at 2 strikes.