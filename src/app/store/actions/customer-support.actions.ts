import { createAction, props } from '@ngrx/store';
import { CustomerMessage } from 'src/app/shared/models/customerMessage.model';

export const sendingCustomerSupportMessage = createAction(
  '[Customer Support Component] Sending Customer Support Message',
  props<{date: CustomerMessage}>()
);

export const sendMessageStatus = createAction(
  '[Customer Support Effect] Send Customer Support Message Status',
  props<{isSentSuccess: boolean}>()
);

export const clearForm = createAction(
  '[Customer Support Component] Clear Form'
);




