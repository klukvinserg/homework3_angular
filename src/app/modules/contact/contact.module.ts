import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactRoutingModule } from './contact-routing.module';
import { ContactSiteComponent } from './contact-site/contact-site.component';
import { SendLeterComponent } from './send-leter/send-leter.component';
import { MaterialModule } from 'src/app/shared/material/material.module';


@NgModule({
  declarations: [ContactSiteComponent, SendLeterComponent],
  imports: [
    CommonModule,
    ContactRoutingModule,
    MaterialModule
  ]
})
export class ContactModule { }
