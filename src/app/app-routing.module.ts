import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './routing/home/home.component';
import { AboutComponent } from './routing/about/about.component';
import { CrudComponent } from './routing/crud/crud.component';
import { DashboardComponent } from './routing/dashboard/dashboard.component';
import { GaleriaComponent } from './routing/galeria/galeria.component';
import { LoginComponent } from './routing/login/login.component';
import { ProfileComponent } from './routing/profile/profile.component';

const routes: Routes = [
  {path:"about", component: AboutComponent },
  {path:"crud", component: CrudComponent },
  {path:"dashboard", component: DashboardComponent },
  {path:"galeria", component: GaleriaComponent },
  {path:"home", component: HomeComponent },
  {path:"login", component: LoginComponent },
  {path:"profile", component: ProfileComponent },  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
