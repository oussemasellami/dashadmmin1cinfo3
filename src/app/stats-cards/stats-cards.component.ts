import { Component, Input } from '@angular/core';
import { ChartConfiguration, ChartType } from 'chart.js';

@Component({
  selector: 'app-stats-cards',
  templateUrl: './stats-cards.component.html',
  styleUrls: ['./stats-cards.component.css']
})
export class StatsCardsComponent {
  @Input() users: number = 0;
  @Input() sales: number = 0;
  @Input() performance: number = 0;

  public barChartType: ChartType = 'bar';
  public barChartData: ChartConfiguration<'bar'>['data'] = {
    labels: ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Juin'],
    datasets: [
      { data: [12, 19, 3, 5, 2, 3], label: 'Ventes', backgroundColor: '#0d6efd' },
      { data: [8, 11, 7, 6, 4, 5], label: 'Utilisateurs', backgroundColor: '#198754' }
    ]
  };

  public barChartOptions: ChartConfiguration<'bar'>['options'] = {
    responsive: true,
    plugins: {
      legend: { display: true },
      title: { display: false }
    }
  };

  public pieChartData: ChartConfiguration<'pie'>['data'] = {
    labels: ['Utilisateurs', 'Ventes', 'Performance'],
    datasets: [
      {
        //data: [this.users, this.sales, this.performance],
        data: [120, 300, 80], // Fake data for demonstration
        backgroundColor: ['#0d6efd', '#198754', '#ffc107'],
      }
    ]
  };
  public pieChartOptions: ChartConfiguration<'pie'>['options'] = {
    responsive: true,
    plugins: {
      legend: { display: true, position: 'bottom' },
      title: { display: true, text: 'Répartition' }
    }
  };
}
