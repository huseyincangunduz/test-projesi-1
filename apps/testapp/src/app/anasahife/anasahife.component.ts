import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, RequiredValidator } from '@angular/forms';
import { InitialFied, InputField, Reflector, RootSectionField, SectionField, EmailValidator } from "@morphosium/reform/public/module/main"

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
          label: "sdsa",
          inputType: "text",
          validations: [
           new EmailValidator()
          ]
        })
      ]
    }))
  } 

  ngAfterViewInit(): void {
    this.reflector.expandThere(this.sampleFormArea.nativeElement);
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
