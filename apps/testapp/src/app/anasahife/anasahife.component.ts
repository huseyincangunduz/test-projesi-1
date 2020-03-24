import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'testworkspace-anasahife',
  templateUrl: './anasahife.component.html',
  styleUrls: ['./anasahife.component.scss']
})
export class AnasahifeComponent implements OnInit {
  peterState = new FormControl('');
  checkboxes = new FormGroup({
    val1 : new FormControl(),
    val2 : new FormControl(),
    val3 : new FormControl()
  })

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.peterState.setValue('still');
  }
 
 temizle(){
   this.peterState.reset();
  }
}
