import { Component } from '@angular/core';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent {

  isLoading = true;

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    // Inicia a carga do conteúdo
    this.isLoading = true;

    // Simula uma carga de 3 segundos
    setTimeout(() => {
      // Finaliza a carga do conteúdo
      this.isLoading = false;
    }, 3000);
  }

}
