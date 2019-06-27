import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotaSpeseComponent } from './nota-spese.component';

describe('NotaSpeseComponent', () => {
  let component: NotaSpeseComponent;
  let fixture: ComponentFixture<NotaSpeseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotaSpeseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotaSpeseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
