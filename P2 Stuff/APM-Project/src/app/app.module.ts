import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PaymentTenComponent } from './payment-ten/payment-ten.component';
import { PaymentManComponent } from './payment-man/payment-man.component';
import { MaintenanceTenComponent } from './maintenance-ten/maintenance-ten.component';
import { MaintenanceManComponent } from './maintenance-man/maintenance-man.component';
import { MainTenComponent } from './main-ten/main-ten.component';
import { MainManComponent } from './main-man/main-man.component';
import { LeaseTenComponent } from './lease-ten/lease-ten.component';
import { LeaseManComponent } from './lease-man/lease-man.component';

@NgModule({
  declarations: [
    AppComponent,
    PaymentTenComponent,
    PaymentManComponent,
    MaintenanceTenComponent,
    MaintenanceManComponent,
    MainTenComponent,
    MainManComponent,
    LeaseTenComponent,
    LeaseManComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
