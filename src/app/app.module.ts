import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule} from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { BlogComponent } from './pages/blog/blog.component';
import { ClinicaComponent } from './pages/clinica/clinica.component';
import { ContactenosComponent } from './pages/contactenos/contactenos.component';
import { SonrisaComponent } from './pages/sonrisa/sonrisa.component';
import { PedicitaComponent } from './pages/pedicita/pedicita.component';
import { EncabezadoComponent } from './encabezado/encabezado.component';
import { FooterComponent } from './footer/footer.component';
import { TaskService} from './Servicios/task.service';
import { TablaCComponent } from './tablaPedirCita/tabla-c/tabla-c.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ClinicaComponent,
    BlogComponent,
    ContactenosComponent,
    SonrisaComponent,
    PedicitaComponent,
    EncabezadoComponent,
    FooterComponent,
    TablaCComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    FormsModule, ReactiveFormsModule
  ],
  providers: [
    TaskService,FormsModule, ReactiveFormsModule
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }