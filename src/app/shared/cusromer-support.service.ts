import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CustomerMessage } from './models/customerMessage.model';

@Injectable({
  providedIn: 'root'
})
export class CusromerSupportService {

  constructor() { }

  sendMessage(form: CustomerMessage):Observable<boolean> {
    return form.name? of(true) : of(false)
  }
}
