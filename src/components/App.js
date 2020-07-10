import React from 'react';
import PlacarContainer from './PlacarContainer';

const dados = {
    partida: {
        estadio: "Campo 1",
        data: "17/09/2019",
        hora: "19:00"
    },

    casa: {
        nome: "Time 1"
    },

    visitante: {
        nome: "Time 2"
    }

}

export default class App extends React.Component {
    render() {
        return <PlacarContainer {...dados} />

    }
}



