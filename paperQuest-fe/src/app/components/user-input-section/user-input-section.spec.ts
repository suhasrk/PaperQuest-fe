import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserInputSection } from './user-input-section';

describe('UserInputSection', () => {
  let component: UserInputSection;
  let fixture: ComponentFixture<UserInputSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserInputSection]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserInputSection);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
