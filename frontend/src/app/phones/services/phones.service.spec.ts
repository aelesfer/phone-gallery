import { TestBed, inject, fakeAsync, async, getTestBed } from '@angular/core/testing';
import { PhonesService } from './phones.service';
import { Injector } from '@angular/core';
import { ConnectionBackend, Http, RequestOptions, BaseRequestOptions, HttpModule, XHRBackend } from '@angular/http';
import {MockBackend, MockConnection} from '@angular/http/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

const mockData = require('./../../../../../backend/phone.mock.json');

describe('PhonesService', () => {
  let injector: TestBed;
  let service: PhonesService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PhonesService]
    });
    injector = getTestBed();
    service = injector.get(PhonesService);
    httpMock = injector.get(HttpTestingController);
  });

  describe('#getPhones', () => {
    it('should return an Observable<Phone[]>', () => {
      service.loadPhones().subscribe(phones => {
        expect(phones.length).toBe(20);
        expect(phones).toEqual(mockData);
      });

      const req = httpMock.expectOne(service.API_PHONES_URL);
      expect(req.request.method).toBe('GET');
      req.flush(mockData);
    });
  });

});
