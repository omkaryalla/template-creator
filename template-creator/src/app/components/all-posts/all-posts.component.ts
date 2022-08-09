import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Template } from 'src/app/models/template';
import { TemplateService } from 'src/app/services/template.service';

@Component({
  selector: 'app-all-posts',
  templateUrl: './all-posts.component.html',
  styleUrls: ['./all-posts.component.css']
})
export class AllPostsComponent implements OnInit {

  posts: Template[] = [];

  constructor(
    private templateService: TemplateService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.posts = this.templateService.getTemplates();
  }

  onDelete(post: Template) {
    this.templateService.removeTemplate(post);
    this.posts = this.templateService.getTemplates();
  }

  onEdit(post: Template) {
    this.templateService.setTemplate(post);
    this.router.navigate(['/editor']);
  }
}
