import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-stats-cards',
  templateUrl: './stats-cards.component.html',
  styleUrls: ['./stats-cards.component.css']
})
export class StatsCardsComponent {
  @Input() users: number = 0;
  @Input() sales: number = 0;
  @Input() performance: number = 0;

  barChartLabels: string[] = ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Juin'];
  barChartData = [
    { data: [12, 19, 3, 5, 2, 3], label: 'Ventes' },
    { data: [8, 11, 7, 6, 4, 5], label: 'Utilisateurs' }
  ];

}
