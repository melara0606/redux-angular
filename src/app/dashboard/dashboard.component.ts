import { IngresoEgresoService } from './../ingreso-egreso/ingreso-egreso.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: []
})
export class DashboardComponent implements OnInit {

  constructor(private ingresoEgresoService: IngresoEgresoService) { }

  ngOnInit() {
    this.ingresoEgresoService.initialIngresoEgreso();
  }

}
