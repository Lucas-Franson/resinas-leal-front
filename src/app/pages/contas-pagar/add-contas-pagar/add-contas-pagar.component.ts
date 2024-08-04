import { Component, WritableSignal, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { merge } from 'rxjs';

@Component({
  selector: 'app-add-contas-pagar',
  standalone: true,
  imports: [
    MatFormFieldModule,MatInputModule,MatButtonModule,MatDividerModule,MatCardModule,FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './add-contas-pagar.component.html',
  styleUrl: './add-contas-pagar.component.css'
})
export class AddContasPagarComponent {

  readonly fornecedor = new FormControl('', [Validators.required]);
  readonly vencimento = new FormControl('', []);
  readonly valor = new FormControl('', []);
  readonly dataEmissao = new FormControl('', []);
  readonly noDocumento = new FormControl('', []);
  readonly historico = new FormControl('', []);
  readonly categoria = new FormControl('', []);
  readonly ocorrencia = new FormControl('', []);
  
  readonly contasPagarForm = new FormGroup({});

  errorFornecedorMessage = signal('');

  constructor() {
    merge(this.fornecedor.valueChanges)
      .pipe(takeUntilDestroyed())
      .subscribe(() => this.updateErrorEquipeMessage(this.fornecedor, this.errorFornecedorMessage));
  }

  updateErrorEquipeMessage(control:FormControl, message:WritableSignal<string>): void {
    if (control.hasError('required')) {
      message.set('Preencha um valor');
    } else {
      message.set('');
    }
  }

  onSubmit() {

  }

}
