import { Component } from '@angular/core';
import { svgIcons } from 'src/app/Constant/routerNames';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  dowloadFile = svgIcons.CV;
}
