import { Phone } from './../model/phone.model';
import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class PhonesService {
  API_BASE_URL = 'http://localhost:4100';
  API_PHONES_URL = `${this.API_BASE_URL}/phones`;

  constructor(private http: HttpClient) {}

  loadPhones(): Observable<Phone[]> {
    return this.http.get<Phone[]>(this.API_PHONES_URL);
  }

}
