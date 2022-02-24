import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ComunicacionService } from '../../servis/comunicacion.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.scss']
})
export class ProductoComponent implements OnInit {

  @ViewChild('producto') private producto !: ElementRef;
  canasta: string='';

  constructor(private comunicacionService : ComunicacionService) { }

  ngOnInit(): void {
  }

  addProduct(){
    this.canasta = this.producto.nativeElement.value;
    this.comunicacionService.agregarProduct(this.canasta);
  }



}
