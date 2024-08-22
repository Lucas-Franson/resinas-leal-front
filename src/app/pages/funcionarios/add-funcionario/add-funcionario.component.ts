import { Component, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { merge } from 'rxjs';

@Component({
  selector: 'app-add-funcionario',
  standalone: true,
  imports: [
    MatFormFieldModule,MatInputModule,MatButtonModule,MatDividerModule,MatCardModule,FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './add-funcionario.component.html',
  styleUrl: './add-funcionario.component.css'
})
export class AddFuncionarioComponent {
  
  readonly codigo = new FormControl('', [Validators.required]);
  readonly nome = new FormControl('', [Validators.required]);
  readonly equipe = new FormControl('', [Validators.required]);
  readonly dataNascimento = new FormControl(0, []);
  readonly contaCorrente = new FormControl(0, []);
  readonly agencia = new FormControl(0, []);
  readonly nomeBanco = new FormControl('', []);
  readonly logradouro = new FormControl('', []);
  readonly bairro = new FormControl('', []);
  readonly cidade = new FormControl('', []);
  readonly observacao = new FormControl('', []);
  
  errorCodigoMessage = signal('');
  errorNomeMessage = signal('');
  errorEquipeMessage = signal('');
  
  readonly funcionarioForm = new FormGroup({
    codigo: this.codigo,
    nome: this.nome,
    equipe: this.equipe,
    dataNascimento: this.dataNascimento,
    contaCorrente: this.contaCorrente,
    agencia: this.agencia,
    nomeBanco: this.nomeBanco,
    logradouro: this.logradouro,
    bairro: this.bairro,
    cidade: this.cidade,
    observacao: this.observacao
  });
  
  updateErrorCodigoMessage(): void {
    if (this.codigo.hasError('required')) {
      this.errorCodigoMessage.set('Preencha um valor');
    } else {
      this.errorCodigoMessage.set('');
    }
  }

  onSubmit() {
    if (this.funcionarioForm.invalid) {
      this.updateErrorCodigoMessage();
      return;
    }
    console.log(this.funcionarioForm.value);
  }

}
