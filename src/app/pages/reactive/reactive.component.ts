import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {

  public formulario: FormGroup;

  constructor(
    private formBuider: FormBuilder
  ) {
    this.crearFormulario();
  }

  ngOnInit(): void {
  }

  crearFormulario() {
    this.formulario = this.formBuider.group({
      nombre: ['Juan'],
      apellido: ['Restrepo'],
      correo: ['restrepo86@hotmail.com']
    });
  }

  guardar() {
    console.log(this.formulario);
    
  }

}
