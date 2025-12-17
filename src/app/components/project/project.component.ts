import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrl: './project.component.css'
})
export class ProjectComponent {
  // Datos básicos de la card
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() image: string = '';
  @Input() imageAlt: string = '';

  // Botón principal (siempre visible)
  @Input() primaryButtonText: string = '';
  @Input() primaryButtonLink: string = '';
  @Input() primaryButtonIcon: string = '';

  // Botón secundario (opcional)
  @Input() secondaryButtonText: string = '';
  @Input() secondaryButtonLink: string = '';
  @Input() secondaryButtonIcon: string = '';
}
