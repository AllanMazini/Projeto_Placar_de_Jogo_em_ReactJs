import React from 'react';

export default class DesmarcarGol extends React.Component {
    handleClick(event) {
        event.preventDefault();
        this.props.desmarcarGol();
    }

    render() {
        return (

            <button className="btn btn-danger btn-sm" onClick={this.handleClick.bind(this)}>Cancelar</button>

        )
    }
}