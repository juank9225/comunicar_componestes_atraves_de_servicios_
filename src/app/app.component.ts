import { Component } from '@angular/core';
import { ComunicacionService } from './servis/comunicacion.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'datos-servis';
  productos : String[] = ['Arroz','aceite','Azucar','sal','Huevos'];

  constructor(private comunicacionService : ComunicacionService) { }

  ngOnInit(): void {
    this.comunicacionService.conductorProduct$.subscribe(dato=>{
      this.productos.push(dato);
    })
  }


}
