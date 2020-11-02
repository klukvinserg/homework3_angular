import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactSiteComponent } from './contact-site/contact-site.component';
import { SendLeterComponent } from './send-leter/send-leter.component';


const routes: Routes = [
  {path: '', component: ContactSiteComponent},
  {path: 'send', component: SendLeterComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactRoutingModule { }
