import { RenderMode, ServerRoute } from '@angular/ssr';
import { ActivatedRouteSnapshot } from '@angular/router';

// Suponiendo que las rutas dinámicas tienen un parámetro 'id'
export const getPrerenderParams = (): Promise<Record<string, string>[]> => {
  return Promise.resolve([
    // Asegúrate de que esta lista de objetos refleje los parámetros correctos.
    // Aquí debes definir los parámetros a utilizar en la prerenderización
    { id: '1' },
    { id: '2' }, // Ejemplo de diferentes valores para prerenderizar
    { id: '3' }
  ]);
};

// Rutas de prerenderización
export const serverRoutes: ServerRoute[] = [
  {
    path: '**',
    renderMode: RenderMode.Prerender
  },
  {
    path: 'product/:id',
    renderMode: RenderMode.Prerender,
    getPrerenderParams // Usamos la función definida anteriormente
  }
];

