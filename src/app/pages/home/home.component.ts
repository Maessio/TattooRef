import { Component, inject } from '@angular/core';
import { FooterComponent } from "../../components/footer/footercomponent";
import { CarouselComponent } from "../../components/carousel/carousel.component";
import { ApiService } from '../../services/api.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FooterComponent, CarouselComponent, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  private service = inject(ApiService);
  searchText: string = '';
  
  getImage(prompt: string){
    this.service.get(prompt).subscribe({
      next: (res) => {
        console.log(res.image);

      }, error: (er) => {
        console.log("GONE BAD")
      } 

    })
  }
}
