import { FormEmails } from './../../models/formfield';
import { GeocodingService } from './../../common/services/geocode.service';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { uniq } from 'lodash';


@Component({
  selector: 'app-formfield',
  templateUrl: './formfield.component.html',
  styleUrls: ['./formfield.component.scss'],
})
export class FormfieldComponent implements OnInit {
  isHidePassword = true;
  isMatchError = false;

  testForm!: FormGroup;

  coordinates: google.maps.LatLngLiteral | null = null;

  constructor(
    private fb: FormBuilder,
    private geocodeService: GeocodingService
  ) {}

  createForm(): void {
    this.testForm = this.fb.group({
      search: ['', Validators.required],
      password: ['', Validators.required],
      streetAddress: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      zipCode: ['', Validators.required],
      latitude: ['', Validators.required],
      longitude: ['', Validators.required],
      email: [''],
      emails: this.fb.array([]),
    });
  }

  get emails(): FormArray {
    return this.testForm.controls['emails'] as FormArray;
  }
  addEmailsControl() {
    const addtlEmail = new FormControl('', [
      Validators.required,
      Validators.email,
    ]);
    if (!this.checkForEmailMatch()) {
      this.emails.push(addtlEmail);
    }
  }
  removeEmailsControl(index: number) {
    this.emails.removeAt(index);
  }
  checkForEmailMatch(): boolean {
    const addedEmails = [];
    const emailFormValue = this.testForm.value as FormEmails;
    addedEmails.push(emailFormValue.email);
    emailFormValue.emails.forEach((email) => {
      addedEmails.push(email);
    });
    const uniqueAddedEmails = uniq(addedEmails);
    if (uniqueAddedEmails.length !== addedEmails.length) {
      this.isMatchError = true;
      return true;
    } else {
      this.isMatchError = false;
      return false;
    }
  }

  toggleHide(): void {
    console.log('toggleHide Ran');
    if (this.isHidePassword === true) {
      this.isHidePassword = false;
    } else {
      this.isHidePassword = true;
    }
  }

  getCoordinates(): void {
    const addressData = Object.values(this.testForm.value).join(',');
    this.geocodeService.getLocation(addressData).subscribe((data) => {
      console.log('Data: ', data);
      const latitude = data.results[0].geometry.location.lat;
      const longitude = data.results[0].geometry.location.lng;
      this.coordinates = {
        lat: latitude as unknown as number,
        lng: longitude as unknown as number,
      };
    });
  }

  ngOnInit(): void {
    this.createForm();
  }
}
