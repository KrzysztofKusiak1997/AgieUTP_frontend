import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaProjektowComponent } from './lista-projektow.component';

describe('ListaProjektowComponent', () => {
  let component: ListaProjektowComponent;
  let fixture: ComponentFixture<ListaProjektowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaProjektowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaProjektowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
