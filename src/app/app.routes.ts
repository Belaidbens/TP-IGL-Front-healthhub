import { NgModule } from '@angular/core';
import { Routes , RouterModule } from '@angular/router';
import { AddHospitalComponent } from './pages/add-hospital/add-hospital.component';
import { HospitalComponent } from './pages/hospital/hospital.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { StatsComponent } from './pages/stats/stats.component';
import { LoginComponent } from './pages/login/login.component';
import { AddUserComponent } from './pages/add-user/add-user.component'; 
import { MedecinComponent } from './pages/medecin/medecin.component';
import { RendezvousComponent } from './pages/rendezvous/rendezvous.component';

import { PatientsComponent } from './pages/patients/patients.component';
import { OrdonnancesComponent } from './pages/ordonnances/ordonnances.component';
import { RapportsComponent } from './pages/rapports/rapports.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
     component : LoginComponent
  },
  {
    path: 'dashboard', component:  DashboardComponent,
    children : [
      {

        path: 'hospital', component: HospitalComponent
      },
      {
        path: 'addHospital', component: AddHospitalComponent
      },
      {
        path : 'stats' , component: StatsComponent
      }

    ]
  },
  {

    path : 'addPerson' , component : AddUserComponent
  },



  {
    path : 'medecin' , component : MedecinComponent ,
  },
    
  {
        path: 'medecin/rendezvous', component: RendezvousComponent
  },
     
     
   
{
    path : 'addPerson' , component : AddUserComponent ,
  },
  {
    path : "medecin/:id/patients" , component : PatientsComponent , 
  },
  {
    path: 'medecin/ordonnances', component: OrdonnancesComponent
  },
  {
    path: 'medecin/rapports', component: RapportsComponent
  },
  
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
