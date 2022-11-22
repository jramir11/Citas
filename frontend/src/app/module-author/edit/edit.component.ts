import { Component, OnInit } from '@angular/core';
import { AuthorsService } from 'src/app/services/authors.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  editAuthor : any;

  parametros: any;
  author_id: any;
  //author!: any;

  author: any = ({_id:'', name:''});

  constructor(private _authorservices: AuthorsService,
    private _activatedRoute: ActivatedRoute,
    private _router: Router) { }


      ngOnInit(): void {
        this.parametros = this._activatedRoute.params;
        this.author_id = this.parametros._value;
        this.editAuthor.name = this.getByIdAuthors(this.author_id.id);
      }

      getByIdAuthors(id: String) {
        let observable = this._authorservices.getByIdAuthors(id);
        observable.subscribe(data => {
          this.author = data;
        console.log(data);
        });
  }


  onSubmit(){
    const nameAuthor = { name: this.author.name};
    const id = this.author_id.id;
    let observable = this._authorservices.putUpdateAuthors(id, nameAuthor);
    observable.subscribe(data => {
      this.goHome();
    });
  }

  goHome() {
    this._router.navigate(['/home']);
  }


}
