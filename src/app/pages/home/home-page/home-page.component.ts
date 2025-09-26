import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { CardComponent } from '../../../components/card/card.component'; 
import { Star } from '../../../interfaces/star';



@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CommonModule, RouterLink, CardComponent], 
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.sass'
})
export class HomePageComponent implements OnInit {
  // @ViewChild('mainAttractions') mainAttractions!: ElementRef<HTMLDivElement>;
  private numberOfStars = 10;
  private stars: Star[] = [];

  ngOnInit(): void {
    console.log("oninit running")
    for (let i = 0; i < this.numberOfStars; i++) {
      const star: Star = {
        top: Math.random() * 100,
        left: Math.random() * 100,
        delay: Math.random() * 5,
        duration: 1 + Math.random() * 3}
      this.stars.push(star);
  }
  console.log(this.stars)
  
}
}