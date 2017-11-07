import React, {Component} from 'react';

class StartBtn extends Component {
    render() {
        return (
            <button id="btn-start"
                    onClick={this.props.onClick}>
                Start
            </button>)
    }
}

export default StartBtn;