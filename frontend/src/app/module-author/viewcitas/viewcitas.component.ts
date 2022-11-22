import { Component, OnInit } from '@angular/core';
import { AuthorsService } from 'src/app/services/authors.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-viewcitas',
  templateUrl: './viewcitas.component.html',
  styleUrls: ['./viewcitas.component.css']
})
export class ViewcitasComponent implements OnInit {
    editCitas : any;
    parametros: any;
    author_id: any;
    author: any = ({_id:'', name:''});
    listCitas: any;

    constructor(private _authorservices: AuthorsService,
      private _activatedRoute: ActivatedRoute,
      private _router: Router) { }

    ngOnInit(): void {
      this.parametros = this._activatedRoute.params;
      this.author_id = this.parametros._value;
      this.getByIdAuthors(this.author_id.id);
    }

    getAllQuotes(id: String) {
      let observable = this._authorservices.getAllQuotes(id);
      observable.subscribe(data => {
        this.listCitas = data;
      });
      }

      getByIdAuthors(id: String) {
        let observable = this._authorservices.getByIdAuthors(id);
        observable.subscribe(data => {
          this.listCitas = data;
        });
        }

      deleteQuotes(_id: String) {
        let observable = this._authorservices.deleteQuotes( this.author_id.id , _id );
        observable.subscribe(data => {
          this.listCitas = data;
          //console.log(data);
          this.getByIdAuthors(this.author_id.id);
        });
      }

      upQuotes(_id: String, score:Number){
          let observable = this._authorservices.SRVVotosQuotes(this.author_id.id, _id, score );
          observable.subscribe(data => {
            this.listCitas = data;
            this.getByIdAuthors(this.author_id.id);
          });
      }


      DownQuotes(_id: String, score:Number){
        let observable = this._authorservices.SRVVotosQuotes(this.author_id.id, _id, score );
        observable.subscribe(data => {
          this.listCitas = data;
          this.getByIdAuthors(this.author_id.id);
        });
      }



      goHome(id:String) {
        this._router.navigate(['/viewcitas',id]);
      }

}
