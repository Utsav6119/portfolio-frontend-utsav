import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';  // <-- Import this
import { IonicModule } from '@ionic/angular';    // <-- Already imported

@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [CommonModule, IonicModule],   // <-- Add CommonModule here
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent {
  
  education = [
    {
      school: "Technocrats Institute Of Technology",
      period: "2018 — 2022",
      degree: "Bachelor of Technology - Computer Science",
      grade: "8.88 CGPA"
    },
    {
      school: "DAV Public School",
      period: "2016 — 2018",
      degree: "High Secondary School, Mathematics",
      grade: "A+"
    }
  ];

  experience = [
    {
      title: "Software Development Engineer",
      company: "Virtusa Consulting Services, Pune, MH, IN",
      period: "June 2022 - Presnt",
      description: "Spring Boot Java Backend Developer – British Telecommunications Experienced backend developer specializing in building scalable microservices and REST APIs using Java and Spring Boot. Skilled in cloud deployments (AWS), CI/CD pipelines (Jenkins, Docker), database integration, and system security. Delivering high-quality, reliable backend solutions for critical telecommunications systems at BT.",
      skills: "Java · Spring Boot"
    },
    {
      title: "Software Developer Intern",
      company: "Virtusa Consulting Services, Chennai",
      period: "Jan 2022 - May 2022",
      skills: "Java · Spring Boot/Angular"
    }
  ];

  skills = [
    { name: "Angular", percentage: 90 },
    { name: "Java & Spring boot", percentage: 80 },
    { name: "MYSQL", percentage: 75 },
    { name: "HTML/CSS", percentage: 90 },
  ];
}
