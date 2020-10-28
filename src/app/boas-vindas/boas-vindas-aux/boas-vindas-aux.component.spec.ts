import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoasVindasAuxComponent } from './boas-vindas-aux.component';

describe('BoasVindasAuxComponent', () => {
  let component: BoasVindasAuxComponent;
  let fixture: ComponentFixture<BoasVindasAuxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoasVindasAuxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoasVindasAuxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
