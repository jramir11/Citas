import { Component, OnInit } from '@angular/core';
import { AuthorsService } from 'src/app/services/authors.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  listAuthors: any;

  constructor(private _authorservices: AuthorsService) { }

  ngOnInit(): void {
    this.getAllAuthors();
  }

  getAllAuthors() {
    let observable = this._authorservices.getAllAuthors();
    observable.subscribe(data => {
      this.listAuthors = data;
    });

  }


  deleteAuthors(id: String) {
    let observable = this._authorservices.deleteAuthors(id);
    observable.subscribe(data => {
      this.listAuthors = data;
      this.getAllAuthors();
    });
  }

}
