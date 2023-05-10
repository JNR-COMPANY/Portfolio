import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(private elementRef: ElementRef) {}

  rolarContato() {
    const minhaSecao = document.getElementById('secao-4');
    if (minhaSecao) {
      minhaSecao.scrollIntoView({ behavior: 'smooth' });
    }
  }

  rolarBanner() {
    const minhaSecao = document.getElementById('secao-1');
    if (minhaSecao) {
      minhaSecao.scrollIntoView({ behavior: 'smooth' });
    }
  }

  rolarHabilidades() {
    const minhaSecao = document.getElementById('secao-3');
    if (minhaSecao) {
      minhaSecao.scrollIntoView({ behavior: 'smooth' });
    }
  }

  rolarProjetos() {
    const minhaSecao = document.getElementById('about');
    if (minhaSecao) {
      minhaSecao.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
