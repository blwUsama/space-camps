import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { CardComponent } from '../../../components/card/card.component'; 



@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CommonModule, RouterLink, CardComponent], 
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.sass'
})
export class HomePageComponent implements OnInit {
  @ViewChild('mainAttractions') mainAttractions!: ElementRef<HTMLDivElement>;

  stars: Star[] = [];
  private starImages = ['../assets/images/star-blue.png', '../assets/images/star-red.png'];
  starsCount = 1000;

  ngOnInit(): void {
    this.generateStars();
    const rect = document.getElementById('main-attractions')?.getBoundingClientRect();
    if (rect) {
      console.log('Top Y:', rect.top);
      console.log('Bottom Y:', rect.bottom);
    }
  }

  ngOnDestroy(): void {
    // cleanup if you want
  }

  private rand(min: number, max: number) {
    return Math.random() * (max - min) + min;
  }

  private generateStars() {
    this.stars = [];
    for (let i = 0; i < this.starsCount; i++) {
      const sizePx = Math.round(this.rand(16, 200));
      this.stars.push({
        id: i,
        top: `${this.rand(0, 320).toFixed(2)}vh`,
        left: `${this.rand(-5, 95).toFixed(2)}vw`,
        size: `${sizePx}px`,
        rotate: `${this.rand(0, 360).toFixed(2)}deg`,
        src: this.starImages[Math.floor(this.rand(0, this.starImages.length))],
        opacity: this.rand(0.5, 1)
      });
    }
  }
  
}
interface Star {
  id: number;
  top: string;
  left: string;
  size: string;
  rotate: string;
  src: string;
  opacity: number;
}
