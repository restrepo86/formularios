import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { ValidadoresService } from '../../services/validadores.service';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {

  public formulario: FormGroup;

  constructor(
    private formBuider: FormBuilder,
    private validadores: ValidadoresService
  ) {
    this.crearFormulario();
    this.cargarDataFormulario();
  }

  ngOnInit(): void {
  }

  get pasatiempos(): FormArray {
    return this.formulario.get('pasatiempos') as FormArray;
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

  get distritoNoValido(): boolean {
    return this.formulario.get('direccion.distrito').invalid && this.formulario.get('direccion.distrito').touched;
  }

  get ciudadNoValida(): boolean {
    return this.formulario.get('direccion.ciudad').invalid && this.formulario.get('direccion.ciudad').touched;
  }

  get pass1NoValido(): boolean {
    return this.formulario.get('pass1').invalid && this.formulario.get('pass1').touched;
  }

  get pass2NoValido(): boolean {
    const pass1 = this.formulario.get('pass1').value;
    const pass2 = this.formulario.get('pass2').value;
    return pass1 === pass2 ? false : true;
  }

  crearFormulario(): void {
    this.formulario = this.formBuider.group({
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      apellido: ['', [Validators.required, this.validadores.noApellidoHerrera]],
      correo: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      pass1: ['', Validators.required],
      pass2: ['', Validators.required],
      direccion: this.formBuider.group({
        distrito: ['', Validators.required],
        ciudad: ['', Validators.required],
      }),
      pasatiempos: this.formBuider.array([])
    },{
      validators: this.validadores.passwordsIguales('pass1', 'pass2')
    });
  }

  cargarDataFormulario(): void {
    // Si usamos el reset podemos dar valores por defecto solo a algunos campos, 
    //si usamos el setValue se deben dar valores por defecto a todos los campos
    //this.formulario.setValue({
      this.formulario.reset({
        nombre: 'Juan',
        apellido: 'Restrepo',
        correo: 'restrepo9212@gmail.com',
        direccion: {
          distrito: 'capital',
          ciudad: 'Medellín'
        }
    });

    ["comer", "Dormir"].forEach(valorPorDefecto => this.pasatiempos.push(this.formBuider.control(valorPorDefecto)));

  }

  agregarPasatiempo(): void {
    this.pasatiempos.push(this.formBuider.control('', Validators.required));
  }

  borrarPasatiempo(index: number): void {
    this.pasatiempos.removeAt(index);
  }

  guardar(): void {
    console.log(this.formulario.value);

    if (this.formulario.invalid) {
      return Object.values(this.formulario.controls).forEach(control => control.markAllAsTouched());
    }

    this.formulario.reset(
      {
        correo: 'restrepo9212@gmail.com'
      }
    );

  }


}
