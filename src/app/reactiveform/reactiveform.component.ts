import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';

@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})
export class ReactiveformComponent implements OnInit {
  registerForm:FormGroup;
  submitted=false;

  constructor(private FormBuilder:FormBuilder) { }

  ngOnInit() {
    this.registerForm=this.FormBuilder.group({
      firstName:['',Validators.required],
      lastName:['',Validators.required],
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required,Validators.minLength(6)]],
    })
  }
  //convenience getter for eazy access to form field
  get f(){ return this.registerForm.controls};
  
  onSubmit(){
    console.log(this.f);
    this.submitted=true;

    //stop here form is invalid
    if(this.registerForm.invalid){
      return;
    }
    alert('SUCCESS!! :-)'+this.registerForm.get("firstName.value"))
  }

}
