import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaAquarioComponent } from './lista-aquario.component';

describe('ListaAquarioComponent', () => {
  let component: ListaAquarioComponent;
  let fixture: ComponentFixture<ListaAquarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaAquarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaAquarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
