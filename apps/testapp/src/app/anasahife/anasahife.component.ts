import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {  FormControl, FormGroup, RequiredValidator } from '@angular/forms';
import { InitialFied, InputField, Reflector, RootSectionField, SectionField, NotEmpty, EmailValidator, MaximumNumber, MinimumNumber, EventObserve } from "@morphosium/reform"

@Component({
  selector: 'testworkspace-anasahife',
  templateUrl: './anasahife.component.html',
  styleUrls: ['./anasahife.component.scss']
})
export class AnasahifeComponent implements OnInit, AfterViewInit {
  peterState = new FormControl('');
  @ViewChild("sampleFormArea") sampleFormArea: ElementRef<HTMLDivElement>;

  reflector: Reflector;
  value: any;

  constructor() {
    this.reflector = new Reflector(new RootSectionField({
      content: [
        new InputField({
          name: "test",
          label: "sdsa",
          inputType: "text",
          validations: [
           new NotEmpty(), new EmailValidator(),
          ]
        }),
        new InputField({
          name: "test2",
          label: "Test 2 input",
          inputType: "number",
          validations: [
            new MaximumNumber(6), new MinimumNumber(0)
          ]
        })

      ]
    }))
  } 

  ngAfterViewInit(): void {
    this.reflector.expandThere(this.sampleFormArea.nativeElement);
    this.reflector.onValueChange.subscribe(
      new EventObserve(() => {
        this.value = JSON.stringify(this.reflector.getValue());
      })
    )
    this.reflector.setErrorMessageVisibility(true);
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
