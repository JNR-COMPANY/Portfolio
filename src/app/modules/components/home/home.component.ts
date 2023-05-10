import { Component, ViewChild,HostListener, ElementRef, OnInit } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
import { Contato } from '../form/contato';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0}),
        animate('4500ms', style({ opacity: 1 }))
      ])
    ]),
    trigger('slideInFromBottom', [
      transition(':enter', [
        style({ transform: 'translateY(100%)' }),
        animate('4000ms ease-in', style({ transform: 'translateY(0%)' }))
      ])
    ])
  ]  
  
})






export class HomeComponent implements OnInit {
  textEmail = '';
  line:boolean = false;
 
  isHovered = false;


  constructor(private elementRef: ElementRef) {}


  
 


  addClass() {
    this.isHovered = true;
  }

  removeClass() {
    this.isHovered = false;
  }


  ngOnInit() {
    setTimeout(() => {
      this.line = true;
      this.writeText();
    }, 3800);
  }



  writeText() {
    const message = 'joao_rigo@outlook.com';
    let i = 0;
    let t = 0;
    const interval = setInterval(() => {
      this.textEmail += message.charAt(i);
      i++;
      t++;
      if (i > message.length) {
        clearInterval(interval);
      }
      
    }, 100);
  }


  rolarParaSecao() {
    const minhaSecao = this.elementRef.nativeElement.querySelector('#secao-3');
    minhaSecao.scrollIntoView({ behavior: 'smooth' });
  }


  

  

}

