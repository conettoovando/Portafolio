import { Component } from '@angular/core';
import { svgIcons } from 'src/app/Constant/routerNames';

@Component({
  selector: 'app-sobremi',
  templateUrl: './sobremi.component.html',
  styleUrls: ['./sobremi.component.css']
})
export class SobremiComponent {
  public sobremi_info: string = `
    👋 ¡Bienvenid@s! Soy Cristian Onetto Ovando, ingeniero en computación e informatica recien titulado de la universidad Andres Bello.
    Me he desempeñado en el area de desarrollo de software, principalmente en el desarrollo backend de aplicaciones web sin embargo tambien he trabajado en el desarrollo frontend,
    mis intereses de trabajar en distintas areas me han llevado a aprender distintos frameworks y lenguajes de programación, entre ellos se encuentran:
  `;

  public knowledge = [
    {
      id: 1,
      name: 'Python',
      icon: svgIcons.python,
    },
    {
      id: 2,
      name: 'php',
      icon: svgIcons.php,
    },
    {
      id: 3,
      name: 'MySQL',
      icon: svgIcons.mysql,
    },
    {
      id: 4,
      name: 'Firebase',
      icon: svgIcons.firebase,
    },
    {
      id: 5,
      name: 'React-Native',
      icon: svgIcons.react_native,
    },
    {
      id: 6,
      name: 'JavaScript',
      icon: svgIcons.javascript,
    },
    {
      id: 7,
      name: 'TypeScript',
      icon: svgIcons.typescript,
    },
    {
      id: 8,
      name: 'Angular',
      icon: svgIcons.angular,
    },
    {
      id: 9,
      name: 'React',
      icon: svgIcons.react,
    },
    {
      id: 10,
      name: 'NodeJS',
      icon: svgIcons.nodejs,
    },
    {
      id: 11,
      name: 'MongoDB',
      icon: svgIcons.mongodb,
    },
    {
      id: 12,
      name: 'AWS',
      icon: svgIcons.aws,
    },
    {
      id: 13,
      name: 'Google Cloud',
      icon: svgIcons.googleCloud,
    },
  ]
}
