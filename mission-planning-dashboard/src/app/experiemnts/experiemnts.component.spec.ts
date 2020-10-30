import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperiemntsComponent } from './experiemnts.component';

describe('ExperiemntsComponent', () => {
  let component: ExperiemntsComponent;
  let fixture: ComponentFixture<ExperiemntsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExperiemntsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExperiemntsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
