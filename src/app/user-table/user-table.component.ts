import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.css']
})
export class UserTableComponent {
  @Input() users: any[] = [
    { name: 'Alice', email: 'alice@example.com', role: 'Admin' },
    { name: 'Bob', email: 'bob@example.com', role: 'User' },
    { name: 'Charlie', email: 'charlie@example.com', role: 'User' },
    { name: 'Diana', email: 'diana@example.com', role: 'Manager' }
  ];
  filterText: string = '';
  newUser = { name: '', email: '', role: '' };

  get filteredUsers() {
    const filter = this.filterText.toLowerCase();
    return this.users.filter(u =>
      u.name.toLowerCase().includes(filter) ||
      u.email.toLowerCase().includes(filter) ||
      u.role.toLowerCase().includes(filter)
    );
  }

  addUser() {
    if (this.newUser.name && this.newUser.email && this.newUser.role) {
      this.users.push({ ...this.newUser });
      this.newUser = { name: '', email: '', role: '' };
    }
  }
}
