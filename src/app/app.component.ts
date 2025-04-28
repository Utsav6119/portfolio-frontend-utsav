import { Component, HostListener, OnInit, Inject, PLATFORM_ID, signal } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';  // Import isPlatformBrowser
import { LeftSideBarComponent } from './components/left-side-bar/left-side-bar.component';
import { MainComponent } from './components/main/main.component';
import { NgxTypedJsModule } from 'ngx-typed-js';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [LeftSideBarComponent, MainComponent],
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  isLeftSidebarCollapsed = signal<boolean>(false);
  screenWidth = signal<number>(0);

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.screenWidth.set(window.innerWidth);
      this.isLeftSidebarCollapsed.set(this.screenWidth() < 768);
    }
  }

  // Host listener for window resize
  @HostListener('window:resize', ['$event'])
  onResize(event: any): void {
    this.screenWidth.set(event.target.innerWidth);
    this.isLeftSidebarCollapsed.set(this.screenWidth() < 768);
  }

  changeIsLeftSidebarCollapsed(isLeftSidebarCollapsed: boolean): void {
    this.isLeftSidebarCollapsed.set(isLeftSidebarCollapsed);
  }
}
