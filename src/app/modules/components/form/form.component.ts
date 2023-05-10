import { Component, Output, EventEmitter } from '@angular/core';
import { Contato } from './contato';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {
  @Output() onSubmit = new EventEmitter<Contato>

  formContact!: FormGroup

  public textoBotao = 'Enviar';

  

  ngOnInit() : void {
    this.formContact = new FormGroup({
      nome: new FormControl('', [Validators.required]),
      phone: new FormControl('', [Validators.required]),
      email: new FormControl('',),
      message: new FormControl('', [Validators.required]),

    })
  }

  get name(){
    return this.formContact.get('nome')!
  }

  get phone(){
    return this.formContact.get('phone')!
  }

  get message(){
    return this.formContact.get('message')!
  }

  public sendEmail(e: Event) {
    e.preventDefault();
  
    const nome = this.formContact.get('nome')!.value;
    const email = this.formContact.get('email')!.value;
    const phone = this.formContact.get('phone')!.value;
    const message = this.formContact.get('message')!.value;
  
    const templateParams = {
      from_name: nome,
      from_email: email,
      from_phone: phone,
      from_message: message
    };
  
    const button = document.querySelector('button[type="submit"]');
    if (button) {
      button.setAttribute('disabled', 'true');
      button.textContent = 'Enviando...';
    }
  
    emailjs.send('service_639sqvd', 'template_zr36ias', templateParams, 'zHKiJRseMUzaEOLzI')
      .then((result: EmailJSResponseStatus) => {
        console.log(result.text);
        setTimeout(() => {
          this.formContact.reset(); // Redefinir os valores do formulário
        }, 1000);

        if (button) {
          button.textContent = 'Enviado!';
        }

        setTimeout(() => {
          if (button) {
            button.textContent = 'Enviar';
          }// Redefinir os valores do formulário
        }, 4000);

        
      }, (error) => {
        console.log(error.text);
        
      });

      

      
  }
  
  
  

}
