import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidadoresService {

  constructor() { }

  noApellidoHerrera(control: FormControl): { [s: string]: boolean } {
    if (control.value?.toLowerCase() === 'herrera') {
      return {
        noApellidoHerrera: true
      };
    }
    return null;
  }



}
