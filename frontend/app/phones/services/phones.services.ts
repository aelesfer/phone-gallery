import { Phone } from './../model/phone.model';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class PhonesService {
  API_BASE_URL = 'http://localhost:4100';
  API_PHONES_URL = `${this.API_BASE_URL}/phones`;

  constructor(private http: Http) {}

  loadPhones(): Observable<Phone[]> {
    return this.http.get(this.API_PHONES_URL)
      .map((res: Response) => res.json());
  }

}
