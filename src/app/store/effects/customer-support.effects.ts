import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { CusromerSupportService } from 'src/app/shared/cusromer-support.service';
import { sendingCustomerSupportMessage, sendMessageStatus } from '../actions/customer-support.actions';
import { map, mergeMap } from 'rxjs/operators';



@Injectable()
export class CustomerSupportEffects {

  sendMessage$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(sendingCustomerSupportMessage),
        mergeMap((action) => 
          this.customerSupportService.sendMessage(action.date).pipe(
            map(bool => sendMessageStatus({isSentSuccess: bool})),
          )
        )
      )
    }
  );


  constructor(private actions$: Actions, private customerSupportService: CusromerSupportService) {}

}
