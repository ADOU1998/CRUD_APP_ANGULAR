import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.component.html',
  styleUrls: ['./add-products.component.css']
})
export class AddProductsComponent { 

  // Déclation du formulaire
  addForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
  ){
    // déclare les champs
    this.addForm = this.fb.group({
      name : ['', Validators.required],
      description : ['', Validators.required],
      price : ['', Validators.required],
      brand : ['', Validators.required],
    })

  }

  postdata(forms:any){
    // Recupérer les values dans la console
    console.log(this.addForm.value);
    
  }
}
