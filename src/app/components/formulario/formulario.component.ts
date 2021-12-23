import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  @Output() paramentroSeleccionado = new EventEmitter<any>();

  categoriaSeleccionada = 'general';
  paisSeleccionado = 'mx';

  categorias: any[] = [
    {value: 'general', nombre: 'General' },
    {value: 'business', nombre: 'Negocios'},
    {value: 'entertainment', nombre: 'Entretenimiento'},
    {value: 'health', nombre: 'Salud'},
    {value: 'science', nombre: 'Ciencia'},
    {value: 'sports', nombre: 'Deportes'},
    {value: 'technology', nombre: 'Tecnologia'}
  ]

  paises: any[] = [
    {value:'default', nombre: 'Default'},
    {value: 'ar', nombre: 'Argentina'},
    {value: 'br', nombre: 'Brasil'},
    {value: 'ca', nombre: 'Canada'},
    {value: 'fr', nombre: 'Francia'},
    {value: 'mx', nombre: 'Mexico'},
    {value: 'hu', nombre: 'Hungria'},
    {value: 'gb', nombre: 'Reino Unido'},
    {value: 'ru', nombre: 'Rusia'}
  ]

  constructor() { }

  ngOnInit(): void {
  }

  buscarNoticia(){
    const PARAMETROS = {
      categoria: this.categoriaSeleccionada,
      pais: this.paisSeleccionado
    }

    this.paramentroSeleccionado.emit(PARAMETROS);
  }
}
