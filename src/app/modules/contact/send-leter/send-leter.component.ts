import { Inject } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-send-leter',
  templateUrl: './send-leter.component.html',
  styleUrls: ['./send-leter.component.scss']
})
export class SendLeterComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<SendLeterComponent>,
    @Inject(MAT_DIALOG_DATA) public data) {}

  ngOnInit(): void {
  }

  closeDialog() {
    this.dialogRef.close()
  }

  sendDialog() {
    this.dialogRef.close({
      send: 'Your letter was sended'
    });
  }
}
