import { Component, OnInit } from '@angular/core';
import { NgForOf } from '@angular/common';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {

  public usuario = {
    nombre: 'Juan'
  };

  constructor() { }

  ngOnInit(): void {
  }

  guardar(forma: NgForm): void {
    console.log(forma.value);
  }

}
