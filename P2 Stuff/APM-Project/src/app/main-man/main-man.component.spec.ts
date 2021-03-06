import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainManComponent } from './main-man.component';

describe('MainManComponent', () => {
  let component: MainManComponent;
  let fixture: ComponentFixture<MainManComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainManComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainManComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
