import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreakingbadComponent } from './breakingbad.component';

describe('BreakingbadComponent', () => {
  let component: BreakingbadComponent;
  let fixture: ComponentFixture<BreakingbadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BreakingbadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BreakingbadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
