import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandmarkDescriptionComponent } from './landmark-description.component';

describe('LandmarkDescriptionComponent', () => {
  let component: LandmarkDescriptionComponent;
  let fixture: ComponentFixture<LandmarkDescriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandmarkDescriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandmarkDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
