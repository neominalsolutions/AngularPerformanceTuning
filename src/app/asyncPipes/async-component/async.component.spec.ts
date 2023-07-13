import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsyncComponent } from './async.component';

describe('AsyncComponentComponent', () => {
  let component: AsyncComponent;
  let fixture: ComponentFixture<AsyncComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AsyncComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AsyncComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});