import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Template } from 'src/app/models/template';
import { TemplateService } from 'src/app/services/template.service';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {

  template: Template = new Template("", "", "", "");
  heading: string = "";
  discount: string = "";

  constructor(
    private templateService: TemplateService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.template = this.templateService.getTemplate();
    this.heading = this.template.heading;
    this.discount = this.template.discount;
  }

  onSubmit() {
    if (this.heading.length > 0 && this.discount.length > 0 && this.template.imagePath.length > 0) {
      if(this.template.id.length > 0) {
        this.templateService.removeTemplate(this.template);
      }
      this.template.heading = this.heading;
      this.template.discount = this.discount;
      this.templateService.addTemplate(this.template);
      this.router.navigate(['/posts']);
    }
    else if(this.heading.length == 0){
      alert("Enter heading")
    }
    else if(this.discount.length == 0){
      alert("Enter discount")
    }
    else{
      alert("Something went wrong")
    }
  }

}
