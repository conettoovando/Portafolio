import { Component } from '@angular/core';
import { svgIcons } from 'src/app/Constant/routerNames';

@Component({
  selector: 'app-sobremi',
  templateUrl: './sobremi.component.html',
  styleUrls: ['./sobremi.component.css']
})
export class SobremiComponent {
  public sobremi_info: string = `
    👋 Soy un joven ingeniero informático de 22 años con una gran pasión por el mundo de la programación y la tecnología.<br>

    Me interesa profundizar mis conocimientos sin limitarme, por lo qué, estoy comprometido al aprendizaje constante asumiendo nuevos desafíos y explorando diversas tecnologías.<br>

    La siguiente tabla incluye los conocimientos que he desarrollado actualmente con lenguajes / Frameworks mi objetivo es poder aprender multiples lenguajes para aportar valor en diferentes proyectos.
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
      name: 'Angular',
      icon: svgIcons.angular,
    },
    {
      id: 8,
      name: 'React',
      icon: svgIcons.react,
    },
    {
      id: 9,
      name: 'NodeJS',
      icon: svgIcons.nodejs,
    },
    {
      id: 10,
      name: 'Google Cloud',
      icon: svgIcons.googleCloud,
    },
  ]
}
