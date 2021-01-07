import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

export class InputResult {
  public inputName: string;
  public inputValue: string;
}

@Component({
  selector: 'DynamicInputs',
  templateUrl: './dynamicinputs.component.html',
})
export class DynamicInputs implements OnInit {
  @Input() inputFields: string[];
  @Output() inputResults: EventEmitter<InputResult[]> = new EventEmitter<
    InputResult[]
  >();
  field: FormArray;

  inputForm = this.fb.group({
    fields: this.fb.array([this.fb.control('')]),
  });

  get fields() {
    return this.inputForm.get('fields') as FormArray;
  }

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.inputFields.map((field) => {
      this.fields.push(this.fb.control(field));
    });
  }

  addAlias() {
    this.fields.push(this.fb.control(''));
  }

  onSubmit(f) {
    console.log(this.inputForm.value);
    console.log(f);
    console.log('Submitted');
    // this.inputResults.next([
    //   { inputName: 'Name', inputValue: 'value' },
    //   { inputName: 'City', inputValue: 'value' },
    // ]);
  }
}
