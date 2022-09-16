import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShortterLinkComponent } from './shortter-link.component';

describe('ShortterLinkComponent', () => {
  let component: ShortterLinkComponent;
  let fixture: ComponentFixture<ShortterLinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShortterLinkComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShortterLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
