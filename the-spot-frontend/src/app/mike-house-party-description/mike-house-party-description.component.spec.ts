import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MikeHousePartyDescriptionComponent } from './mike-house-party-description.component';

describe('MikeHousePartyDescriptionComponent', () => {
  let component: MikeHousePartyDescriptionComponent;
  let fixture: ComponentFixture<MikeHousePartyDescriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MikeHousePartyDescriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MikeHousePartyDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
