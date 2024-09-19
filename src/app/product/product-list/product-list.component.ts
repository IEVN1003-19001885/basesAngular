import { Component } from '@angular/core';
import { IProducto } from '../producto';

@Component({
  selector: 'app-product-list', 
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  title="Saludo de variable";

  imagenWidth:number=50;
  imagenMargi:number=2;
  muestraImg:boolean=true;
  listFilter:string='';

  showImage():void{
    this.muestraImg=!this.muestraImg;
  }


  productos:IProducto[]=[
    {
      "productoId":1,
      "Modelo":'Sentra',
      "Descripcion":"4 puertas familiar",
      "year":"febrero 2 2022",
      "Precio": 20000,
      "Marca":"NISSAN",
      "Color":"Morado",
      "imagenUrl":"https://cdn.buttercms.com/UZYoQvASQGul3bhug1tN"
    },
    {
      "productoId":2,
      "Modelo":'A4',
      "Descripcion":"2 puertas ",
      "year":"febrero 3 2023",
      "Precio": 30000,
      "Marca":"AUDI",
      "Color":"Blanco",
      "imagenUrl":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRa9Ed9B9bJPzu8AnPzhYjEd9gBCE83MbeZQw&s"
    },
    {
      "productoId":3,
      "Modelo":'Rio',
      "Descripcion":"4 puertas familiar",
      "year":"febrero 3 2022",
      "Precio": 60000,
      "Marca":"KIA",
      "Color":"Azul",
      "imagenUrl":"https://motorsme.wordpress.com/wp-content/uploads/2023/01/kia-rio-2022.jpg"
    }
  ]

}
