import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-stats-card',
  imports: [],
  templateUrl: './stats-card.component.html',
  styleUrl: './stats-card.component.css'
})
export class StatsCardComponent {
  @Input() title: string = ''; 
  @Input() number: number = 0;
  @Input() image: string = ''; 
}