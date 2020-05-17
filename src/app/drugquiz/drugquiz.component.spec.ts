import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrugquizComponent } from './drugquiz.component';

describe('DrugquizComponent', () => {
  let component: DrugquizComponent;
  let fixture: ComponentFixture<DrugquizComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrugquizComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrugquizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
