// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';

// import { AppRoutingModule } from './app-routing.module';
// import { AppComponent } from './app.component';
// import { PatientDashboardComponent } from './component/patient-dashboard/patient-dashboard.component';
// import { PatientLoginComponent } from './component/patient-login/patient-login.component';
// import { PatientRegistrationComponent } from './component/patient-registration/patient-registration.component';
// import { AdminDashboardComponent } from './component/admin-dashboard/admin-dashboard.component';
// import { DoctorDashboardComponent } from './component/doctor-dashboard/doctor-dashboard.component';

// @NgModule({
//   declarations: [
//     AppComponent,
//     PatientDashboardComponent,
//     PatientLoginComponent,
//     PatientRegistrationComponent,
//     AdminDashboardComponent,
//     DoctorDashboardComponent
//   ],
//   imports: [
//     BrowserModule,
//     AppRoutingModule
//   ],
//   providers: [],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }


import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { AdminDashboardComponent } from './component/admin-dashboard/admin-dashboard.component';
import { PatientDashboardComponent } from './component/patient-dashboard/patient-dashboard.component';
import { PatientLoginComponent } from './component/login/patient-login.component';
import { PatientRegistrationComponent } from './component/patient-registration/patient-registration.component';
import { DoctorDashboardComponent } from './component/doctor-dashboard/doctor-dashboard.component';
import { AppointmentDetailsComponent } from './component/appointment-details/appointment-details.component';
// import { AppointmentDetailsComponent } from './appointment-details/appointment-details.component';
// import { PatientdetailsService } from './patientdetails.service';


@NgModule({
  declarations: [
    AppComponent,
    PatientRegistrationComponent,
    PatientLoginComponent,
    PatientDashboardComponent,
    AdminDashboardComponent,
    DoctorDashboardComponent,
    AppointmentDetailsComponent,
    // AppointmentDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

