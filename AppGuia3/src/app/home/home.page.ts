import { Component, Input } from '@angular/core';
import {  FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {

  nombre:string = "Juan Perez";
  saludo:string = "Hola";
  edad:number = 32;
  
  
 tota:string = `${this.saludo} Mi nombre es ${this.nombre} y tengo ${this.edad} años`;


base2;
altura2;

resultadoArea: Number;
resultadoBase: Number;

calcularPerimetroyArea(){ 
  this.resultadoArea = this.base2 * this.altura2;
  this.resultadoBase = 2 * (this.base2 + this.altura2);
}


logForm() {
  
} 

tipodatoString:any;
tipodatoBool:any;
tipodatoNumber:any;
resultdato1:any;
resultdato2:any;
resultdato3:any;

obtenertipodato(){ 
  
  this.resultdato1 = StringConverter(this.tipodatoString);
  this.resultdato2 = BooleanConverter(this.tipodatoBool);
  this.resultdato3 = NumberConverter(this.tipodatoNumber);
}


}

export var StringConverter = (value: any) => {
  if (value === null || value === undefined || typeof value === "string")
      return value;
      
  return value.toString();
}

export var BooleanConverter = (value: any) => {
  if (value === null || value === undefined || typeof value === "boolean")
      return value;

  return value.toString() === "true";
}

export var NumberConverter = (value: any) => {
  if (value === null || value === undefined || typeof value === "number")
     { return value; }
     
  return parseFloat(value.toString());
}

