import { Component } from '@angular/core';
import routesNames from 'src/app/Constant/routerNames';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent {
  ChangeSection() {
    const section = document.getElementById(routesNames.sobremi);
    section!.scrollIntoView({ behavior: 'smooth' });
  }
}
