/**
 * Service responsável por fazer as operações da calculadora
 * @author ossbruno@outlook.com
 * @since 1.0.0
 */
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CalculadoraService {
  static readonly SOMA: string = '+';
  static readonly SUBTRACAO: string = '-';
  static readonly DIVISAO: string = '/';
  static readonly MULTIPLICACAO: string = '*';

  constructor() {}
  /**
   * Método que executa o cálculo solicitado pelo usuário
   * @param num1 number
   * @param num2 number
   * @param operador string - operação desejada
   * @returns
   */

  calcular(num1: number, num2: number, operador: string): number {
    let resultado: number;
    switch (operador) {
      case CalculadoraService.SOMA:
        resultado = num1 + num2;
        break;
      case CalculadoraService.SUBTRACAO:
        resultado = num1 - num2;
        break;
      case CalculadoraService.DIVISAO:
        resultado = num1 / num2;
        break;
      case CalculadoraService.MULTIPLICACAO:
        resultado = num1 * num2;
        break;
      default:
        resultado = 0;
    }
    return resultado;
  }
}
