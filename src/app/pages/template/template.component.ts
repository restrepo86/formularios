import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {

  public usuario = {
    nombre: 'JuanF',
    apellido: 'Restrepo',
    correo: 'restrepo9212@gmail.com'
  };

  constructor() { }

  ngOnInit(): void {
  }

  guardar(forma: NgForm): void {
    console.log(forma.value);

    if (forma.invalid) {
      Object.values(forma.controls).forEach(control => control.markAsTouched());
      return;
    }
  }

}
