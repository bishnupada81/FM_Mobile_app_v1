import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './component/landing-page/landing-page.component';
import { AmountComponent } from './component/amount/amount.component';
import { AccountComponent } from './component/account/account.component';
import { SetPinComponent } from './component/set-pin/set-pin.component';
import { PreConfirmationComponent } from './component/pre-confirmation/pre-confirmation.component';
import { SuccessComponent } from './component/success/success.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    AmountComponent,
    AccountComponent,
    SetPinComponent,
    PreConfirmationComponent,
    SuccessComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
