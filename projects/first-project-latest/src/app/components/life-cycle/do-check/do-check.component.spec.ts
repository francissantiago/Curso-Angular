import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoCheckComponent } from './do-check.component';

describe('DoCheckComponent', () => {
  let component: DoCheckComponent;
  let fixture: ComponentFixture<DoCheckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DoCheckComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DoCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
