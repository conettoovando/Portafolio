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
    {
      name: "Validar rut chileno en python y tkinter",
      description: `
        Aplicación de escritorio desarrollada en python y tkinter, que permite validar un rut chileno desde un archivo de excel y mostrar los resultados en una tabla con los datos de los rut invalidos.
      `,
      image: "assets/images/Proyects/Validar-Rut.png",
      url: "",
      technologies: [
        {
          name: "Python",
          image: svgIcons.python
        },
      ],
      type: "Desktop",
      code: "https://github.com/conettoovando/rutificador",
    },
    {
      name: "👨‍🎓 Estudiando para crear nuevos proyectos.",
      description: `
        Actualmente estoy estudiando para poder crear nuevos proyectos, dado que mi enfoque es poder aprender multiples lenguajes para aportar valor en diferentes proyectos. <br><br>
        Estoy maximizando mis conocimientos para crear aplicaciones de calidad estudiando los siguientes lenguajes / frameworks:
      `,
      image: "assets/images/developer.png",
      type: "Study",
      technologies: [
        {
          name: "JavaScript",
          image: svgIcons.javascript
        },
        {
          name: "Python",
          image: svgIcons.python
        },
        {
          name: "React",
          image: svgIcons.react
        },
        {
          name: "Django",
          image: svgIcons.django
        }
      ],
      code: "https://github.com/conettoovando",
    }
  ];
}
