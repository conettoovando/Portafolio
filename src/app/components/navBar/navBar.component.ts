import { Component } from '@angular/core';
import routesNames from 'src/app/Constant/routerNames';

@Component({
  selector: 'app-navBar',
  templateUrl: './navBar.component.html',
  styleUrls: ['./navBar.component.css']
})
export class NavBarComponent {
  public tag: string = "#CAOO";
  public navOptions: string[] = [routesNames.home, routesNames.sobremi, routesNames.proyectos, routesNames.contacto];
  public navName: string = routesNames.home;

  ChangeSection(value: string) {
    const section = document.getElementById(value);
    section!.scrollIntoView({ behavior: 'smooth' });
  }
}
