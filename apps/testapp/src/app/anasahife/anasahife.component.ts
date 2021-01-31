import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { InitialFied, InputField, Reflector, RootSectionField, SectionField } from "@morphosium/reform"

@Component({
  selector: 'testworkspace-anasahife',
  templateUrl: './anasahife.component.html',
  styleUrls: ['./anasahife.component.scss']
})
export class AnasahifeComponent implements OnInit, AfterViewInit {
  peterState = new FormControl('');
  @ViewChild("sampleFormArea") sampleFormArea: ElementRef<HTMLDivElement>;

  reflector: Reflector;

  constructor() {
    this.reflector = new Reflector(new RootSectionField({
      content: [
        new InputField({
          name: "test",
          label: "test",
          inputType: "text"
        })
      ]
    }))
  } 

  ngAfterViewInit(): void {
    this.reflector.expandThere(this.sampleFormArea.nativeElement);
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.peterState.setValue('still');
  }

  temizle() {
    this.peterState.reset();
  }

  ngOnViewInit() {

  }
}
