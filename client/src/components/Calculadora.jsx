import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { NavLink, Route, Link} from 'react-router-dom';
import History from './History'
import './Calculadora.css'


class Calculadora extends React.Component  {
     
    constructor(props) {
      super(props);
      this.state = {
        num1: '',
        num2: '',
        result: null,
        resultados: []
      };
    
    this.handleChange = this.handleChange.bind(this);
 
    }

    handleChange(e) {
        this.setState({...this.state, [e.target.name]: e.target.value});
      }

    async operacion(numero1, numero2, ope) {
      const num1 = numero1.num1
      const num2 = numero2.num2
      const response = await axios.post(`http://localhost:8000/${num1}/${num2}/${ope}`)
      const resultado = response.data.result;
      const {resultados} = this.state
      resultados.push(resultado)
      this.setState({...this.state, result: response.data.result, resultados})     
    }

    render() {
      const { num1, num2, result, resultados} = this.state


    return (
      <>
      <div className="contenedor">
        
        <div className="operaciones">
          <input placeholder="Ingrese el 1 numero" type="number" name="num1" value={num1} onChange={this.handleChange}/>
          <input placeholder="Ingrese el 2 numero" type="number" name="num2" value={num2} onChange={this.handleChange}/>
        </div>
          <div className="botones"> 
            <button class="btn btn-primary" type="button" value="Suma"  onClick={ () => {this.operacion({num1},{num2},'suma')}}>Suma</button>
            <button class="btn btn-primary" type="button" name="resta" value="Resta"  onClick={ () => {this.operacion({num1},{num2},'resta')}}>Resta</button>    
            <button class="btn btn-primary" type="button" name="mult" value="Mult"  onClick={ () => {this.operacion({num1},{num2},'mult')}}>Multiplicacion</button>      
            <button class="btn btn-primary" type="button" name="dividir" value="Dividir" onClick={ () => {this.operacion({num1},{num2},'dividir')}}>Division</button>
          </div>
          <div className="resultado">
            El resultado es: {result}            
          </div>
          <div className="historial">
            El historial de resultados es: {resultados.toString()}            
          </div>      
      </div>
          
        
      </>
    )
    }
}

export default Calculadora
