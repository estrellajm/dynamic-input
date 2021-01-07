import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

export class InputResult {
  public inputName: string;
  public inputValue: string;
}

@Component({
  selector: 'DynamicInputs',
  // Update this template
  template: `
  <form [formGroup]="inputForm">
    <div>
      <div *ngFor="let field of inputFields">
        <label for="{{field}}">{{ field }}</label>
        <input type="text" id="{{field}}" />
      </div>

      <div formArrayName="inputForm">
        <div *ngFor="let field of address.get('inputForm').controls; let j=index" [formGroupName]="j" >
            <h4>Room #{{j + 1}}</h4>
            <div class="form-group">
              <label class="center-block">Type:
                <input class="form-control" formControlName="type">
              </label>
            </div>
        </div>
      </div>


      <div>
        <button (click)="onSubmit()">Submit</button>
      </div>
    </div>
  </form>
  `,
})
export class DynamicInputs implements OnInit {
  @Input() inputFields: string[];
  @Output() inputResults: EventEmitter<InputResult[]> = new EventEmitter<
    InputResult[]
  >();
  inputForm: FormArray
  constructor(private fb: FormBuilder) {
    this.inputForm = fb.array([])
  }


  ngOnInit(): void {
    console.log(this.inputFields);
  }

  onSubmit() {
    console.log(this.inputForm.value);
    console.log('Submitted');
    this.inputResults.next([
      { inputName: 'Name', inputValue: 'value' },
      { inputName: 'City', inputValue: 'value' }
    ]);
  }
}
