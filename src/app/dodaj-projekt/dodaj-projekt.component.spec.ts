import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DodajProjektComponent } from './dodaj-projekt.component';

describe('DodajProjektComponent', () => {
  let component: DodajProjektComponent;
  let fixture: ComponentFixture<DodajProjektComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DodajProjektComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DodajProjektComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
