import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlcohoquizComponent } from './alcohoquiz.component';

describe('AlcohoquizComponent', () => {
  let component: AlcohoquizComponent;
  let fixture: ComponentFixture<AlcohoquizComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlcohoquizComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlcohoquizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
