import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../shared/header/header.component';
import { FooterComponent } from '../../shared/footer/footer.component';
import { TimelineModule } from 'primeng/timeline';
import { workExperienceData, educationData, technicalSkillsData } from '../../data/experience.data';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, HeaderComponent, FooterComponent, TimelineModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
  education = educationData;
  workExperience = workExperienceData;
  technicalSkills = technicalSkillsData;
}