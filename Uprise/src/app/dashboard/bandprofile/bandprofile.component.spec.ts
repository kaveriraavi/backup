import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BandprofileComponent } from './bandprofile.component';

describe('BandprofileComponent', () => {
  let component: BandprofileComponent;
  let fixture: ComponentFixture<BandprofileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BandprofileComponent]
    });
    fixture = TestBed.createComponent(BandprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
