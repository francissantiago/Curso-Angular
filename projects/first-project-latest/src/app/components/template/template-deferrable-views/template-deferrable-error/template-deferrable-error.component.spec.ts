import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateDeferrableErrorComponent } from './template-deferrable-error.component';

describe('TemplateDeferrableErrorComponent', () => {
  let component: TemplateDeferrableErrorComponent;
  let fixture: ComponentFixture<TemplateDeferrableErrorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TemplateDeferrableErrorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemplateDeferrableErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
