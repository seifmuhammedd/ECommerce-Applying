import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor( private _HttpClient:HttpClient ) { }

  createPost(post:object):Observable<any>{
    return this._HttpClient.post("https://jsonplaceholder.typicode.com/posts", post)
  }
}
