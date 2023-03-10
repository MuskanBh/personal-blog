import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';

const routes: Routes= [
  {path:'', pathMatch:'full', redirectTo: 'home'},
  {
    path: 'post/:id/:slug',
    loadChildren: () => import('./post/post.module'). then( m=> m.PostModule)
  },
  {path:'home', component:HomeComponent},
  {path:'about', component: AboutComponent},
  {path: '**', component:HomeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
