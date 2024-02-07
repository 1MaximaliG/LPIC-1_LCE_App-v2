import { TestBed } from '@angular/core/testing';

import { QuestMasterService } from './quest-master.service';

describe('QuestMasterService', () => {
  let service: QuestMasterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuestMasterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
