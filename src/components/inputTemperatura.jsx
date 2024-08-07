import React from "react";

const unMedidaDescricao = {
    c: "Celsius",
    f: "Fahrenheit"
}

class InputTemperatura extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.props.onTemperatureChange(e.target.value)
    }

    render() {
        const temperatura = this.props.temperatura;
        const unidadeMedida = this.props.unidadeMedida

        return(
            <div>
                <p>Digite a temperatura em {unMedidaDescricao[unidadeMedida]}:</p>
                <input value={temperatura} onChange={this.handleChange} />
                  
            </div>
        )
    }
}

export default InputTemperatura;