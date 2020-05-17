import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OcruploadComponent } from './ocrupload.component';

describe('OcruploadComponent', () => {
  let component: OcruploadComponent;
  let fixture: ComponentFixture<OcruploadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OcruploadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OcruploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
