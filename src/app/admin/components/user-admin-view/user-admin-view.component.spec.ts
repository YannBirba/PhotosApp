import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAdminViewComponent } from './user-admin-view.component';

describe('UserAdminViewComponent', () => {
  let component: UserAdminViewComponent;
  let fixture: ComponentFixture<UserAdminViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserAdminViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserAdminViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
