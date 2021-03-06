import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CustomerSupportViewModel } from 'src/app/shared/models/customerSupportViewModel';
import { customerSupportFeatureKey, State } from '../reducers/customer-support.reducer';

export const selectCustomerSupportFeature = createFeatureSelector<State>(
    customerSupportFeatureKey,
);

export const selectName = createSelector(
    selectCustomerSupportFeature,
    (state: State) => state.name
);

export const selectCustomerSupportModel = createSelector(
    selectCustomerSupportFeature,
    (state: State): CustomerSupportViewModel => {
        return {
            name: state.name,
            isSentSuccess: state.isSentSuccess
        }
    }
)