import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnasahifeComponent } from './anasahife.component';

describe('AnasahifeComponent', () => {
  let component: AnasahifeComponent;
  let fixture: ComponentFixture<AnasahifeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnasahifeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnasahifeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
