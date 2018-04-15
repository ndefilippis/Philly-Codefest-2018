import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CodefestDescriptionComponent } from './codefest-description.component';

describe('CodefestDescriptionComponent', () => {
  let component: CodefestDescriptionComponent;
  let fixture: ComponentFixture<CodefestDescriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CodefestDescriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CodefestDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
