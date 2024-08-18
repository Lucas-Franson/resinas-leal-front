import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { Router } from '@angular/router';
import { merge } from 'rxjs';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    MatCardModule, MatIconModule, MatFormFieldModule, MatInputModule, FormsModule, ReactiveFormsModule,
    MatButtonModule
  ],
  providers: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent {

  readonly email = new FormControl('', [Validators.required, Validators.email]);
  readonly password = new FormControl('', [Validators.required, Validators.minLength(8)]);
  readonly loginForm = new FormGroup({
    email: this.email,
    password: this.password
  });

  errorEmailMessage = signal('');
  errorPasswordMessage = signal('');

  constructor(private router: Router) {
    merge(this.email.statusChanges, this.email.valueChanges)
      .pipe(takeUntilDestroyed())
      .subscribe(() => this.updateErrorEmailMessage());
    merge(this.password.statusChanges, this.password.valueChanges)
      .pipe(takeUntilDestroyed())
      .subscribe(() => this.updateErrorPasswordMessage());
  }

  hide = signal(true);
  clickEvent(event: MouseEvent) {
    this.hide.set(!this.hide());
    event.stopPropagation();
  }

  updateErrorEmailMessage() {
    if (this.email.hasError('required')) {
      this.errorEmailMessage.set('Preencha o campo de email');
    } else if (this.email.hasError('email')) {
      this.errorEmailMessage.set('Email inválido');
    } else {
      this.errorEmailMessage.set('');
    }
  }

  updateErrorPasswordMessage() {
    if (this.password.hasError('required')) {
      this.errorPasswordMessage.set('Preencha o campo de senha');
    } else if (this.password.hasError('minlength')) {
      this.errorPasswordMessage.set('Senha deve ter no mínimo 8 caracteres');
    } else {
      this.errorPasswordMessage.set('');
    }
  }

  onSubmit() {
    
    if (this.loginForm.invalid) {
      this.updateErrorEmailMessage();
      this.updateErrorPasswordMessage();
      return;
    }

    this.router.navigate(['/sistema/dashboard']);

  }

}
