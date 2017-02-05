import { HomeComponent } from './shared/home.component';
import { UserModule } from './user/user.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from './app.routing';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [ AppComponent, HomeComponent ],
  imports: [ BrowserModule, FormsModule, HttpModule, UserModule, routing ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
