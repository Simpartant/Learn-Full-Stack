import {Component, OnInit} from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from "@angular/forms";
import {Observable} from "rxjs";
import {resolve} from "url";
import {log} from "util";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  // genders = ['male', 'female'];
  // signUpForm: FormGroup;
  // forbiddenUsenames = ['son', 'ny'];
  //
  // ngOnInit() {
  //   this.signUpForm = new FormGroup({
  //     'userData': new FormGroup({
  //       'username': new FormControl(null, [Validators.required, this.forbiddenNames.bind(this)]),
  //       'email': new FormControl(null, [Validators.required, Validators.email], this.forbiddenEmails),
  //     }),
  //     'gender': new FormControl('male'),
  //     'hobbies': new FormArray([])
  //   });
  //   // this.signUpForm.valueChanges.subscribe(
  //   //   (value) => {
  //   //     console.log(value)
  //   //   }
  //   // )
  //   this.signUpForm.statusChanges.subscribe(
  //     (status) => console.log(status)
  //   );
  //   this.signUpForm.setValue({
  //     'userData': {
  //       'username' : 'Max',
  //       'email': 'hoangson@gmail.com'
  //     },
  //     'gender': 'male',
  //     'hobbies': [],
  //   });
  //   this.signUpForm.patchValue({
  //     'userData': {
  //       'username': 'Son'
  //     }
  //   });
  // }
  //
  // onSubmit() {
  //   console.log(this.signUpForm);
  //   this.signUpForm.reset({'gender': 'male'});
  // }
  //
  // onAddHobby(){
  //   const control = new FormControl(null, Validators.required);
  //   (<FormArray>this.signUpForm.get('hobbies')).push(control);
  // }
  //
  // forbiddenNames(control: FormControl): {[s: string]: boolean }{
  //   if ( this.forbiddenUsenames.indexOf(control.value) !== -1) {
  //     return {'nameIsForbidden' : true};
  //   }
  //   return null;
  // }
  //
  // forbiddenEmails(control: FormControl): Promise<any> | Observable<any> {
  //   const promise = new Promise<any>((resolve, reject) =>  {
  //     setTimeout(() => {
  //       if (control.value === 'test@test.com'){
  //         resolve({'emailIsForbidden': true})
  //       } else {
  //         resolve(null);
  //       }
  //     }, 1500);
  //   });
  //   return promise;
  // }

  pjForm: FormGroup;
  projectData = {
    'pjname': '',
    'pjmail': '',
    'pjstatus': '',
  }

  pjNameErr = ['abc', 'xyz', 'Test'];

  ngOnInit() {
    this.pjForm = new FormGroup({
      'pjData': new FormGroup({
        'pjName': new FormControl(null, [Validators.required, this.namePjErr.bind(this)]),
        'pjMail': new FormControl(null, [Validators.required, Validators.email], this.nampjErr),
        'pjStatus': new FormControl('stable'),
      })
    });
    this.pjForm.statusChanges.subscribe((status) => console.log(status));
  }

  onSubmit() {
    console.log(this.pjForm);
    this.projectData.pjname = this.pjForm.value.pjData.pjName;
    this.projectData.pjmail = this.pjForm.value.pjData.pjMail;
    this.projectData.pjstatus = this.pjForm.value.pjData.pjStatus;

    // this.pjForm.reset({'pjStatus': 'stable'});
  }

  namePjErr(control: FormControl): {[s: string] : boolean} {
    if (this.pjNameErr.indexOf(control.value) !== -1){
      return {'pjNameErr': true};
    }
    return null;
  }

  nampjErr(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'test@test.com') {
          resolve({'thisEmailError': true});
        } else {
          resolve(null);
        }
      }, 1500);
    });
    return promise;
  }

}
