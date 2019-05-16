
import React from 'react';
// import 'react-testing-library/cleanup-after-each';

class Counters extends React.Component {
    constructor(props) {
        super(props);
        // this.state = {
        //     player: 
        //         balls: this.balls.state,
        //         strikes: 0,
        // }
    }
    
    

    // ball = () => {
    //     console.log("button was clicked")


    //     if(this.props.balls<4) {
    //         this.setState({
    //             balls: this.props.balls + 1,
    //             // greeting: 'hello',
    //         })
    //     }
    //     else {
    //         this.setState({
    //             balls: 0,
    //             strikes: 0,
    //         })
    //     }
    // }

    strike() {
        if(this.state.strikes<3) {
            this.setState({
                strikes: this.state.strikes + 1,
            })
        }
        else {
            this.setState({
                balls: 0,
                strikes: 0,
            })
        }
    }

    foul() {
        if(this.props.players.strikes=0) {
            return {...this.props.players, strikes: 1};
        }
        else if (this.props.players.strikes=1) {
            return {...this.props.players, strikes: 2}
        }
        else {
            return {...this.props.players, strikes: this.props.players.strikes}
        }
    }

    hit() {
        return{...this.props.players, balls: 0, strikes: 0}
    }

    render() { 
            return(

            <div>
                <h3>Player List</h3>
                <button onClick={this.strike}>strike</button>
        <button>foul</button>
        <button data-testid = "ballButton" onClick={this.props.ball}>ball</button>
        <button>hit</button>
                <div> {this.props.balls}</div>
                <div>Strikes: {this.props.strikes}</div>
            </div>
        );
    }
}

export default Counters; 



// - balls and strikes reset to 0 when a player reaches 3 strikes or 4 balls.
// - balls and strikes reset to 0 when a `hit` is recorded.
// - a `foul` increases strikes up to 2. With no strikes, a foul makes it 1 strike. With 1 strike, a foul makes it 2 strikes. With two strikes a foul has no effect, count stays at 2 strikes.