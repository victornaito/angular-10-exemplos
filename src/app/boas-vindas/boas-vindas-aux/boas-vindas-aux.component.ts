import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-boas-vindas-aux',
  templateUrl: './boas-vindas-aux.component.html',
  styleUrls: ['./boas-vindas-aux.component.scss']
})
export class BoasVindasAuxComponent implements OnInit {

  formGroup: FormGroup;

  constructor(private hello: FormBuilder) { }

  ngOnInit(): void {
    this.formGroup = this. hello.group({
      id: [2, Validators.required],
    })
  }

}
