import React, {Component} from 'react';

class StopBtn extends Component {
    render() {
        return (
            <button id="btn-stop"
                    onClick={this.props.onClick}>
                Stop
            </button>)
    }
}

export default StopBtn;