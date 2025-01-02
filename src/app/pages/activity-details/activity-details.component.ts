import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { SideBarInfermierComponent } from '../../components/side-bar-infermier/side-bar-infermier.component';

@Component({
  selector: 'app-activity-details',
  imports: [CommonModule,FormsModule,SideBarInfermierComponent],
  templateUrl: './activity-details.component.html',
  styleUrl: './activity-details.component.css'
})
export class ActivityDetailsComponent {

    /**************************************************SIDEBARRRRRR************************************* */
      
        modalDialog: any;
        isSidebarOpen :boolean=false;
        toggleSidebar(isExpanded:boolean) {
          this.isSidebarOpen = !isExpanded;
        }
      
      
        laboname: string = 'Said'
        selectedMenu = 'Activités';
       
      
        constructor(private router: Router) {} 
      
        activeItem: string = 'Activités';
        onMenuSelect(menu: string) {
          this.selectedMenu = menu;
          this.activeItem = menu;
          console.log(`Menu sélectionné : ${menu}`);
      
        
          switch (menu) {
            
            case 'Activités':
              this.router.navigate(['infermier']);
              break;
            
            default:
              console.warn('Menu inconnu');
          }
         }
         /**************************************************Details******************************** */

         activity = {
          examenID: 1,
          consultation: 'Consultation générale',
          patient: 'Mohamed Ali',
          patient_id: 'P12345',
          type: 'Général',
          etat: 'en cours', 
          priorite: 'Haute',
          doctor_details: 'Dr. Amine Boukhalfa',
          createdAt: '2025-01-01T09:00:00',
          nss: '1234567890',
          observation: '', 
        };
      
        showPopup: boolean = false;
        observationText: string = ''; 
      
        // Ouvrir le pop-up
        openPopup() {
          this.showPopup = true;
        }
      
        // Fermer le pop-up
        closePopup() {
          this.showPopup = false;
        }
      
        // Sauvegarder l'observation
        saveObservation() {
          this.activity.observation = this.observationText;
          this.closePopup();
        }

}
