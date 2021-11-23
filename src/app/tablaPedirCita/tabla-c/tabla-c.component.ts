import { Component, OnInit } from '@angular/core';
import { Pacientes } from '../../models/pacientes';
import { TaskService } from '../../Servicios/task.service';
import { PedicitaComponent } from '../../pages/pedicita/pedicita.component'

@Component({
  selector: 'app-tabla-c',
  templateUrl: './tabla-c.component.html',
  styleUrls: ['./tabla-c.component.css']
})
export class TablaCComponent implements OnInit {

  pacientesAgr!: Pacientes[];
  constructor(public taskservice: TaskService) {

  }

  ngOnInit(): void {
    this.pacientesAgr = this.taskservice.getPaciente();
  }
 
  onDelete(paciente: Pacientes) {
    if (confirm('Seguro de eliminarlo?')) {
      this.taskservice.removePacientes(paciente);

    }
  }


}
