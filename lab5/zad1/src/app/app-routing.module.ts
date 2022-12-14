import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PhotosComponent } from './components/photos/photos.component';
import { PhotoComponent } from './components/photo/photo.component';
import { PostsComponent } from './components/posts/posts.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
{path: 'photos', component: PhotosComponent},
{path: 'posts', component: PostsComponent},
{path: 'home', component: HomeComponent},
{path: 'photos/:id', component: PhotoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [PhotosComponent, PostsComponent,HomeComponent, PhotoComponent]