import React from 'react';

export default class BotaoGol extends React.Component {
    handleClick(event) {
        event.preventDefault();
        this.props.marcarGol();
    }

    render() {
        return (
          
            <button className="btn btn-success mr-2 btn-sm "  onClick={this.handleClick.bind(this)}>Gol!</button>
        
        )
    }
}