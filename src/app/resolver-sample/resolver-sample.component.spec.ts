import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResolverSampleComponent } from './resolver-sample.component';

describe('ResolverSampleComponent', () => {
  let component: ResolverSampleComponent;
  let fixture: ComponentFixture<ResolverSampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResolverSampleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResolverSampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
