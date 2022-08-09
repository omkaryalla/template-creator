import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllPostsComponent } from './components/all-posts/all-posts.component';
import { EditorComponent } from './components/editor/editor.component';
import { TemplateSelectorComponent } from './components/template-selector/template-selector.component';

const routes: Routes = [
  { path: '', component: TemplateSelectorComponent },
  { path: 'editor', component: EditorComponent },
  { path: 'posts', component: AllPostsComponent },
  { path: '**' , redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
