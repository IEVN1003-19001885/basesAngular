import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-resistencias',
  templateUrl: './resistencias.component.html',
  styleUrls: ['./resistencias.component.css']
})
export class ResistenciasComponent implements OnInit {
  resistencias: FormGroup;
  color1: any;
  color2: any;
  color3: any;
  tolerancia: number;
  valor: number;
  valorMaximo: number;
  valorMinimo: number;
  resultado: boolean = false;
  toleranciaColor: string = '';

  colores = [
    { nombre: 'Negro', valor: 0, colorHex: '#000000' },
    { nombre: 'Café', valor: 1, colorHex: '#8B4513' },
    { nombre: 'Rojo', valor: 2, colorHex: '#FF0000' },
    { nombre: 'Naranja', valor: 3, colorHex: '#FF6600' },
    { nombre: 'Amarillo', valor: 4, colorHex: '#FFFF00' },
    { nombre: 'Verde', valor: 5, colorHex: '#008000' },
    { nombre: 'Azul', valor: 6, colorHex: '#0000FF' },
    { nombre: 'Morado', valor: 7, colorHex: '#EE82EE' },
    { nombre: 'Gris', valor: 8, colorHex: '#808080' },
    { nombre: 'Blanco', valor: 9, colorHex: '#FFFFFF' }
  ];

  constructor() {
    this.tolerancia = 0;
    this.valor = 0;
    this.valorMaximo = 0;
    this.valorMinimo = 0;

    this.resistencias = new FormGroup({
      color1: new FormControl('', Validators.required),
      color2: new FormControl('', Validators.required),
      color3: new FormControl('', Validators.required),
      tolerancia: new FormControl('', Validators.required)
    });
  }

  ngOnInit(): void {}

  updateToleranciaColor(toleranciaSeleccionada: string) {
    if (toleranciaSeleccionada === 'dorado') {
      this.toleranciaColor = '#FFD700'; 
    } else if (toleranciaSeleccionada === 'plata') {
      this.toleranciaColor = '#C0C0C0'; 
    }
  }

  Calcular() {
    if (this.resistencias.valid) {
      this.color1 = this.resistencias.get('color1')?.value;
      this.color2 = this.resistencias.get('color2')?.value;
      this.color3 = this.resistencias.get('color3')?.value;
      this.tolerancia = this.resistencias.get('tolerancia')?.value;

      const valorTotal = (this.color1.valor * 10 + this.color2.valor) * Math.pow(10, this.color3.valor);
      this.valor = valorTotal;
      this.valorMaximo = valorTotal * (1 + this.tolerancia / 100);
      this.valorMinimo = valorTotal * (1 - this.tolerancia / 100);
      this.resultado = true;
    }
  }

  getColorStyle(color: any): string {
    return color ? color.colorHex : '#FFFFFF';
  }
}
