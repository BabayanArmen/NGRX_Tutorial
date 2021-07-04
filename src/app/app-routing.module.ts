import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerSupportComponent } from './pages/customer-support/customer-support.component';
import { MainPageComponent } from './pages/main-page/main-page.component';

const routes: Routes = [
  {path: "", component: MainPageComponent},
  {path: "support", component: CustomerSupportComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
