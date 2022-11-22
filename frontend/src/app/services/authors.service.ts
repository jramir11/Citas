import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthorsService {

  constructor(private _http: HttpClient) { }

  getAllAuthors() {
    return this._http.get(environment.servicioGetAllAuthors);
  }

  getByIdAuthors(id:String) {
    let url= `${environment.servicioGetByIdAuthor}/${id}`;
    return this._http.get(url);
  }

  getAllQuotes(id:String) {
    let url= `${environment.servicioGetAllQuotes}/${id}`;
    return this._http.get(url);
  }

  newAuthors(authorName:String){
    let author = ({name: authorName})
    return this._http.post(environment.servicioNewAuthor,author);
  }

  putUpdateAuthors(id:String, name: any) {
    let url= `${environment.servicioUpdateAuthor}/${id}`;
    return this._http.put(url, name);
  }


  deleteAuthors(id:String) {
    let url= `${environment.servicioDeleteAuthor}/${id}`;
    return this._http.delete(url);
  }


  deleteQuotes(_id:String,id:String) {
    let url= `${environment.servicioDeleteQuotes}/${_id}`;
    return this._http.patch(url,{id});
  }

  newQuotes(_id:String) {
    let url= `${environment.servicioNewQuotes}/${_id}`;
    return this._http.patch(url, {_id});
  }

  SRVnewComentario(id:string,quote:number,score:string){
    //let url = `${environment.baseUrlnewPasteles}`;
    let url = `${environment.SRVnewComentario}/${id}`;
    return this._http.post(url,{quote,score})
  }

  SRVVotosQuotes(id:String,idCita:String,score:Number){
    let url = `${environment.SRVVotosQuotes}/${id}`;
    return this._http.put(url,{idCita,score})
  }


}
