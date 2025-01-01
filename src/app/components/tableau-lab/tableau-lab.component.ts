import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'
import { ModaldialogComponent } from "../modaldialog/modaldialog.component";


export interface HealthMetric {
  id: number;
  metric_type: string;
  value: string;
  unit: string;
  measured_at: string;
}

export interface Examen {
  examenID: number;
  consultation: string;
  patient: string;
  patient_id: string;
  type: string;
  etat: string;
  priorite: string;
  doctor_details: string;
  createdAt: string;
  health_metrics: HealthMetric[];
  nss: string;
}

@Component({
  selector: 'app-tableau-lab',
  imports: [CommonModule, FormsModule, ModaldialogComponent],
  templateUrl: './tableau-lab.component.html',
  styleUrl: './tableau-lab.component.css'
})
export class TableauLabComponent {
  @Input() tableau: Examen[] = [];
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
      paginatedAppointments(): Examen[] {
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
