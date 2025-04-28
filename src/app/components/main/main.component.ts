import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-main',
  imports: [RouterOutlet, CommonModule],
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent {
  @Input() isLeftSidebarCollapsed: boolean = false;  // default value
  @Input() screenWidth: number = 1024;  // default value

  get sizeClass(): string {
    const isLeftSidebarCollapsed = this.isLeftSidebarCollapsed;
    if (isLeftSidebarCollapsed) {
      return '';
    }
    return this.screenWidth > 768 ? 'body-trimmed' : 'body-md-screen';
  }
}
