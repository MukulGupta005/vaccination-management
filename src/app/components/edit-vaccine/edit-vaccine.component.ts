import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit, ViewChild, NgZone } from '@angular/core';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material/chips';
import { ApiService } from '../../shared/api.service';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

export interface Subject {
  name: string;
}

@Component({
  selector: 'app-edit-vaccine',
  templateUrl: './edit-vaccine.component.html',
  styleUrls: ['./edit-vaccine.component.css']
})

export class EditvaccineComponent implements OnInit {
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  @ViewChild('chipList', { static: true }) chipList;
  @ViewChild('resetvaccineForm', { static: true }) myNgForm;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  vaccineForm: FormGroup;
  subjectArray: Subject[] = [];
  SectioinArray: any = ['A', 'B', 'C', 'D', 'E'];

  ngOnInit() {
    this.updateBookForm();
  }

  constructor(
    public fb: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private actRoute: ActivatedRoute,
    private vaccineApi: ApiService
  ) { 
    var id = this.actRoute.snapshot.paramMap.get('id');
    this.vaccineApi.Getvaccine(id).subscribe(data => {
      console.log(data.subjects)
      this.subjectArray = data.subjects;
      this.vaccineForm = this.fb.group({
        vaccine_name: [data.vaccine_name, [Validators.required]],
        vaccine_email: [data.vaccine_email, [Validators.required]],
        section: [data.section, [Validators.required]],
        subjects: [data.subjects],
        dob: [data.dob, [Validators.required]],
        gender: [data.gender]
      })      
    })    
  }

  /* Reactive book form */
  updateBookForm() {
    this.vaccineForm = this.fb.group({
      vaccine_name: ['', [Validators.required]],
      vaccine_email: ['', [Validators.required]],
      section: ['', [Validators.required]],
      subjects: [this.subjectArray],
      dob: ['', [Validators.required]],
      gender: ['Male']
    })
  }

  /* Add dynamic languages */
  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;
    // Add language
    if ((value || '').trim() && this.subjectArray.length < 5) {
      this.subjectArray.push({ name: value.trim() })
    }
    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  /* Remove dynamic languages */
  remove(subject: Subject): void {
    const index = this.subjectArray.indexOf(subject);
    if (index >= 0) {
      this.subjectArray.splice(index, 1);
    }
  }

  /* Date */
  formatDate(e) {
    var convertDate = new Date(e.target.value).toISOString().substring(0, 10);
    this.vaccineForm.get('dob').setValue(convertDate, {
      onlyself: true
    })
  }

  /* Get errors */
  public handleError = (controlName: string, errorName: string) => {
    return this.vaccineForm.controls[controlName].hasError(errorName);
  }

  /* Update book */
  updatevaccineForm() {
    console.log(this.vaccineForm.value)
    var id = this.actRoute.snapshot.paramMap.get('id');
    if (window.confirm('Are you sure you want to update?')) {
      this.vaccineApi.Updatevaccine(id, this.vaccineForm.value).subscribe( res => {
        this.ngZone.run(() => this.router.navigateByUrl('/vaccines-list'))
      });
    }
  }
  
}
