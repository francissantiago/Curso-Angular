import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateDeferrableLoadingAfterMinimumComponent } from './template-deferrable-loading-after-minimum.component';

describe('TemplateDeferrableLoadingAfterMinimumComponent', () => {
  let component: TemplateDeferrableLoadingAfterMinimumComponent;
  let fixture: ComponentFixture<TemplateDeferrableLoadingAfterMinimumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TemplateDeferrableLoadingAfterMinimumComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemplateDeferrableLoadingAfterMinimumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
