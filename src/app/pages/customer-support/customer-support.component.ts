import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CustomerSupportViewModel } from 'src/app/shared/models/customerSupportViewModel';
import { AppState } from 'src/app/store';
import { clearForm, sendingCustomerSupportMessage } from 'src/app/store/actions/customer-support.actions';
import { selectCustomerSupportModel, selectName } from 'src/app/store/selectors/customer-support.selectors';

@Component({
  selector: 'app-customer-support',
  templateUrl: './customer-support.component.html',
  styleUrls: ['./customer-support.component.scss']
})
export class CustomerSupportComponent implements OnInit {
  name: string;
  email: string;
  message: string;

  name$: Observable<string>;
  vm$: Observable<CustomerSupportViewModel>;
  vm: CustomerSupportViewModel;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.name$ = this.store.pipe(select(selectName))
    this.vm$ = this.store.pipe(select(selectCustomerSupportModel))
  }

  onSubmit() {
    this.store.dispatch(sendingCustomerSupportMessage({date: {
      name: this.name,
      email: this.email,
      message: this.message
    }}))
  }

  clearForm() {
    this.store.dispatch(clearForm())
  }

}
