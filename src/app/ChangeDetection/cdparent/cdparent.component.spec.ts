import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CDParentComponent } from './cdparent.component';

describe('CDParentComponent', () => {
  let component: CDParentComponent;
  let fixture: ComponentFixture<CDParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CDParentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CDParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
