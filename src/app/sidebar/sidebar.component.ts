import { Component, EventEmitter, Input, Output } from '@angular/core';

export type MenuType = 'dashboard' | 'users' | 'settings';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  @Input() activeMenu: MenuType = 'dashboard';
  @Output() menuChange = new EventEmitter<MenuType>();
  @Output() logoutEvent = new EventEmitter<void>();

  selectMenu(menu: MenuType) {
    this.menuChange.emit(menu);
  }

  logout() {
    this.logoutEvent.emit();
  }
}
