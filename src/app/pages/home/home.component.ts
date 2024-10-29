import { Component } from '@angular/core';
import { FooterComponent } from "../../components/footer/footercomponent";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
