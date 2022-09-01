import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UserAuthModule } from './user-auth/user-auth.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { CountryComponent } from './country/country.component';
import { MatSliderModule } from '@angular/material/slider';   // module unt slider
import { MatButtonModule } from '@angular/material/button';
import { ChildComponent } from './child/child.component';   // module unt button

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ChildComponent,
    // CountryComponent,
  ],
  imports: [
    BrowserModule,
    UserAuthModule,
    FormsModule,
    NgbModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
