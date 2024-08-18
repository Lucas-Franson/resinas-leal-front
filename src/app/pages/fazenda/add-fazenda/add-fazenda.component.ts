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
  selector: 'app-add-fazenda',
  standalone: true,
  imports: [
    MatFormFieldModule,MatInputModule,MatButtonModule,MatDividerModule,MatCardModule,FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './add-fazenda.component.html',
  styleUrl: './add-fazenda.component.css'
})
export class AddFazendaComponent {
  readonly proprietario = new FormControl('', [Validators.required]);
  readonly nome = new FormControl('', [Validators.required]);
  readonly doc = new FormControl('', []);

  readonly fazendaForm = new FormGroup({});

  errorProprietarioMessage = signal('');
  errorNomeMessage = signal('');
  srcResult = "";

  constructor() {
    merge(this.proprietario.valueChanges)
      .pipe(takeUntilDestroyed())
      .subscribe(() => this.updateErrorEquipeMessage(this.proprietario, this.errorProprietarioMessage));
    merge(this.nome.valueChanges)
      .pipe(takeUntilDestroyed())
      .subscribe(() => this.updateErrorEquipeMessage(this.nome, this.errorNomeMessage));
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

  onFileSelected() {
    const inputNode: any = document.querySelector('#file');
  
    if (typeof (FileReader) !== 'undefined') {
      const reader = new FileReader();
  
      reader.onload = (e: any) => {
        this.srcResult = e.target.result;
      };
  
      reader.readAsArrayBuffer(inputNode.files[0]);
    }
  }

}
