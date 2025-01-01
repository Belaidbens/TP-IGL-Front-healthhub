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
import { PatientComponent } from './pages/patient/patient.component';
import { RadiologueComponent } from './pages/radiologue/radiologue.component';
import { ExamensComponent } from './pages/examens/examens.component';
import { ExamenDetailsComponent } from './pages/examen-details/examen-details.component';
import { LaborantinComponent } from './pages/laborantin/laborantin.component';

import { ExamslabDetailsComponent } from './pages/examslab-details/examslab-details.component';

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
  {
    path : "patient" , component : PatientComponent , 
  },
  {
    path : "radiologue" , component : RadiologueComponent , 
  },
  {
    path : "radiologue/examens" , component : ExamensComponent , 
  },
  {
     path: 'radiologue/examens/:id/examensdetails', component: ExamenDetailsComponent ,
  },
  {
    path: 'laborantin', component: LaborantinComponent ,
 },

{
  path: 'laborantin/:id/examslabdetails', component: ExamslabDetailsComponent ,
},
 
  
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
