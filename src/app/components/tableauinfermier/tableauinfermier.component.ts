import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

export interface Activity {
  examenID: number;
  consultation: string;
  patient: string;
  patient_id: string;
  type: string;
  etat: string;
  priorite: string;
  doctor_details: string;
  createdAt: string;
 
  nss: string;
}

@Component({
  selector: 'app-tableauinfermier',
  imports: [CommonModule,FormsModule],
  templateUrl: './tableauinfermier.component.html',
  styleUrl: './tableauinfermier.component.css'
})
export class TableauinfermierComponent {

  @Input() tableau: Activity[] = [];
       @Output() detailsRequested = new EventEmitter<number>()
       onDetailsClick(id: number) {
        this.detailsRequested.emit(id); // Émet l'ID de l'examen
      }
      
        
        currentPage: number = 1;
        itemsPerPage: number = 15;
      
        // Retourne le nombre total de pages en fonction du nombre de rendez-vous
        totalPages(): number {
          return Math.ceil(this.tableau.length / this.itemsPerPage);
        }
      
        // Retourne les rendez-vous de la page actuelle
        paginatedAppointments(): Activity[] {
          const startIndex = (this.currentPage - 1) * this.itemsPerPage;
          const endIndex = startIndex + this.itemsPerPage;
          return this.tableau.slice(startIndex, endIndex);
        }
      
        // Allume la pagination vers la page suivante
        nextPage(): void {
          if (this.currentPage < this.totalPages()) {
            this.currentPage++;
          }
        }
      
        // Allume la pagination vers la page précédente
        previousPage(): void {
          if (this.currentPage > 1) {
            this.currentPage--;
          }
        }
      

}
