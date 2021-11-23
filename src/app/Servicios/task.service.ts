import { Injectable } from '@angular/core';
import { Pacientes } from '../models/pacientes'

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  paciente: Pacientes[];

  constructor() {
    this.paciente = [];
  }

  getPaciente(): Pacientes[] {
    if (localStorage.getItem('paciente') === null) {
      this.paciente = [];
    } else {
      this.paciente = JSON.parse(localStorage.getItem('paciente')!);
    }
    return this.paciente;
  }

  addpaciente(pacientes: Pacientes): void {
    this.paciente.unshift(pacientes);
    let paciente;
    if (localStorage.getItem(`paciente`) === null) {
      paciente = [];
      paciente.unshift(pacientes);
      localStorage.setItem('paciente', JSON.stringify(paciente));
    } else {
      paciente = JSON.parse(localStorage.getItem('paciente')!);
      paciente.unshift(pacientes);
      localStorage.setItem('paciente', JSON.stringify(paciente));

    }
  }

  removePacientes(pacientes: Pacientes) {
    for (let i = 0; this.paciente.length; i++) { 
      if (pacientes == this.paciente[i]) {

        this.paciente.splice(i, 1);
        localStorage.setItem('paciente', JSON.stringify(this.paciente));

      }
    }
  }

}
