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
  selector: 'app-add-estoque',
  standalone: true,
  imports: [
    MatFormFieldModule,MatInputModule,MatButtonModule,MatDividerModule,MatCardModule,FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './add-estoque.component.html',
  styleUrl: './add-estoque.component.css'
})
export class AddEstoqueComponent {
  
  readonly produto = new FormControl('', [Validators.required]);
  readonly codigo = new FormControl('', [Validators.required]);
  readonly valor = new FormControl(0, []);
  readonly custo = new FormControl(0, []);
  readonly estoqueFisico = new FormControl(0, []);
  readonly unidade = new FormControl(0, []);
  
  errorCodigoMessage = signal('');
  errorNomeMessage = signal('');
  errorEquipeMessage = signal('');
  
  readonly estoqueForm = new FormGroup({
    codigo: this.produto,
    nome: this.codigo,
    equipe: this.valor,
    vale: this.custo,
    farmacia: this.estoqueFisico,
    antecipacao: this.unidade
  });

  updateErrorEquipeMessage(): void {
    if (this.produto.hasError('required')) {
      this.errorEquipeMessage.set('Insira um produto');
    } else {
      this.errorEquipeMessage.set('');
    }
  }

  updateErrorNomeMessage(): void {
    if (this.codigo.hasError('required')) {
      this.errorNomeMessage.set('Insira um código para o produto');
    } else {
      this.errorNomeMessage.set('');
    }
  } 

  onSubmit() {
    if (this.estoqueForm.invalid) {
      this.updateErrorNomeMessage();
      this.updateErrorEquipeMessage();
      return;
    }
    console.log(this.estoqueForm.value);
  }

}
