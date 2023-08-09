import { Component } from '@angular/core';
import { svgIcons } from 'src/app/Constant/routerNames';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  dowloadFile = svgIcons.CV;
}
