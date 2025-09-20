import { Injectable } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class SeoService {

  // Inyectamos las herramientas de Angular para manipular el <head> del HTML.
  constructor(private title: Title, private meta: Meta) { }

  /**
   * Actualiza el título y los metatags de la página actual.
   * @param title El nuevo título para la página.
   * @param description La nueva descripción para Google.
   * @param imageUrl La URL completa de la imagen para compartir en redes sociales.
   */
  updateTags(title: string, description: string, imageUrl: string): void {
    // 1. Actualiza el título de la pestaña del navegador.
    this.title.setTitle(title);

    // 2. Actualiza la meta descripción (para los resultados de Google).
    this.meta.updateTag({ name: 'description', content: description });

    // 3. Actualiza las etiquetas Open Graph (para cuando compartes en redes sociales).
    this.meta.updateTag({ property: 'og:title', content: title });
    this.meta.updateTag({ property: 'og:description', content: description });
    this.meta.updateTag({ property: 'og:image', content: imageUrl });
    this.meta.updateTag({ property: 'og:type', content: 'website' });
  }
}
