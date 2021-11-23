import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './pages/blog/blog.component';
import { ClinicaComponent } from './pages/clinica/clinica.component';
import { ContactenosComponent } from './pages/contactenos/contactenos.component';
import { HomeComponent } from './pages/home/home.component';
import { PedicitaComponent } from './pages/pedicita/pedicita.component';
import { SonrisaComponent } from './pages/sonrisa/sonrisa.component';

const routes: Routes = [
  {path: 'home', component:HomeComponent},
  {path: 'blog', component:BlogComponent},
  {path: 'clinica', component:ClinicaComponent},
  {path: 'contactenos', component:ContactenosComponent},
  {path: 'pedicita', component:PedicitaComponent},
  {path: 'sonrisa', component:SonrisaComponent},
  {path: '**', redirectTo:'/home',pathMatch:'full'}
  
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }