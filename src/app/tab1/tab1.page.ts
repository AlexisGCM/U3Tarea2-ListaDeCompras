import { Component } from '@angular/core';
import { Insumo } from '../models/insumos';
import { insumosService } from '../services/insumos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  insumos: Insumo[] = [];

  constructor(private insumosService: insumosService, private router: Router) {
    this.insumos = this.insumosService.getInsumos();
  }

  changeStatus(pos: number) {
    this.insumosService.changeStatus(pos);
  }

}