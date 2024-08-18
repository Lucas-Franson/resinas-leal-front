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
  selector: 'app-add-pedido',
  standalone: true,
  imports: [
    MatFormFieldModule,MatInputModule,MatButtonModule,MatDividerModule,MatCardModule,FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './add-pedido.component.html',
  styleUrl: './add-pedido.component.css'
})
export class AddPedidoComponent {
  readonly produto = new FormControl('', [Validators.required]);
  readonly codigo = new FormControl('', [Validators.required]);
  readonly preco = new FormControl('', []);
  readonly custo = new FormControl('', []);
  
  readonly pedidoForm = new FormGroup({});

  errorProdutoMessage = signal('');
  errorCodigoMessage = signal('');

  constructor() {
    merge(this.produto.valueChanges)
      .pipe(takeUntilDestroyed())
      .subscribe(() => this.updateErrorEquipeMessage(this.produto, this.errorProdutoMessage));
    merge(this.codigo.valueChanges)
      .pipe(takeUntilDestroyed())
      .subscribe(() => this.updateErrorEquipeMessage(this.codigo, this.errorCodigoMessage));
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
