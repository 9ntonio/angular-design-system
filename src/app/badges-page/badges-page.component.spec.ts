import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BadgesPageComponent } from './badges-page.component';

describe('BadgesPageComponent', () => {
  let component: BadgesPageComponent;
  let fixture: ComponentFixture<BadgesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BadgesPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BadgesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
