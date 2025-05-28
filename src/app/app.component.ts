import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { TemplatefromComponent } from './templatefrom/templatefrom.component';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';






@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FormsModule,TemplatefromComponent,ReactiveformComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'contactdetails';
}
