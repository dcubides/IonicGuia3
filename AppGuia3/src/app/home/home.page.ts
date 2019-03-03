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
  //this.resultado = this.todo.base * this.todo.altura;
} //}

tipodato:any;
resultdato:any;
obtenertipodato(){ 


  this.resultdato = (typeof(this.tipodato))
}


  




}
