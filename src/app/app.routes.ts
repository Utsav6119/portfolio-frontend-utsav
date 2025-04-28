import { Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { MainComponent } from './components/main/main.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ServiceComponent } from './service/service.component';
import { ContactComponent } from './components/contact/contact.component';
import { ResumeComponent } from './components/resume/resume.component';

export const routes: Routes = [
    { path: '', component: HomeComponent }, // Default route for '/'
    { path: 'products', component: ProductsComponent },
    { path: 'about', component: AboutComponent },
    { path: 'service', component: ServiceComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'resume', component: ResumeComponent },
    { path: '**', redirectTo: '', pathMatch: 'full' } 
];
