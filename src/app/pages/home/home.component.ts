import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../shared/header/header.component';
import { FooterComponent } from '../../shared/footer/footer.component';
import { skillsData } from '../../data/skills.data';
import { socialLinks } from '../../config/social-links.config';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HeaderComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  skills = skillsData;
  socialLinks = socialLinks;

  openExternalLink(url: string) {
    window.open(url, '_blank');
  }
}
