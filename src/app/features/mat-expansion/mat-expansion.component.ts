import { FormGroup, FormBuilder, FormArray, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { MatCheckboxChange } from '@angular/material/checkbox';

@Component({
  selector: 'app-mat-expansion',
  templateUrl: './mat-expansion.component.html',
  styleUrls: ['./mat-expansion.component.scss'],
})
export class MatExpansionComponent implements OnInit {
  expansionForm!: FormGroup;
  assignmentControls = new Array(6);
  // addtlAssignmentForm!: FormGroup;
  panelOpenState: boolean[] = [];
  assignmentCount = 0;

  assignmentSelectListRef = [
    { id: 1, name: 'assignment 1' },
    { id: 2, name: 'assignment 2' },
    { id: 3, name: 'assignment 3' },
    { id: 4, name: 'assignment 4' },
    { id: 5, name: 'assignment 5' },
    { id: 6, name: 'assignment 6' },
  ];

  constructor(private fb: FormBuilder) {}

  createExpansionForm(): void {
    this.expansionForm = this.fb.group({});
  }

  addAssignmentsControl(val: number) {
    if(this.panelOpenState[val] === false) {
      this.panelOpenState[val] = true;

      this.expansionForm.addControl(`${val}`, this.fb.group({
        name: [''],
        phoneNumber: ['']
      }));

    } else {
      this.panelOpenState[val] = false;
      console.log('openedStates: ', this.panelOpenState);
      this.expansionForm.removeControl(`${val}`);
    }
  }

  checkboxChange(e: MatCheckboxChange, i: number) {
    console.log('CheckboxChange: ', e);
    this.addAssignmentsControl(i);
  }

  onExpandedFormSubmit(): void {
    console.log(this.expansionForm.value);
  }

  ngOnInit(): void {
    this.createExpansionForm();
    this.assignmentSelectListRef.forEach(assignment => 
      this.panelOpenState.push(false)
    );
    console.log(this.panelOpenState);
  }
}
