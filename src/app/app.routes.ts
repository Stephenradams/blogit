import { Routes } from '@angular/router';
import { PostsComponent } from './posts/posts.component';
import { EditorComponent } from './editor/editor.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'posts',
    pathMatch: 'full',
  },
  {
    path: 'posts',
    component: PostsComponent,
  },
  {
    path: 'posts/:id',
    component: PostsComponent,
  },
  {
    path: 'editor',
    component: EditorComponent,
  },
  {
    path: '**',
    redirectTo: 'posts',
    pathMatch: 'full',
  },
];
