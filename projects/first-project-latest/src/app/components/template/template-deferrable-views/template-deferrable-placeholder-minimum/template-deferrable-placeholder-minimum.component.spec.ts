import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateDeferrablePlaceholderMinimumComponent } from './template-deferrable-placeholder-minimum.component';

describe('TemplateDeferrablePlaceholderMinimumComponent', () => {
  let component: TemplateDeferrablePlaceholderMinimumComponent;
  let fixture: ComponentFixture<TemplateDeferrablePlaceholderMinimumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TemplateDeferrablePlaceholderMinimumComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemplateDeferrablePlaceholderMinimumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
