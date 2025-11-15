import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-input-section',
  imports: [ReactiveFormsModule],
  templateUrl: './user-input-section.html',
  styleUrl: './user-input-section.css',
})
export class UserInputSection {
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      topic: [''],
      numPapers: [5],
    });
  }

  get topic() {
    return this.form.get('topic');
  }

  get numPapers() {
    return this.form.get('numPapers');
  }

  onSubmit() {
    // Handle form submission
    console.log(this.form.value);
  }
}
