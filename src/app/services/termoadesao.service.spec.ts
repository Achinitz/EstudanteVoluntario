import { TestBed } from '@angular/core/testing';

import { TermoadesaoService } from './termoadesao.service';

describe('TermoadesaoService', () => {
  let service: TermoadesaoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TermoadesaoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
