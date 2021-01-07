import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';

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
    console.log(this.inputForm);

    
    
    // this.inputResults.next([
    //   { inputName: 'Name', inputValue: 'value' },
    //   { inputName: 'City', inputValue: 'value' },
    // ]);
  }
}
