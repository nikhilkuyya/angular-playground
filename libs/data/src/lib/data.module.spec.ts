import { async, TestBed } from '@angular/core/testing';
import { DataModule } from './data.module';

describe('DataModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [DataModule],
    }).compileComponents();
  }));

  // TODO: Add real tests here.
  //
  // NB: This particular test does not do anything useful.
  //     It does NOT check for correct instantiation of the module.
  it('should have a module definition', () => {
    expect(DataModule).toBeDefined();
  });
});
