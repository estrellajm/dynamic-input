import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';

export class InputResult {
  public inputName: string;
  public inputValue: string;
}

@Component({
  selector: 'app-dynamic-inputs',
  templateUrl: './dynamic-inputs.component.html',
})
export class DynamicInputsComponent implements OnInit {
  @Input() inputFields: string[];
  @Output() inputResults: EventEmitter<InputResult[]> = new EventEmitter<
    InputResult[]
  >();
  inputForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.inputForm = fb.group({});
  }

  ngOnInit(): void {
    this.inputFields.map((field) => {
      this.inputForm.addControl(field, new FormControl(''));
    });
  }

  onSubmit() {
    let arr = [];
    this.inputFields.map((field) => {
      arr.push({ inputName: field, inputValue: this.inputForm.value[field] });
    });
    this.inputResults.next(arr);
  }
}
