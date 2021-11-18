import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { AgentyComponent } from './components/agenty/agenty.component';
import { ContactComponent } from './components/contact/contact.component';
import { ContentComponent } from './components/content/content.component';
import { HomeComponent } from './components/home/home.component';
import { MainComponent } from './components/main/main.component';
import { ManagementComponent } from './components/management/management.component';
import { PropertyComponent } from './components/property/property.component';


const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'about',
    component:AboutComponent
  },
  {
    path:'content',
    component:ContentComponent
  },
  {
    path:'agenty',
    component:AgentyComponent
  },
  {
    path:'property',
    component:PropertyComponent
  },
  {
    path:'contact',
    component:ContactComponent
  },
  {
    path:'main',
    component:MainComponent
  },
  {
    path:'management',
    component:ManagementComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
