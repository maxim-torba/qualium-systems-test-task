import React, {Component} from 'react';
import Square from './Components/Square';
import StartBtn from './Components/StartBtn';
import StopBtn from './Components/StopBtn';
import {Layer, Stage} from 'react-konva';
import consts from './consts';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            squares: [],
            score: 0,
            isStarted: false
        }
    }
    
    //adding a square at a random time
    addSquareInRandTime() {
        let random_time = Math.random() * (2000 - 100) + 100;
        this.newSquareTimer = setTimeout(() => {
            this.setState(prevState => ({
                squares: [...prevState.squares,
                    <Square
                        onClick={this.handleSquareClick}
                        key={random_time}
                    />]
            }));
            this.addSquareInRandTime();
        }, random_time);
    }
    
    handleSquareClick = () => {
        this.setState({
            score: this.state.score + 1
        });
    };
    
    handleStartBtn = () => {
        if (!this.state.isStarted) {
            this.addSquareInRandTime();
            this.setState({
                isStarted: true,
                score: 0
            });
        } else {
            alert('already started');
        }
    };
    
    handleStopBtn = () => {
        clearTimeout(this.newSquareTimer);
        this.refs.layer.destroyChildren();
        this.setState({
            isStarted: false
        });
    };
    
    render() {
        return (
            <div className="wrapper">
                <StartBtn onClick={this.handleStartBtn}/>
                <StopBtn onClick={this.handleStopBtn}/>
                <span id="score">Score: {this.state.score}</span>
                <Stage width={consts.stage_width} height={consts.stage_height}>
                    <Layer ref="layer">
                        {this.state.squares}
                    </Layer>
                </Stage>
            </div>
        )
    }
}

export default App;