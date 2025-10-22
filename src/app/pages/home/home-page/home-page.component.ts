import { Component, OnInit, OnDestroy } from '@angular/core';
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
export class HomePageComponent implements OnInit, OnDestroy {
  private numberOfStars = 10;
  private stars: Star[] = [];

  ngOnInit(): void {
    console.log("home component mounted")
  }

  ngOnDestroy(): void {
    console.log("home component unmounted")
  }
}