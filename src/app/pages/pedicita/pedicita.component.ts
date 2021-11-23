import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Pacientes } from '../../models/pacientes';
import { TaskService} from '../../Servicios/task.service';


@Component({
  selector: 'app-pedicita',
  templateUrl: './pedicita.component.html',
  styleUrls: ['./pedicita.component.css']
})
export class PedicitaComponent implements OnInit {
  txtNombre!: string;
  txtApellidos!: string;
  cmbTipoDocumento!: string;
  txtid!: string;
  txtEdad!: string;
  cmbTratamientos!: string;
  txtEmail!: string;
  genero!: string;
  terminosycondiciones!: boolean;

  @Output() pacAdd = new EventEmitter<Pacientes>();


  constructor(public taskservice: TaskService) {


  }

  ngOnInit(): void {
  }
  addPaciente(myForm: NgForm): void {
    if (this.txtNombre == null || this.txtApellidos == null || this.cmbTipoDocumento == "" || this.txtid == null
      || this.txtEdad == null || this.cmbTratamientos == "" || this.txtEmail == null || this.terminosycondiciones == null) {
      alert('Verificar que todos las casillas se hayan ingresado');
    } else {

      var h = ((document.getElementById("radio1") as HTMLInputElement).checked);
      var m = ((document.getElementById("radio2") as HTMLInputElement).checked);
      var a = ((document.getElementById("radio3") as HTMLInputElement).checked);
      if (h == true) {
        this.genero = "Hombre"
      } else if (m == true) {
        this.genero = "Mujer"
      } else if (a == true) {
        this.genero = "Alien"
      }
      this.pacAdd.emit({
        nombre: this.txtNombre,
        apellido: this.txtApellidos,
        tipodocumento: this.cmbTipoDocumento,
        iddocumento: this.txtid,
        genero: this.genero,
        edad: this.txtEdad,
        tratamiento: this.cmbTratamientos,
        email: this.txtEmail
      });
      this.taskservice.addpaciente({
        nombre: this.txtNombre,
        apellido: this.txtApellidos,
        tipodocumento: this.cmbTipoDocumento,
        iddocumento: this.txtid,
        genero: this.genero,
        edad: this.txtEdad,
        tratamiento: this.cmbTratamientos,
        email: this.txtEmail
      });

      myForm.reset();
    }
  }
}