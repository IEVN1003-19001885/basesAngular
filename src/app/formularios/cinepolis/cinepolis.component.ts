import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cinepolis',
  templateUrl: './cinepolis.component.html',
  styleUrls: ['./cinepolis.component.css']
})
export class CinepolisComponent implements OnInit {
  formulario!: FormGroup;
  total!: number;
  mensaje!: string | null;
  precioBoleta: number = 12.0;

  constructor() {}

  ngOnInit(): void {
    this.formulario = new FormGroup({
      nombre: new FormControl('', Validators.required),
      compradores: new FormControl('', [Validators.required, Validators.min(1)]),
      boletos: new FormControl('', [Validators.required, Validators.min(1)]),
      tarjetaCineco: new FormControl(null, Validators.required)
    });
  }

  Compra(): void {
    let nombre = this.formulario.get('nombre')?.value;
    let compradores = this.formulario.get('compradores')?.value;
    let boletos = this.formulario.get('boletos')?.value;
    let tarjetaCineco = this.formulario.get('tarjetaCineco')?.value;

    let maxBoletos = compradores * 7;

    if (boletos > maxBoletos) {
      this.mensaje = `No se pueden comprar más de ${maxBoletos} boletos con ${compradores} compradores.`;
      this.total = 0;
    } else {
      this.mensaje = null;
      let total = boletos * this.precioBoleta;

      // Descuentos 
      if (boletos > 5) {
        total *= 0.85; // 15% 
      } else if (boletos >= 3) {
        total *= 0.90; // 10% 
      }

      // Descuento extraa
      if (tarjetaCineco) {
        total *= 0.90; // 10% 
      }

      this.total = total;
    }
  }

  salir(): void {
    window.location.href = '/';
  }
}

