import { Component, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.scss']
})
export class ListarComponent implements OnInit {
  date = new Date();
  constructor(@Inject(`BASE_URL`) baseUrl: string) { 
    console.log("baseUrl do componente home", baseUrl);
  }

  ngOnInit(): void {
  }

}
