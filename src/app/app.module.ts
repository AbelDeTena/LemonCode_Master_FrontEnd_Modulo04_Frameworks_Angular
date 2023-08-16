import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule  } from "@angular/forms";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from "@angular/material/icon"


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from "./material.module";
import { MenuComponent } from './layout/menu/menu.component';
import { CabeceraComponent } from './layout/cabecera/cabecera.component';
import { PieComponent } from './layout/pie/pie.component';
import { HomeComponent } from './routing/home/home.component';
import { LoginComponent } from './routing/login/login.component';
import { AboutComponent } from './routing/about/about.component';
import { DashboardComponent } from './routing/dashboard/dashboard.component';
import { GaleriaComponent } from './routing/galeria/galeria.component';
import { CrudComponent } from './routing/crud/crud.component';
import { ProfileComponent } from './routing/profile/profile.component';
import { RotateDirective } from './directives/rotate.directive'

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    CabeceraComponent,
    PieComponent,
    HomeComponent,
    LoginComponent,
    AboutComponent,
    DashboardComponent,
    GaleriaComponent,
    CrudComponent,
    ProfileComponent,
    RotateDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
