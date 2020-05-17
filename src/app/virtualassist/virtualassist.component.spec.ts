import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VirtualassistComponent } from './virtualassist.component';

describe('VirtualassistComponent', () => {
  let component: VirtualassistComponent;
  let fixture: ComponentFixture<VirtualassistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VirtualassistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VirtualassistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
