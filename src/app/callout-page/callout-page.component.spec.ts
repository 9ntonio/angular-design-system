import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalloutPageComponent } from './callout-page.component';

describe('CalloutPageComponent', () => {
  let component: CalloutPageComponent;
  let fixture: ComponentFixture<CalloutPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalloutPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalloutPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
