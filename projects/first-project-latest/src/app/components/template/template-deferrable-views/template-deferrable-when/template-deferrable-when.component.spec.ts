import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateDeferrableWhenComponent } from './template-deferrable-when.component';

describe('TemplateDeferrableWhenComponent', () => {
  let component: TemplateDeferrableWhenComponent;
  let fixture: ComponentFixture<TemplateDeferrableWhenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TemplateDeferrableWhenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemplateDeferrableWhenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
