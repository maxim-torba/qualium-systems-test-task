import React, {Component} from 'react';
import {Rect} from 'react-konva';
import consts from '../consts';

class Square extends Component {
    constructor(props) {
        super(props);
        //random color
        this.color = window.Konva.Util.getRandomColor();
        this.rect_width = consts.rect_width;
        this.rect_height = consts.rect_height;
        //random place in the top of layer
        this.x = Math.random() *
            ((consts.stage_width - this.rect_width)
                - this.rect_width) + this.rect_width;
        this.state = {
            y: 0
        };
    }
    
    handleClick = () => {
        this.removeSquare();
        this.props.onClick();
    };
    
    removeSquare() {
        clearInterval(this.squareMoveInterval);
        this.refs.square.destroy();
    }
    
    componentDidMount() {
        //random speed
        let speed = Math.random() * 50;
        this.squareMoveInterval = setInterval(() => {
            if (this.state.y > consts.stage_height) {
                //remove square if it out of layer
                this.removeSquare();
            } else {
                this.setState({y: this.state.y + 1});
            }
        }, speed);
    }
    
    render() {
        return (
            <Rect
                x={this.x}
                y={this.state.y}
                width={this.rect_width}
                height={this.rect_height}
                fill={this.color}
                ref="square"
                square_id={this.props.square_id}
                onClick={this.handleClick}
            />
        );
    }
}


export default Square;