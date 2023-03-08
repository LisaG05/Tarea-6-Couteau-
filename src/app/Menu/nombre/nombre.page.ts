import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-nombre',
  templateUrl: './nombre.page.html',
  styleUrls: ['./nombre.page.scss'],
})
export class NombrePage implements OnInit {
  nombre: string;
  generoTexto: string = '';
  generoColor: string = '';

  constructor(private http: HttpClient) {
    this.nombre = '';
  }

  ngOnInit() {}

  predecirGenero() {
    this.http.get(`https://api.genderize.io/?name=${this.nombre}`)
      .subscribe((data: any) => {
        this.generoTexto = this.traducirGenero(data.gender);
        this.generoColor = this.generoTexto === 'Masculino' ? 'primary' : 'danger';
      });
  }

  traducirGenero(generoIngles: string): string {
    if (generoIngles === 'male') {
      return 'Masculino';
    } else if (generoIngles === 'female') {
      return 'Femenino';
    } else {
      return 'Desconocido';
    }
  }
  onNombreChange(event: Event) {
    if ((event.target as HTMLInputElement).value === '') {
      this.generoTexto = '';
      this.generoColor = '';
    }
  }

}
