import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { trigger, transition, style, animate } from '@angular/animations';
import { MenuType } from './sidebar/sidebar.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate('600ms cubic-bezier(.4,0,.2,1)', style({ opacity: 1, transform: 'none' }))
      ])
    ])
  ]
})
export class AppComponent {
  title = 'admindash';
  users = [
    { name: 'Alice', email: 'alice@example.com', role: 'Admin' },
    { name: 'Bob', email: 'bob@example.com', role: 'User' },
    { name: 'Charlie', email: 'charlie@example.com', role: 'User' },
    { name: 'Diana', email: 'diana@example.com', role: 'Manager' }
  ];
  activeMenu: MenuType = 'dashboard';

  constructor(private router: Router) {}

  isDashboardRoute(): boolean {
    return ['/dashboard', '/users', '/settings'].includes(this.router.url);
  }

  getMenuTitle(): string {
    switch (this.activeMenu) {
      case 'dashboard': return 'Dashboard';
      case 'users': return 'Utilisateurs';
      case 'settings': return 'Paramètres';
      default: return '';
    }
  }

  onMenuChange(menu: MenuType) {
    this.activeMenu = menu;
    this.router.navigate(['/' + menu]);
  }

  onLogout() {
    this.router.navigate(['/login']);
  }
}
