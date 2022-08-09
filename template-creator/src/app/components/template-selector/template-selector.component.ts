import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-selector',
  templateUrl: './template-selector.component.html',
  styleUrls: ['./template-selector.component.css']
})
export class TemplateSelectorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  imageUrl: string[] = [
    'assets/images/image1.png', 
    'assets/images/image2.jpg', 
    'assets/images/image3.jpg', 
    'assets/images/image4.jpg', 
    'assets/images/image5.jpg',
    'assets/images/image6.jpg'
  ];
}
