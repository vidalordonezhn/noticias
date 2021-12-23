import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoticiaService {

  constructor(private http:HttpClient ) {

   }

   getNoticias(parameters: any): Observable<any>{
      const URL = 'https://newsapi.org/v2/top-headlines?country='+ parameters.pais +'&category='+ parameters.categoria +'&apiKey=63af6c4eebda4f9c98231531110c08b6';
      
      return this.http.get(URL);
   }
}
