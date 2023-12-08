import { Component } from '@angular/core';
import { User } from './user';
import { EnrollmentService } from './enrollment.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private _enrollmentService: EnrollmentService){

  }

  title = 'forms';

  topics = ['Angular', 'React', 'Vue'];

  topicHasError=true;
  submitted = false;

  errorMsg="";


  userModel = new User('rob', 'rob@test.com', 1234567890, 'default', 'morning', true);



  // check if the topic is selected other than the default ('i am interested in)
  validateTopic(value: any){
    if(value === 'default'){
      this.topicHasError=true;
    }else{
      this.topicHasError=false;
    }
  }

  // submit form response to database
  onSubmit(userForm:any){
    this.submitted=true;
    console.log(userForm.value);
    this.submitted=true;
    this._enrollmentService.enroll(this.userModel).subscribe(
      (data: any) => console.log('Success!', data),
      (error: any) => this.errorMsg=error.statusText
    );
  }

  

}
