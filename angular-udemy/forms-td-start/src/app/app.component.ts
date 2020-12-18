import {Component, ElementRef, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // @ViewChild('f') signupForm: NgForm;
  // defaultQuestion = 'pet';
  // answer = '';
  // genders = ['male', 'female'];
  //
  // user = {
  //   username: '',
  //   email: '',
  //   secretQuestion: '',
  //   answer: '',
  //   gender: '',
  // }
  //
  // submitted = false;
  //
  // suggestUserName() {
  //   const suggestedName = 'Superuser';
  //   // this.signupForm.setValue({
  //   //   userData: {
  //   //     username: suggestedName,
  //   //     email: ''
  //   //   },
  //   //   secret: 'teacher',
  //   //   questionAnswer: '',
  //   //   gender: 'male'
  //   // })
  //   this.signupForm.form.patchValue({
  //     userData: {
  //       username: suggestedName,
  //     }
  //   });
  // }
  //
  // // onSubmit(form: NgForm){
  // //   console.log(form)
  // // }
  //
  // onSubmit() {
  //   this.submitted = true;
  //   this.user.username = this.signupForm.value.userData.username;
  //   this.user.email = this.signupForm.value.userData.email;
  //   this.user.secretQuestion = this.signupForm.value.secret;
  //   this.user.answer = this.signupForm.value.questionAnswer;
  //   this.user.gender = this.signupForm.value.gender;
  //
  //   this.signupForm.reset();
  // }

  // @ts-ignore
  @ViewChild('f') signInForm: ngForm;
  defaultSub = 'basic';
  btnSubmit = false;
  userInfo = {
    email: '',
    pass: '',
    sub: ''
  }

  onSubmit() {
    this.btnSubmit = true;
    this.userInfo.email = this.signInForm.value.email;
    this.userInfo.pass = this.signInForm.value.password;
    this.userInfo.sub = this.signInForm.value.subrip;

    this.signInForm.reset();
  }

}