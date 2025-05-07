import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Calculadora from '../components/Calculadora';

describe('Calculadora Simples', () => {
  test('renderiza os inputs', () => {
    render(<Calculadora />);
    expect(screen.getByPlaceholderText('Digite o primeiro número')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Digite o segundo número')).toBeInTheDocument();
  });

  test('renderiza os botões', () => {
    render(<Calculadora />);
    expect(screen.getByText('Somar')).toBeInTheDocument();
    expect(screen.getByText('Subtrair')).toBeInTheDocument();
    expect(screen.getByText('Multiplicar')).toBeInTheDocument();
    expect(screen.getByText('Dividir')).toBeInTheDocument();
  });

  test('exibe o parágrafo de resultado', () => {
    render(<Calculadora />);
    expect(screen.getByText('Resultado:')).toBeInTheDocument();
  });
});
