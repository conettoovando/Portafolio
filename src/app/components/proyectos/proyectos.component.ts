import { Component } from '@angular/core';
import routesNames, { svgIcons } from 'src/app/Constant/routerNames';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent {
  public TitleSection: string = "< " + routesNames.proyectos + " />";
  public proyects: any[] = [
    {
      name: "Cublit",
      description: `Proyecto orientado al desarrollo de tesis de grado, para la carrera de Ingeniería en Computación e informática de la Universidad Andrés bello. <br><br>
      El proyecto consiste en una aplicación móvil orientada a obtener conocimiento de los beneficios de videojuegos.
      `,
      image: "assets/images/Proyects/Cublit.png",
      url: "",
      technologies: [
        {
          name: "React - Native",
          image: svgIcons.react_native
        },
        {
          name: "Firebase",
          image: svgIcons.firebase
        },
        {
          name: "Google Cloud",
          image: svgIcons.googleCloud
        },
        {
          name: "Java Script",
          image: svgIcons.javascript
        },
      ],
      type: "Mobile",
      code: "https://github.com/conettoovando/Cublit",
    },
  ];
}
