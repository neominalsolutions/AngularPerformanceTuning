import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CDChildComponent } from './cdchild.component';

describe('CDChildComponent', () => {
  let component: CDChildComponent;
  let fixture: ComponentFixture<CDChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CDChildComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CDChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
