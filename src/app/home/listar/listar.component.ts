import { Component, Inject, OnInit } from '@angular/core';
import { BoasVindasAuthGuardService } from 'src/app/boas-vindas/services/guard/boas-vindas-auth-guard.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.scss']
})
export class ListarComponent implements OnInit {
  date = new Date();
  constructor(@Inject(`BASE_URL`) baseUrl: string,
  private boasVindasGuard: BoasVindasAuthGuardService) { 
    console.log("baseUrl do componente home", baseUrl);
  }

  ngOnInit(): void {
    this.boasVindasGuard.getProducer().subscribe({next: (value) =>
      console.log("consumo de fila do componente home " + value)

    });
  }

}
