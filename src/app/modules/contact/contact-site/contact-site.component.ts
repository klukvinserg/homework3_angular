import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SendLeterComponent } from '../send-leter/send-leter.component';

@Component({
  selector: 'app-contact-site',
  templateUrl: './contact-site.component.html',
  styleUrls: ['./contact-site.component.scss']
})
export class ContactSiteComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog() {
    const dialogRef = this.dialog.open(SendLeterComponent);

    dialogRef.afterClosed().subscribe(res => {
       if (res === undefined) {
         return false;
       } else {
        alert(res.send);
       }
    });
  }
}
