import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { PostsComponent } from './components/posts/posts.component';
import { UsersComponent } from './components/users/users.component';
import { PostFormComponent } from './components/post-form/post-form.component';
import { PostComponent } from './components/post/post.component';
import { NotFoundComponent } from './components/not-found/not-found.component';




const routes: Routes = [
  {path: '', component: HomeComponent },
  {path: 'users', component: UsersComponent },
  {path: 'posts', component: PostsComponent },
  {path: 'post-form', component: PostFormComponent },
  {path: 'post/:id', component: PostComponent },
  {path: '**', component: NotFoundComponent }

];

@NgModule({
  declarations: [],
  exports: [RouterModule],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
