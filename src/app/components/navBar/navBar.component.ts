import { Component, HostListener } from '@angular/core';
import routesNames, { svgIcons } from 'src/app/Constant/routerNames';

@Component({
  selector: 'app-navBar',
  templateUrl: './navBar.component.html',
  styleUrls: ['./navBar.component.css']
})
export class NavBarComponent {
  activeSectionId: string | null = null;

  setActiveSection(sectionId: string | null): void {
    this.activeSectionId = sectionId;
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event): void {
    const sections = ['Inicio', 'Sobre mi', 'Proyectos', 'Contacto', 'footer'];
    const fromTop = window.scrollY;

    for (const sectionId of sections) {
      const section = document.getElementById(sectionId);
      if (section && section.offsetTop <= fromTop + 300 && section.offsetTop + section.offsetHeight > fromTop + 300) {
        this.setActiveSection(sectionId);
        break;
      }
    }
  }

  public tag: string = "#CAOO";
  public navOptions: string[] = [routesNames.home, routesNames.sobremi, routesNames.proyectos, routesNames.contacto];
  public navName: string = routesNames.home;
  public logo: string = svgIcons.profileImage;

  ChangeSection(value: string) {
    const section = document.getElementById(value);
    section!.scrollIntoView({ behavior: 'smooth' });
  }
}
