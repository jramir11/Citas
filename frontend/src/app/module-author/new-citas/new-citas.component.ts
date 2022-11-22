import { Component, OnInit } from '@angular/core';
import { AuthorsService } from 'src/app/services/authors.service';
import  { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-new-citas',
  templateUrl: './new-citas.component.html',
  styleUrls: ['./new-citas.component.css']
})

export class NewCitasComponent implements OnInit {
    datos: any;
    autorData: any = ({ id: '' });
    parametros: any;
    autorParams: any;
    mensajeErr: String = '';
    id:any;
    datosId:any={};
    formNewComentario!: FormGroup;

    constructor(private _authorServices: AuthorsService,
      private _activatedRoute: ActivatedRoute,
      private _router: Router,
      private formBuilder: FormBuilder) {}

    ngOnInit(): void {
        this.parametros = this._activatedRoute.params;
        this.datosId = this.parametros._value;
        this.getByIdAuthors(this.datosId.id);

        this.formNewComentario=this.formBuilder.group({
          quote:[''],
          score:0
        })
    }


    submitNewComentario(id:string){
      const {quote, score} = this.formNewComentario.value;
      this.compNewComentario(this.datosId._id, quote, score);
    }
    compNewComentario(id:string, quote:number,score:string){
      let observable = this._authorServices.SRVnewComentario(id,quote,score);
      observable.subscribe(data => this.datosId=data);
      console.log(this.datosId._id);

       this.goHome();
      //this.getByIdAuthors(id)
    }


    getByIdAuthors(id: String) {
      let observable = this._authorServices.getByIdAuthors(id);
      observable.subscribe(data => {
      this.datosId = data;
      //console.log(data);
      });
    }

    goHome() {
      this._router.navigate(['/viewcitas',this.datosId._id]);
    }



}
