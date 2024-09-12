import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private apiURL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php';
  constructor(
    private httpClient: HttpClient
  ) { }

  fecthData(search: string): Observable<any> {
    const options = {
      params: new HttpParams().set('s', search),
      //headers: new HttpHeaders({
      //  'X-RapidAPI-Key': 'dd506fe580mshdebc4a7736492853p118e04jsna51f66eeb566',
      //  'X-RapidAPI-Host': 'thecocktaildb.com'
      //})
    };

    return this.httpClient.get(this.apiURL, options);
  }
}
