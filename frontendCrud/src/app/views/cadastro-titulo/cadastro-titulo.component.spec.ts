import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroTituloComponent } from './cadastro-titulo.component';

describe('CadastroTituloComponent', () => {
  let component: CadastroTituloComponent;
  let fixture: ComponentFixture<CadastroTituloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastroTituloComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroTituloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
