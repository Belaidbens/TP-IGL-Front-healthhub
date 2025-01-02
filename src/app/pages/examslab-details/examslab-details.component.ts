import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { SideBarLaborantinComponent } from '../../components/side-bar-laborantin/side-bar-laborantin.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Platform } from '@angular/cdk/platform';
import { Chart } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';

Chart.register(ChartDataLabels);
@Component({
  selector: 'app-examslab-details',
  imports: [SideBarLaborantinComponent,CommonModule,FormsModule],
  templateUrl: './examslab-details.component.html',
  styleUrl: './examslab-details.component.css'
})
export class ExamslabDetailsComponent {
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
       /**************************************************Details*********************************** */

       exam =  {
        examenID: "1c8fae37-ca82-4ec7-a079-d6b00d325836",
        consultation: "8de4f114-8563-4f62-b137-4f66fff6bc88",
        patient: "Patient1 Doe1",
        patient_id: "cbd3bb25-13fb-4c0a-b33e-223597811b61",
        type: "Laboratoire",
        etat: "en_cours",
        priorite: "Normal",
        doctor_details: "hiejbnokfp,l^vqjiofu h",
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
        "nss": "1234567890"
      };
      results= [
        {
          resLaboID: '4942ca63-6a06-46e0-8d2d-168979c485e9',
          dateAnalyse: '2025-01-01T12:01:03.745604Z',
          status: 'termine',
          health_metrics: [
            { metric_type: 'pression_arterielle', value: '20.00', unit: 'mmHg' },
            { metric_type: 'niveaux_cholesterol', value: '150', unit: 'mg/dL' }
          ]
        },
        {
          resLaboID: '47b08019-ca0f-4904-9ccb-5ae39e2dc960',
          dateAnalyse: '2025-01-01T11:43:31.891866Z',
          status: 'en_attente', // Statut en attente
          health_metrics: [
            { metric_type: 'pression_arterielle', value: '30.00', unit: 'mmHg' }
          ]
        }
      ]
      
      showPopup = false;
      currentResult: any = {};
      //ce que je vais ajouter 
      newMetrics = [
        { metric_type: 'pression_arterielle', value: '', unit: '' },
        { metric_type: 'glycemie', value: '', unit: '' },
        { metric_type: 'niveaux_cholesterol', value: '', unit: '' }
      ];
    
      // Ouvrir le pop-up pour modifier les résultats
      openPopup(result: any) {
        this.currentResult = result;
        this.showPopup = true;
      }
    
      // Fermer le pop-up
      closePopup() {
        this.showPopup = false;
      }
    
