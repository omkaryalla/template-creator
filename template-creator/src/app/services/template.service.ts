import { Injectable } from '@angular/core';
import { Database, set, ref, push, onValue } from '@angular/fire/database';
import { Template } from '../models/template';

@Injectable({
  providedIn: 'root'
})
export class TemplateService {

  private templates: Template[] = []
  private template: Template = new Template('', '', '', '')

  constructor(
    private db: Database
  ) { }

  getTemplates() {
    return this.templates;
  }

  getTemplate() {
    return this.template;
  }

  addTemplate(template: Template) {
    set(push(ref(this.db, 'posts')), {
      imagePath: template.imagePath,
      heading: template.heading,
      discount : template.discount
    });
    this.getTemplatesFromDB();
  }

  setTemplate(template: Template) {
    this.template = template;
  }

  removeTemplate(template: Template) {
    this.templates = this.templates.filter(t => t !== template);
    set(ref(this.db, 'posts/' + template.id), {
      imagePath: null,
      heading: null,
      discount : null
    })
    .then(() => {
      // Data saved successfully!
    })
    .catch((error) => {
      // The write failed...
    });
  }
  
  getTemplatesFromDB() {
    const starCountRef = ref(this.db, 'posts');
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      this.templates = [];
      for (let key in data) {
        this.templates.push(new Template(key, data[key].imagePath, data[key].heading, data[key].discount));
      }
});

  }
}
