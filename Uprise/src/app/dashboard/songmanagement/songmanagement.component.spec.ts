import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SongmanagementComponent } from './songmanagement.component';

describe('SongmanagementComponent', () => {
  let component: SongmanagementComponent;
  let fixture: ComponentFixture<SongmanagementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SongmanagementComponent]
    });
    fixture = TestBed.createComponent(SongmanagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
