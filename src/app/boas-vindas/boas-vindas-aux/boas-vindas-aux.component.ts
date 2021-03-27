import { Component, ContentChild, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscriber, Subscription } from 'rxjs';
import { BoasVindasComponent } from '../boas-vindas.component';
import { BoasVindasAuthGuardService } from '../services/guard/boas-vindas-auth-guard.service';
import { ConexaoMongoService } from '../services/guard/conexao-mongo.service';

@Component({
  selector: 'app-boas-vindas-aux',
  templateUrl: './boas-vindas-aux.component.html',
  styleUrls: ['./boas-vindas-aux.component.scss']
})
export class BoasVindasAuxComponent implements OnInit {

  formGroup: FormGroup;
  subject: any;

  constructor(private hello: FormBuilder,
      private boasVindasGuard: BoasVindasAuthGuardService,
      private conexaoMongoService: ConexaoMongoService) { 
        this.subject = this.boasVindasGuard.msgProducer();
  }

  ngOnInit(): void {
    this.formGroup = this. hello.group({
      id: [2, Validators.required],
    })
    this.subject.subscribe({next: (value) =>console.log(value)});
  }

}