      // Sauvegarder les modifications apportées dans le formulaire
      saveMetrics() {
        // Ajoutez les nouvelles métriques à l'examen en cours
        for (const metric of this.newMetrics) {
          this.currentResult.health_metrics.push({ ...metric });
        }
        this.currentResult.status = 'termine';
        
        // Réinitialiser les valeurs des nouvelles métriques
        this.newMetrics.forEach(metric => {
          metric.value = '';
          metric.unit = '';
        });
    
        console.log('Metrics ajoutées', this.currentResult);
        this.closePopup();
      }

/******************************************GRAPHE DES METRIQUES********************** */


@ViewChild('pressureChart') pressureChart!: ElementRef<HTMLCanvasElement>;
@ViewChild('cholesterolChart') cholesterolChart!: ElementRef<HTMLCanvasElement>;
@ViewChild('glucoseChart') glucoseChart!: ElementRef<HTMLCanvasElement>;


private pressureChartInstance: any;
private cholesterolChartInstance: any;
private glucoseChartInstance: any;

resultas = [
  {
    resLaboID: "4942ca63-6a06-46e0-8d2d-168979c485e9",
    examen_type: "Laboratoire",
    dateAnalyse: "2025-01-01T12:01:03.745604Z",
    status: "termine",
    health_metrics: [
      { metric_type: "pression_arterielle", value: "60.00", measured_at: "2025-01-01T12:01:03.749111Z" },
      { metric_type: "niveaux_cholesterol", value: "20.00", measured_at: "2025-01-01T12:01:03.751336Z" },
      { metric_type: "glucose", value: "90.00", measured_at: "2025-01-01T12:01:03.753111Z" }
    ]
  },
  {
    resLaboID: "4942ca63-6a06-46e0-8d2d-168979c485e9",
    examen_type: "Laboratoire",
    dateAnalyse: "2025-02-01T12:01:03.745604Z",
    status: "termine",
    health_metrics: [
      { metric_type: "pression_arterielle", value: "25.00", measured_at: "2025-01-01T12:01:03.749111Z" },
      { metric_type: "niveaux_cholesterol", value: "40.00", measured_at: "2025-01-01T12:01:03.751336Z" },
      { metric_type: "glucose", value: "60.00", measured_at: "2025-01-01T12:01:03.753111Z" }
    ]
  },
  {
    resLaboID: "4942ca63-6a06-46e0-8d2d-168979c485e9",
    examen_type: "Laboratoire",
    dateAnalyse: "2025-11-01T12:01:03.745604Z",
    status: "termine",
    health_metrics: [
      { metric_type: "pression_arterielle", value: "10.00", measured_at: "2025-01-01T12:01:03.749111Z" },
      { metric_type: "niveaux_cholesterol", value: "60.00", measured_at: "2025-01-01T12:01:03.751336Z" },
      { metric_type: "glucose", value: "10.00", measured_at: "2025-01-01T12:01:03.753111Z" }
    ]
  },
  {
    resLaboID: "4942ca63-6a06-46e0-8d2d-168979c485e9",
    examen_type: "Laboratoire",
    dateAnalyse: "2025-12-01T12:01:03.745604Z",
    status: "termine",
    health_metrics: [
      { metric_type: "pression_arterielle", value: "20.00", measured_at: "2025-01-01T12:01:03.749111Z" },
      { metric_type: "niveaux_cholesterol", value: "20.00", measured_at: "2025-01-01T12:01:03.751336Z" },
      { metric_type: "glucose", value: "0.2", measured_at: "2025-01-01T12:01:03.753111Z" }
    ]
  },
];


//constructor(private platform: Platform) {}

ngAfterViewInit() {
  const pressureCanvas = this.pressureChart.nativeElement;
  const cholesterolCanvas = this.cholesterolChart.nativeElement;
  const glucoseCanvas = this.glucoseChart.nativeElement;

  if (pressureCanvas && cholesterolCanvas && glucoseCanvas) {
    this.initChart(pressureCanvas, 'Pression artérielle (mmHg)', 'pression_arterielle');
    this.initChart(cholesterolCanvas, 'Niveaux de Cholestérol (mg/dL)', 'niveaux_cholesterol');
    this.initChart(glucoseCanvas, 'Niveaux de Glucose (mg/dL)', 'glucose');
  }
}

initChart(ctx: HTMLCanvasElement, label: string, metricType: string) {
  // Extraire les valeurs et les dates en fonction du type de métrique
  const filteredResults = this.resultas.filter(result =>
    result.health_metrics.some(metric => metric.metric_type === metricType)
  );

  const labels = filteredResults.map(result => new Date(result.dateAnalyse).toLocaleString());
  const data = filteredResults.map(result =>
    result.health_metrics.find(metric => metric.metric_type === metricType)?.value || 0
  );

  // Initialisation du graphique
  const chart = new Chart(ctx, {
    type: 'bar', 
    data: {
      labels: labels, 
      datasets: [{
        label: label,
        data: data,
        backgroundColor: 'rgba(75, 192, 192, 0.2)', 
        borderColor: 'rgba(75, 192, 192, 1)', 
        borderWidth: 1,
      }]
    },
    options: {
      responsive: true,  // Permet de rendre le graphique responsive
      maintainAspectRatio: false, // Permet d'ajuster l'aspect ratio
      plugins: {
        datalabels: {
          color: '#000',
          font: {
            weight: 'bold',
            size: 12
          },
          formatter: (value: any) => value, 
          anchor: 'end',
          align: 'top',
        }
      },
      scales: {
        x: {
          type: 'category',
          title: {
            display: true,
            text: 'Date'
          },
          ticks: {
            autoSkip: true, // Permet de sauter certaines étiquettes pour éviter le chevauchement
            maxTicksLimit: 10, // Limite le nombre d'étiquettes affichées
            minRotation: 45,  // Rotation minimale des étiquettes
            maxRotation: 90,  // Rotation maximale des étiquettes
            padding: 10,  // Espacement des étiquettes par rapport à l'axe
          }
        },
        y: {
          title: {
            display: true,
            text: label
          },
          beginAtZero: true, 
        }
      }
    }
  });

  // Stocker l'instance du graphique
  if (metricType === 'pression_arterielle') this.pressureChartInstance = chart;
  if (metricType === 'niveaux_cholesterol') this.cholesterolChartInstance = chart;
  if (metricType === 'glucose') this.glucoseChartInstance = chart;
}



// Méthode pour mettre à jour dynamiquement les graphiques
updateChart(chartInstance: any, newData: number[], newLabels: string[]) {
  chartInstance.data.labels = newLabels;
  chartInstance.data.datasets[0].data = newData;
  chartInstance.update();
}
}










    


