import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectFruitsComponent } from './select-fruits.component';

describe('SelectFruitsComponent', () => {
  let component: SelectFruitsComponent;
  let fixture: ComponentFixture<SelectFruitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SelectFruitsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SelectFruitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
