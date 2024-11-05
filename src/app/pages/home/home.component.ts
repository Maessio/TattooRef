import { Component, inject } from '@angular/core';
import { CarouselComponent } from "../../components/carousel/carousel.component";
import { ApiService } from '../../services/api.service';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from '../../components/footer/footer.component';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FooterComponent, CarouselComponent, FormsModule, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  prompt: string = '';
  image: string = '';
  
  private service = inject(ApiService); 
  
  getImage(prompt: string){
    this.service.get(prompt).subscribe({
      next: (res) => {
        console.log(res.image);
        this.image = res.image

      }, error: (er) => {
        console.log("GONE BAD: ", er)
      } 

    })
  }
}
