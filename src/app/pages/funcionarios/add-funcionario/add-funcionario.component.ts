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
  readonly vale = new FormControl(0, []);
  readonly farmacia = new FormControl(0, []);
  readonly antecipacao = new FormControl(0, []);
  readonly producao = new FormControl(0, []);
  readonly sf = new FormControl(0, []);
  readonly cesta = new FormControl(0, []);
  readonly atestado = new FormControl(0, []);
  readonly inss = new FormControl(0, []);
  readonly extra = new FormControl(0, []);
  readonly total = new FormControl({ value: 0, disabled: true }, []);
  readonly depositado = new FormControl(0, []);
  readonly obsHolerite = new FormControl('', []);
  readonly obsEscritorio = new FormControl('', []);
  readonly obsAntecipacao = new FormControl('', []);
  
  errorCodigoMessage = signal('');
  errorNomeMessage = signal('');
  errorEquipeMessage = signal('');
  
  readonly funcionarioForm = new FormGroup({
    codigo: this.codigo,
    nome: this.nome,
    equipe: this.equipe,
    vale: this.vale,
    farmacia: this.farmacia,
    antecipacao: this.antecipacao,
    producao: this.producao,
    sf: this.sf,
    cesta: this.cesta,
    atestado: this.atestado,
    inss: this.inss,
    extra: this.extra,
    total: this.total,
    depositado: this.depositado,
    obsHolerite: this.obsHolerite,
    obsEscritorio: this.obsEscritorio,
    obsAntecipacao: this.obsAntecipacao
  });

  constructor() {
    merge(this.codigo.statusChanges, this.codigo.valueChanges)
      .pipe(takeUntilDestroyed())
      .subscribe(() => this.updateErrorCodigoMessage());
    merge(this.nome.statusChanges, this.nome.valueChanges)
      .pipe(takeUntilDestroyed())
      .subscribe(() => this.updateErrorNomeMessage());
    merge(this.equipe.statusChanges, this.equipe.valueChanges)
      .pipe(takeUntilDestroyed())
      .subscribe(() => this.updateErrorEquipeMessage());
    merge(this.vale.valueChanges, this.farmacia.valueChanges, this.antecipacao.valueChanges, 
      this.producao.valueChanges, this.sf.valueChanges, this.cesta.valueChanges, this.atestado.valueChanges, 
      this.inss.valueChanges, this.extra.valueChanges)
      .pipe(takeUntilDestroyed())
      .subscribe(() => this.calculateTotal());
  }

  calculateTotal(): void {
    this.total.setValue((this.vale.value ?? 0) + (this.farmacia.value ?? 0) + (this.antecipacao.value ?? 0) + 
      (this.producao.value ?? 0) + (this.sf.value ?? 0) + (this.cesta.value ?? 0) + (this.atestado.value ?? 0) + 
      (this.inss.value ?? 0) + (this.extra.value ?? 0));
    console.log(this.funcionarioForm.value);
  }

  updateErrorEquipeMessage(): void {
    if (this.equipe.hasError('required')) {
      this.errorEquipeMessage.set('Preencha um valor');
    } else {
      this.errorEquipeMessage.set('');
    }
  }

  updateErrorNomeMessage(): void {
    if (this.nome.hasError('required')) {
      this.errorNomeMessage.set('Preencha um valor');
    } else {
      this.errorNomeMessage.set('');
    }
  }

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
      this.updateErrorNomeMessage();
      this.updateErrorEquipeMessage();
      return;
    }
    console.log(this.funcionarioForm.value);
  }

}
