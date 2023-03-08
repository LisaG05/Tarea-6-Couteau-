import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Detector de Genero', url: 'nombre', icon: 'male' },
    { title: 'Detector de Edades', url: 'nombre2', icon: 'person' },
    { title: 'Universidades', url: 'nombrepais', icon: 'business' },
    { title: 'Clima de RD', url: 'clima', icon: 'sunny' },
    { title: 'Contratame', url: 'contratame', icon: 'document' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
