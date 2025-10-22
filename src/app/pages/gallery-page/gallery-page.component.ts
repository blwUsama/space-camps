import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery-page',
  standalone: true,
  imports: [],
  templateUrl: './gallery-page.component.html',
  styleUrl: './gallery-page.component.sass'
})
export class GalleryPageComponent implements OnInit, OnDestroy {

  ngOnInit(): void {
    console.log("gallery component mounted")
}
  ngOnDestroy(): void {
    console.log("gallery component unmounted")
  }
}
