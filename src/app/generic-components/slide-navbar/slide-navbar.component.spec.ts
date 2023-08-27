import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlideNavbarComponent } from './slide-navbar.component';

describe('SlideNavbarComponent', () => {
  let component: SlideNavbarComponent;
  let fixture: ComponentFixture<SlideNavbarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SlideNavbarComponent]
    });
    fixture = TestBed.createComponent(SlideNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
