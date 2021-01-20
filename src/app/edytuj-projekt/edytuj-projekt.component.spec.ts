import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EdytujProjektComponent } from './edytuj-projekt.component';

describe('EdytujProjektComponent', () => {
  let component: EdytujProjektComponent;
  let fixture: ComponentFixture<EdytujProjektComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EdytujProjektComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EdytujProjektComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
