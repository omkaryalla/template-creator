import { Component } from '@angular/core';
import { template } from 'handlebars';
import { TemplateService } from './services/template.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'template-creator';

  constructor(
    private templateService: TemplateService,
  ) { }
  
  ngOnInit() {
    this.templateService.getTemplatesFromDB();
  }
}
