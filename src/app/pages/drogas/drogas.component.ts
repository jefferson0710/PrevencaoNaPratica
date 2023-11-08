import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';



@Component({
  selector: 'app-drogas',
  templateUrl: './drogas.component.html',
  styleUrls: ['./drogas.component.scss']
})
export class DrogasComponent {

  numeroPagina = 0;
  contactForm: FormGroup;

 
  drogas = [
    { id: 1, name: "Maconha" },
    { id: 2, name: "Crack" },
    { id: 3, name: "Alcool" },
    { id: 4, name: "Cocaina" },
    { id: 5, name: "Ecstasy" }
  ];
 
  constructor(private fb:FormBuilder) {

    this.contactForm = this.fb.group({
      id: 0
    });
  }
 
  ngOnInit() {
 

  }
 
  submit() {
    this.numeroPagina = this.contactForm.value.id
    console.log(this.numeroPagina)
  }


}
