import { Component, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardComponent } from "./components/card/card.component";
import { CommonModule } from '@angular/common';


interface Star {
  id: number;
  top: string;      // e.g. "23.5vh"
  left: string;     // e.g. "12.3vw"
  size: string;     // e.g. "48px"
  rotate: string;   // e.g. "12deg"
  src: string;      // image path or data URL
  opacity: number;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CardComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass'
})

export class AppComponent implements OnInit, OnDestroy {
  @ViewChild('mainAttractions') myDiv!: ElementRef<HTMLDivElement>;
  title = 'space-camps';
  stars: Star[] = [];
  private starImages = ["../assets/images/star-blue.png", "../assets/images/star-red.png"];
  starsCount = 500;

  ngOnInit(): void {
    console.log("oninit running")
    this.generateStars();
    const rect = document.getElementById('main-attractions')?.getBoundingClientRect();
    if (!rect) {
      console.error('Element not found or has no bounding rectangle');
      return;
    }
    console.log('Top Y:', rect.top);
    console.log('Bottom Y:', rect.bottom);
  }

  ngAfterViewInit(): void {

  }

  ngOnDestroy(): void {
    // this.stars = []; // Clear stars on component destruction
  }

  
  private rand(min: number, max: number) {
    return Math.random() * (max - min) + min;
  }

  private generateStars() {
    this.stars = []
    for(let i = 0; i < this.starsCount; i++)
    {
      const sizePx = Math.round(this.rand(16, 200));
      const star: Star = {
        id: i,
        top: `${this.rand(0, 400).toFixed(2)}vh`,
        left: `${this.rand(0, 200).toFixed(2)}vw`,
        size: `${sizePx}px`,
        rotate: `${this.rand(0, 360).toFixed(2)}deg`,
        src: this.starImages[Math.floor(this.rand(0, this.starImages.length))],
        opacity: this.rand(0.5, 1)
      };
      this.stars.push(star);
    }
  }
}
