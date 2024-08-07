import React from "react";
import InputTemperatura from "./inputTemperatura";


function AguaFerveu(props) {
    const tempCelcius = props.celsius;
    if (tempCelcius >= 100) {
        return <p>Água ferveu</p>
    } else {
        return <p>Água não ferveu</p>
    }
}

function toCelsius(f) {
    let tempCelcius = (f -32) * 5 / 9;
    return tempCelcius;
}

function toFahrenheit(c) {
    let tempFahrenheit = (c * 9 / 5) + 32;
    return tempFahrenheit;
}

function tryConvert(temperatura, funcConversao) {
    const temp = parseFloat(temperatura)
    if (Number.isNaN(temp)) {
        return '';
    }

    const conversaoRetorno = funcConversao(temp)
    const tempRounded = Math.round(conversaoRetorno * 100) / 100;
    return tempRounded.toString();
}


class Calculadora extends React.Component {
    constructor(props) {
        super(props);
        this.state = {temperatura: '0' , unidadeMedida: "c"}
        
        this.handleCelsiusChange = this.handleCelsiusChange.bind(this);

        this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
    }

    handleCelsiusChange(temperatura) {
        
        this.setState({temperatura, unidadeMedida: "c"});
    }

    handleFahrenheitChange(temperatura) {
        this.setState({temperatura, unidadeMedida: "f"});
    }

    render() {
        const temperatura = this.state.temperatura;
        const unidadeMedida = this.state.unidadeMedida;
        const celsius = unidadeMedida === "f" ? tryConvert(temperatura, toCelsius) : temperatura;
        const fahrenheit = unidadeMedida === "c" ? tryConvert(temperatura, toFahrenheit) : temperatura;
        return (
            <div>
                <InputTemperatura unidadeMedida="c" temperatura={celsius} onTemperatureChange={this.handleCelsiusChange}/>
                

                <InputTemperatura unidadeMedida="f" temperatura={fahrenheit} onTemperatureChange={this.handleFahrenheitChange}/>
                <AguaFerveu celsius={celsius} />
            </div>
        )
    }
}

export default Calculadora;