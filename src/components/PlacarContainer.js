import React from 'react';

import Partida from './Partida';
import Time from './Time';

export default class PlacarContainer extends React.Component {
    constructor() {
        super();
        this.state = {
            gols_casa: 0,
            gols_visitante: 0
        };
    }

    marcarGolCasa() {
        this.setState({
            gols_casa: this.state.gols_casa + 1,
        });
    }

    marcarGolVisitante() {
        this.setState({
            gols_visitante: this.state.gols_visitante + 1,
        });
    }

    desmarcarGolCasa() {
        this.setState({
            gols_casa: this.state.gols_casa - 1,
        });
    }

    desmarcarGolVisitante() {
        this.setState({
            gols_visitante: this.state.gols_visitante - 1,
        });
    }

    zerarPlacar(){
        this.setState({
            gols_casa: this.state.gols_casa = 0,
            gols_visitante: this.state.gols_visitante = 0
        })
    }


    render() {

        const { partida, casa, visitante } = this.props;


        return (
            <div className="row">
                <div className="col-sm">
                    <div className="card" >
                        <div className="card-body">
                            <h3>Casa</h3>
                            <Time nome={casa.nome}
                                gols={this.state.gols_casa}
                                marcarGol={this.marcarGolCasa.bind(this)}
                                desmarcarGol={this.desmarcarGolCasa.bind(this)} />
                        </div>
                    </div>
                </div>

                <div className="col-sm-3">
                    <div className="card-body">
                        <Partida {...partida} />
                        <button className="btn btn-light mt-4 " onClick={this.zerarPlacar.bind(this)}>Zerar Placar</button>
                    </div>
                    
                </div>

                <div className="col-sm">
                    <div className="card" >
                        <div className="card-body" >
                            <h3>Visitante</h3>
                            <Time nome={visitante.nome}
                                gols={this.state.gols_visitante}
                                marcarGol={this.marcarGolVisitante.bind(this)}
                                desmarcarGol={this.desmarcarGolVisitante.bind(this)} />
                        </div>
                    </div>
                </div>


                <div style={{ clear: "both" }} ></div>
            </div>
        );

    }
}