import { TestBed } from '@angular/core/testing';

import { Websocketservice } from './websocketservice';

describe('Websocketservice', () => {
  let service: Websocketservice;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Websocketservice);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
