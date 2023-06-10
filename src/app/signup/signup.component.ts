import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'ng-rx-practice-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent {
  onSubmit(form: NgForm) {
    console.log(form.value);
  }
}
