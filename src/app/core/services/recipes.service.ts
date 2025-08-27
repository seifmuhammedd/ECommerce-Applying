import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  constructor( private _HttpClient:HttpClient ) { }

  getRecipes(searchValue:string):Observable<any>{
    return this._HttpClient.get(`https://forkify-api.herokuapp.com/api/search?q=${searchValue}`)
  }
}
