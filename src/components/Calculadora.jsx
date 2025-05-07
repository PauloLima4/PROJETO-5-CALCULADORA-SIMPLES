import React from 'react';
import './Calculadora.css';

const Calculadora = () => {
  return (
    <div className="calculadora-container">
      <h1>Calculadora Simples</h1>
      <input type="number" placeholder="Digite o primeiro número" />
      <br />
      <input type="number" placeholder="Digite o segundo número" />
      <br />
      <div className="botoes">
        <button>Somar</button>
        <button>Subtrair</button>
        <button>Multiplicar</button>
        <button>Dividir</button>
      </div>
      <p><strong>Resultado:</strong></p>
    </div>
  );
};

export default Calculadora;