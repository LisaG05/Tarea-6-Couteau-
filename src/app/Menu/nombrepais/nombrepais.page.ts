import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-nombrepais',
  templateUrl: './nombrepais.page.html',
  styleUrls: ['./nombrepais.page.scss'],
})
export class NombrepaisPage implements OnInit {

  countryName: string ='';
  universidades: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  buscarUniversidades() {
    let url = `http://universities.hipolabs.com/search?country=${this.countryName}`;
    this.http.get(url).subscribe((data) => {
      this.universidades = data;
    });
  }

}
