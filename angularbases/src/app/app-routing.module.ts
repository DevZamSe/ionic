import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactsComponent } from './pages/contacts/contacts.component';

const routes: Routes = [
  { path: 'home',
    component: HomeComponent},
  { path: 'about',
    component: AboutComponent},
  { path: 'contacts',
    component: ContactsComponent},
  { path: 'posts',
    loadChildren: './pages/posts/posts.module#PostsModule'},
  { path: '**',
    redirectTo: 'home'}
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
