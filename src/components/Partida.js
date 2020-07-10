import React from 'react';

export default class Partida extends React.Component {
    render() {

        return (
            <div className="text-white">
                <p>Localização</p>
                <h2>{this.props.estadio}</h2>
                <div >
                    <span>{this.props.data}</span>

                    <span> - </span>

                    <span>{this.props.hora}</span>
                </div>
                <div>
                    
                </div>
            </div>
        );

    }
}