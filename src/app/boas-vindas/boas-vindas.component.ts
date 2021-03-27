import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { catchError, isEmpty, take, tap } from 'rxjs/operators';

@Component({
  selector: 'app-boas-vindas',
  templateUrl: './boas-vindas.component.html',
  styleUrls: ['./boas-vindas.component.scss']
})
export class BoasVindasComponent implements OnInit {


  constructor(private activatedRoute: ActivatedRoute) { }

  async ngOnInit(): Promise<void> {
    const response =  await this.activatedRoute.data.pipe(
      tap(console.log),
      // switchMap(data => data),
      take(1),
      catchError(isEmpty())
    ).toPromise();
    
    // console.log("Data.Resolve", response.resolve);
  }

}
