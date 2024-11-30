import { Component, inject } from '@angular/core';
import { CardImageComponent } from "../card-image/card-image.component";
import { ApiService } from '../../services/api.service';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CardImageComponent, CommonModule],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css'
})
export class CarouselComponent {
  imageList: string[] = []

  private service = inject(ApiService); 

  ngOnInit() {
    this.getImageList();
  }
  
  getImageList(){
      this.service.list().subscribe({
        next: (res) => {
          
          this.imageList = res.results.map(character => character.image);
          console.log(this.imageList); 

        }, error: (er) => {
          console.log("GONE BAD: ", er)
        } 
  
      })
  }
}
