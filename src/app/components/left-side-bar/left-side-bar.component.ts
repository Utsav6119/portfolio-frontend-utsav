import { Component, Input, Output, EventEmitter } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-left-side-bar',
  imports: [RouterModule, CommonModule],
  templateUrl: './left-side-bar.component.html',
  styleUrls: ['./left-side-bar.component.scss']
})
export class LeftSideBarComponent {

  // Using Input and Output decorators
  @Input() isLeftSidebarCollapsed: boolean = false;
  @Output() changeIsLeftSidebarCollapsed = new EventEmitter<boolean>();

  items = [
    { routeLink: 'dashboard', icon: 'fas fa-home', label: 'Home' },
    { routeLink: 'about', icon: 'fa-solid fa-user', label: 'About' },
    { routeLink: 'service', icon: 'fa-solid fa-bars-progress', label: 'Service' },
    { routeLink: 'contact', icon: 'fa-solid fa-envelope', label: 'Contact' },
    { routeLink: 'resume', icon: 'fa-solid fa-file', label: 'Resume' }
  ];

  toggleCollapse(): void {
    // Emit the toggle state (collapsed or expanded)
    this.changeIsLeftSidebarCollapsed.emit(!this.isLeftSidebarCollapsed);
  }

  closeSidenav(): void {
    // Emit a true value to collapse the sidebar
    this.changeIsLeftSidebarCollapsed.emit(true);
  }
}
