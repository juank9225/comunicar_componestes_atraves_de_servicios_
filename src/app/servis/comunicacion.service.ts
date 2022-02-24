import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComunicacionService {

  constructor() { }

  private conductorProduct = new Subject<string>();
  conductorProduct$ = this.conductorProduct.asObservable();

  agregarProduct(product: string){
    this.conductorProduct.next(product);
  }
}
