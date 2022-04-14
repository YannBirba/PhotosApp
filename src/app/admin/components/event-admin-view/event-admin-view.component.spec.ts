import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventAdminViewComponent } from './event-admin-view.component';

describe('EventAdminViewComponent', () => {
  let component: EventAdminViewComponent;
  let fixture: ComponentFixture<EventAdminViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventAdminViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventAdminViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
