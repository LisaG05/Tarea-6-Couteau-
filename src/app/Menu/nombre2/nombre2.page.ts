import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-nombre2',
  templateUrl: './nombre2.page.html',
  styleUrls: ['./nombre2.page.scss'],
})
export class Nombre2Page implements OnInit {
  nombre: string = '';
  edad: number =0;
  mensaje: string = '';
  imagen: string = '';

  constructor(private http: HttpClient) {}

  ngOnInit() {}

  calcularEdad() {
    this.http.get<any>(`https://api.agify.io/?name=${this.nombre}`).subscribe((response) => {
      this.edad = response.age;
      this.imagen = this.getImagen(this.edad);
      if (this.edad < 18) {
        this.mensaje = 'Eres joven';
      } else if (this.edad < 60) {
        this.mensaje = 'Eres adulto';
      } else {
        this.mensaje = 'Eres anciano';
      }
    });
  }

  private getImagen(edad: number): string {
    if (edad < 18) {
      return 'https://img.freepik.com/vector-gratis/dibujos-animados-vuelta-al-concepto-colegio-estudiantes-alegres_33099-361.jpg?w=740&t=st=1677984299~exp=1677984899~hmac=d8e797dbf05e77ab1dc8bdd8d677949312b0507c7e0c9720164055bcd9414d72';
    } else if (edad < 60) {
      return 'https://img.freepik.com/vector-gratis/ilustracion-coleccion-personas-seguras_52683-31886.jpg?w=740&t=st=1677984370~exp=1677984970~hmac=366f6dee0846b5e261f6ba6f2ee2db4e4003c1cbcfe948f58ac8a3ba44e85016';
    } else {
      return 'https://img.freepik.com/vector-premium/ancianos-diferentes-poses_344186-8452.jpg?w=826';
    }
  }
  onNombreChange() {
    if (this.nombre === '') {
      this.edad = 0;
      this.mensaje = '';
      this.imagen = '';
    }
  }
  
    

}
