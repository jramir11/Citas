import { Component, OnInit } from '@angular/core';
import { AuthorsService } from 'src/app/services/authors.service';
import  { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  newAuthor : any;
  mensajeErr:String=""

  constructor(private _authorservices: AuthorsService,
    private _route: ActivatedRoute,
    private _router: Router) { }

  ngOnInit(): void {
    this.newAuthor = { name: ""};
  }

  onSubmit(){
    this.newAuthors();
    this.newAuthor = { name : ""};
  }

  //inserta Nuevos Autores
  newAuthors() {
    if (this.newAuthor.name == "" ){this.mensajeErr="Name is Required"}
    else if (this.newAuthor.name < 3){this.mensajeErr="Length Name minus is 3 characters"}
    else {
      let observable = this._authorservices.newAuthors(this.newAuthor.name);
      observable.subscribe({
        next:(result) => {this.newAuthor=result
        console.log("message ",result)},
        error:(error)=>{
          console.log(error);
          if (error.error){this.mensajeErr="Name is Invalid"}
          alert(this.mensajeErr);
        }
      })
    }
    this.goHome();
  }

  goHome() {
    this._router.navigate(['/home']);
  }

}
