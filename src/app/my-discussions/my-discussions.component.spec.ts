import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyDiscussionsComponent } from './my-discussions.component';

describe('MyDiscussionsComponent', () => {
  let component: MyDiscussionsComponent;
  let fixture: ComponentFixture<MyDiscussionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyDiscussionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyDiscussionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
