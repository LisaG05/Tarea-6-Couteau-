import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-clima',
  templateUrl: './clima.page.html',
  styleUrls: ['./clima.page.scss'],
})
export class ClimaPage implements OnInit {
  ciudad: string = "Santo Domingo"; // Valor por defecto
  clima: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.buscarClima(); // Llamada inicial
  }

  buscarClima() {
    this.http.get(`https://api.openweathermap.org/data/2.5/weather?q=${this.ciudad},DO&appid=7cce830ae1a069f7e4ea2f4e8df7faae&units=metric`)
      .subscribe(data => {
        this.clima = data;
      });
  }
  
}
