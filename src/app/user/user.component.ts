import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
    selector: 'user',
    templateUrl: './user.component.html'
})
export class UserComponent implements OnInit {

    title = 'Registeration module';
    inviteForm: FormGroup;
    userName:FormControl;
    userPassword:FormControl;
    base64Emails: string = null;

    emailRegExp = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    constructor(private fb:FormBuilder, private userService: UserService, private router:Router) { }

    ngOnInit() {         
        this.userName = new FormControl(null, [Validators.required, Validators.pattern(this.emailRegExp)]);
        this.userPassword = new FormControl(null, [Validators.compose([Validators.required])]);
        this.inviteForm = this.fb.group({
            'userName': this.userName,
            'userPassword': this.userPassword
        });
    }

    onInvite(inviteFormValue: any):void {
        console.log(inviteFormValue);
        this.base64Emails = null;
        this.userService.inviteCandidate(inviteFormValue)
            .subscribe(
                data => {
                            console.log('Candidate Email Sent'); //success
                            console.log(data);
                            this.base64Emails = data;                           
                        },
                err => console.log(err), //catch
                () => console.log('Candidate Email Post Complete')//finally
            );
        //this.router.navigateByUrl('/home');
    }
}