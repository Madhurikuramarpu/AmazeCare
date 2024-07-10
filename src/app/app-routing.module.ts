// import { NgModule } from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';

// const routes: Routes = [];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
// export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './component/admin-dashboard/admin-dashboard.component';
import { PatientDashboardComponent } from './component/patient-dashboard/patient-dashboard.component';
import { PatientLoginComponent } from './component/login/patient-login.component';
import { PatientRegistrationComponent } from './component/patient-registration/patient-registration.component';
import { DoctorDashboardComponent } from './component/doctor-dashboard/doctor-dashboard.component';
import { AppointmentDetailsComponent } from './component/appointment-details/appointment-details.component';

const routes: Routes = [
  { path: 'register', component: PatientRegistrationComponent },
  { path: 'login', component: PatientLoginComponent },
  { path: 'dashboard', component: PatientDashboardComponent },
  { path: 'admin', component: AdminDashboardComponent },
  { path: 'doctor', component: DoctorDashboardComponent },
  { path: 'new-appointment', component: AppointmentDetailsComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'admin-dashboard', component: AdminDashboardComponent },
  { path: '', redirectTo: '/patient-dashboard', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

