import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultSection } from './result-section';

describe('ResultSection', () => {
  let component: ResultSection;
  let fixture: ComponentFixture<ResultSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResultSection]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResultSection);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
