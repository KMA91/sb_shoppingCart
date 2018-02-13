import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class DataService {

  private url: string = "../../assets/product-payload.json"

  constructor(
    private _http: HttpClient
  ) { }

  // Get products from json file

  getProducts() : any {
    return this._http.get(this.url);
  }

}
