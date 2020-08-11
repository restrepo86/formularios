import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

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

  get nombreNoValido(): boolean {
    return this.formulario.get('nombre').invalid && this.formulario.get('nombre').touched;
  }

  get apellidoNoValido(): boolean {
    return this.formulario.get('apellido').invalid && this.formulario.get('apellido').touched;
  }

  get correoNoValido(): boolean {
    return this.formulario.get('correo').invalid && this.formulario.get('correo').touched;
  }

  crearFormulario(): void {
    this.formulario = this.formBuider.group({
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      apellido: ['', Validators.required],
      correo: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]]
    });
  }

  guardar(): void {
    console.log(this.formulario);

    if (this.formulario.invalid) {
      return Object.values(this.formulario.controls).forEach(control => control.markAsTouched())
    }
    
  }

}
