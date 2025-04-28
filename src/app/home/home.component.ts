import { Component, ElementRef, ViewChild, AfterViewInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common'; // <- important import
import Typed from 'typed.js';
import { trigger, transition, style, animate, keyframes } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { AboutComponent } from '../components/about/about.component';

@Component({
  imports: [
    CommonModule,
    AboutComponent
  ],
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('typing', [
      transition(':enter', [
        animate('3s', keyframes([
          style({ opacity: 0, width: '0ch', offset: 0 }),
          style({ opacity: 1, width: '1ch', offset: 0.1 }),
          style({ opacity: 1, width: '2ch', offset: 0.2 }),
          style({ opacity: 1, width: '3ch', offset: 0.3 }),
          style({ opacity: 1, width: '4ch', offset: 0.4 }),
          style({ opacity: 1, width: '5ch', offset: 0.5 }),
          style({ opacity: 1, width: '6ch', offset: 0.6 }),
          style({ opacity: 1, width: '7ch', offset: 0.7 }),
          style({ opacity: 1, width: '8ch', offset: 0.8 }),
          style({ opacity: 1, width: '9ch', offset: 0.9 }),
          style({ opacity: 1, width: '10ch', offset: 1 }),
        ]))
      ])
    ])
  ]
})
export class HomeComponent implements AfterViewInit {
  @ViewChild('typedElement') typedElement!: ElementRef;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {} // <-- inject PLATFORM_ID

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {   // <-- only run in browser
      const options = {
        strings: ['Software Engineer', 'Freelancer', 'Backend Developer'],
        typeSpeed: 50,
        backSpeed: 25,
        loop: true,
      };

      new Typed(this.typedElement.nativeElement, options);
    }
  }
}
