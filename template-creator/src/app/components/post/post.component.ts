import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  @Input() image: string = '';
  @Input() heading: string = '';
  @Input() discount: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
