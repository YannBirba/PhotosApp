import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageAdminViewComponent } from './image-admin-view.component';

describe('ImageAdminViewComponent', () => {
  let component: ImageAdminViewComponent;
  let fixture: ComponentFixture<ImageAdminViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImageAdminViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageAdminViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
