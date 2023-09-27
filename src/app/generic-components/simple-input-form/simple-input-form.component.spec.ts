import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleInputFormComponent } from './simple-input-form.component';

describe('SimpleInputFormComponent', () => {
  let component: SimpleInputFormComponent;
  let fixture: ComponentFixture<SimpleInputFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SimpleInputFormComponent]
    });
    fixture = TestBed.createComponent(SimpleInputFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
