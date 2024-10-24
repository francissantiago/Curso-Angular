import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnChangeOnInitComponent } from './on-change-on-init.component';

describe('OnChangeOnInitComponent', () => {
  let component: OnChangeOnInitComponent;
  let fixture: ComponentFixture<OnChangeOnInitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OnChangeOnInitComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OnChangeOnInitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
