

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-templatefrom',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './templatefrom.component.html',
  styleUrl: './templatefrom.component.css'
})
export class TemplatefromComponent {
  formData = {
    name: '',
    email: '',
    message: ''
  };

  submitted = false;

  onSubmit(form: any) {
    if (form.valid) {
      this.submitted = true;
      console.log('Form Data: Send', this.formData);
    }
  }
}
