import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { UserService } from './user.service';
import { registerRouting } from './user.routing';
import { UserComponent }   from './user.component';

@NgModule({
    imports: [ BrowserModule, FormsModule, ReactiveFormsModule, HttpModule, registerRouting ],
    exports: [],
    declarations: [UserComponent ],
    providers: [ UserService ],
})
export class UserModule { }
