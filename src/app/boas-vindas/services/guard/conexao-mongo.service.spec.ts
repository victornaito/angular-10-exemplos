import { TestBed } from '@angular/core/testing';

import { ConexaoMongoService } from './conexao-mongo.service';

describe('ConexaoMongoService', () => {
  let service: ConexaoMongoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConexaoMongoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
