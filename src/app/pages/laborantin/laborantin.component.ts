import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SideBarLaborantinComponent } from '../../components/side-bar-laborantin/side-bar-laborantin.component';
import { FormsModule } from '@angular/forms';
import { CommonModule} from '@angular/common';
import { Examen,TableauLabComponent } from '../../components/tableau-lab/tableau-lab.component';
@Component({
  selector: 'app-laborantin',
  imports: [CommonModule,SideBarLaborantinComponent,FormsModule,TableauLabComponent],
  templateUrl: './laborantin.component.html',
  styleUrl: './laborantin.component.css'
})
export class LaborantinComponent {

  /**************************************************SIDEBARRRRRR************************************* */
  
  modalDialog: any;
 
 

    isSidebarOpen :boolean=false;
    
  
    toggleSidebar(isExpanded:boolean) {
      this.isSidebarOpen = !isExpanded;
    }
  
  
    laboname: string = 'Said'
    selectedMenu = 'Examens'; // État pour suivre le menu actif
   
  
    constructor(private router: Router) {} 
  
    activeItem: string = 'Examens';
    onMenuSelect(menu: string) {
      this.selectedMenu = menu;
      this.activeItem = menu;
      console.log(`Menu sélectionné : ${menu}`);
  
      // Navigation logique en fonction du menu sélectionné
      
      switch (menu) {
        
        case 'Examens':
          this.router.navigate(['laborantin']);
          break;
        
        default:
          console.warn('Menu inconnu');
      }
     }


      /**********************************************Tableau exams*************************** */
     
             tableau: Examen[] = [
              {
                examenID: 1,
                consultation: "8de4f114-8563-4f62-b137-4f66fff6bc88",
                patient: "Patient1 Doe1",
                patient_id: "cbd3bb25-13fb-4c0a-b33e-223597811b61",
                type: "Laboratoire",
                etat: "Terminé",
                priorite: "Normal",
                doctor_details: "string",
                createdAt: "2025-01-01T10:58:59.394643Z",
                health_metrics: [
                  {
                    id: 44,
                    metric_type: "pression_arterielle",
                    value: "30.00",
                    unit: "string",
                    measured_at: "2025-01-01T11:43:31.894866Z"
                  }
                ],
                nss: "1234567890"
              },
              {
                examenID: 2,
                consultation: "b4201e11-235d-4b74-b963-72b16d7ccfae",
                patient: "Jane Doe",
                patient_id: "e1bc742f-34f4-44a0-b9ac-9dce91fb8d42",
                type: "Laboratoire",
                etat: "En attente",
                priorite: "Urgent",
                doctor_details: "Dr. John Smith",
                createdAt: "2025-01-02T14:15:20.123456Z",
                health_metrics: [
                  {
                    id: 45,
                    metric_type: "température_corporelle",
                    value: "37.5",
                    unit: "°C",
                    measured_at: "2025-01-02T14:20:20.123456Z"
                  },
                  {
                    id: 46,
                    metric_type: "fréquence_cardiaque",
                    value: "85",
                    unit: "bpm",
                    measured_at: "2025-01-02T14:21:15.123456Z"
                  }
                ],
                nss: "9876543210"
              },
              {
                examenID: 3,
                consultation: "c3949575-d3ae-4e4d-98a7-5d4798c9eec4",
                patient: "Samuel Green",
                patient_id: "4e1bba99-54e2-4c82-bd7a-0c9d69abf7bc",
                type: "Suivi",
                etat: "En cours",
                priorite: "Normal",
                doctor_details: "Dr. Emily Roberts",
                createdAt: "2025-01-03T09:30:45.678901Z",
                health_metrics: [
                  {
                    id: 47,
                    metric_type: "glycémie",
                    value: "5.8",
                    unit: "mmol/L",
                    measured_at: "2025-01-03T09:35:45.678901Z"
                  }
                ],
                nss: "1234987650"
              },
              {
                examenID: 4,
                consultation: "45b8b927-0e8a-45e6-8203-7b6fa9a3ef7e",
                patient: "Oliver Black",
                patient_id: "bb229c6c-d25f-4681-8a2d-8c29f29a2277",
                type: "Examen de contrôle",
                etat: "Annulé",
                priorite: "trés urgent",
                doctor_details: "Dr. Michael Brown",
                createdAt: "2025-01-05T08:00:10.987654Z",
                health_metrics: [
                  {
                    id: 48,
                    metric_type: "cholestérol",
                    value: "4.2",
                    unit: "mmol/L",
                    measured_at: "2025-01-05T08:05:00.987654Z"
                  },
                  {
                    id: 49,
                    metric_type: "saturation_oxygène",
                    value: "98",
                    unit: "%",
                    measured_at: "2025-01-05T08:06:10.987654Z"
                  }
                ],
                nss: "4567890123"
              }
               ]
     /***************************Recherche********************** */

            // Liste filtrée pour affichage
  filteredExams = [...this.tableau];

  // Méthode de recherche
  onSearch(event: Event) {
    const searchTerm = (event.target as HTMLInputElement).value.trim(); // Supprime les espaces inutiles
    this.filteredExams = this.tableau.filter((exam) =>
      exam.patient.toLowerCase().includes(searchTerm.toLowerCase()) ||
      exam.createdAt.includes(searchTerm)
    );
  }
  resetSearch() {
    this.filteredExams = [...this.tableau];
  }
  
  /*********************************************Voir Details************************ */
  goToDetails(examId: number) {
    this.router.navigate([`laborantin/${examId}/examslabdetails`]);
  }

}
