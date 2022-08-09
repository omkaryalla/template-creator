import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Template } from 'src/app/models/template';
import { TemplateService } from 'src/app/services/template.service';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})

export class TemplateComponent implements OnInit {

  @Input() image: string = '';

  constructor(
    private router: Router,
    private templateService: TemplateService
  ) { }

  ngOnInit(): void {
  }

  onclick() {
    this.templateService.setTemplate(new Template('',this.image, '', ''));
    this.router.navigate(['/editor']);
  }

}
