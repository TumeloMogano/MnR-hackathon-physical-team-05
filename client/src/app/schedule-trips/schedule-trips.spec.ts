import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleTrips } from './schedule-trips';

describe('ScheduleTrips', () => {
  let component: ScheduleTrips;
  let fixture: ComponentFixture<ScheduleTrips>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScheduleTrips]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScheduleTrips);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
