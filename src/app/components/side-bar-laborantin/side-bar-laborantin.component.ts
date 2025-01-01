import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-side-bar-laborantin',
  imports: [MatIconModule,CommonModule],
  templateUrl: './side-bar-laborantin.component.html',
  styleUrl: './side-bar-laborantin.component.css'
})
export class SideBarLaborantinComponent {
  menuItems = [
   
    { name: 'Examens', icon: 'assignment', path: 'laborantin' },
   
  ];
  constructor(private router: Router) {}
    
  isSidebarOpen :boolean=true;
 @Output()  isSidebarOpenR : EventEmitter<boolean> = new EventEmitter<boolean>();

  toggleSidebar()  : void {
    this.isSidebarOpen = !this.isSidebarOpen;
    this.isSidebarOpenR.emit(this.isSidebarOpen);
  }
  
  @Output() menuSelected = new EventEmitter<string>();
  
   @Input() laboname: string = ''
   @Input() activeItem: string = '';

  selectMenu(item: { name: string; path: string }) {
    this.activeItem = item.name;
    this.menuSelected.emit(item.name); 
    this.router.navigate([item.path]);
    
   // Émet l'élément du menu sélectionné
  }
}


