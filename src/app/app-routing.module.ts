import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './component/landing-page/landing-page.component';
import { AmountComponent } from './component/amount/amount.component';
import { AccountComponent } from './component/account/account.component';
import { SetPinComponent } from './component/set-pin/set-pin.component';
import { PreConfirmationComponent } from './component/pre-confirmation/pre-confirmation.component';
import { SuccessComponent } from './component/success/success.component';

const routes: Routes = [
  {path:'',                 component:LandingPageComponent},
  {path:'amount',           component:AmountComponent},
  {path:'account',          component:AccountComponent},
  {path:'set-pin',          component:SetPinComponent},
  {path:'pre-confirmation', component:PreConfirmationComponent},
  {path:'success',          component:SuccessComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
