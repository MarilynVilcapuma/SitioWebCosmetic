import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Meta, Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

interface Product {
  id: number;
  name: string;
  brand: string;
  price: number;
  originalPrice?: number;
  image: string;
  isNew: boolean;
  category: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home implements OnInit {
  categories = [
    'Inicio', 'Marcas', 'Cuidado de la Piel', 'Dermocosmética', 
    'Cabello', 'Maquillaje', 'Cuidado corporal', 'Accesorios', 
    'Fragancias', 'Descuentos', 'Sets & Regalos'
  ];

  featuredProducts: Product[] = [
    {
      id: 1,
      name: 'Tratamiento Para Labios',
      brand: 'Laneige',
      price: 95.90,
      image: 'https://aruma.vtexassets.com/arquivos/ids/212489-800-auto?v=638924384213870000&width=800&height=auto&aspect=true',
      isNew: true,
      category: 'Cuidado de la Piel'
    },
    {
      id: 2,
      name: 'Labial Superstay Vinyl Ink',
      brand: 'Maybelline',
      price: 69.90,
      image: 'https://aruma.vtexassets.com/arquivos/ids/212058-800-auto?v=638918129439330000&width=800&height=auto&aspect=true',
      isNew: true,
      category: 'Maquillaje'
    },
    {
      id: 3,
      name: 'Fragancia Agatha Ruiz De La Prada',
      brand: 'Agatha ruiz de la prada',
      price: 99.90,
      image: 'https://aruma.vtexassets.com/arquivos/ids/211935-800-auto?v=638936493586900000&width=800&height=auto&aspect=true',
      isNew: true,
      category: 'Fragancias'
    },
    {
      id: 4,
      name: 'Paleta De Sombras Hello Kitty',
      brand: 'Petrizzio',
      price: 49.90,
      image: 'https://aruma.vtexassets.com/arquivos/ids/211357-800-auto?v=638906928288430000&width=800&height=auto&aspect=true',
      isNew: true,
      category: 'Maquillaje'
    },
    {
      id: 5,
      name: 'Serum Aha 30% + Bha 4%',
      brand: 'Revox',
      price: 29.90,
      image: 'https://aruma.vtexassets.com/arquivos/ids/212252-800-auto?v=638924254018200000&width=800&height=auto&aspect=true',
      isNew: true,
      category: 'Cuidado de la Piel'
    },
    {
      id: 6,
      name: 'Rubor Sunkisser Matte 31 Hot Pink Summer Maybelline',
      brand: 'MAYBELLINE',
      price: 49.90,
      image: 'https://aruma.vtexassets.com/arquivos/ids/211320-300-300?v=638906317551970000&width=300&height=300&aspect=true',
      isNew: true,
      category: 'Cuidado de la Piel'
    },
    {
      id: 7,
      name: 'Tónico Glow Replenishing Rice Milk Beauty Of Joseon',
      brand: 'BEAUTY OF JOSEON',
      price: 115.00,
      image: 'https://aruma.vtexassets.com/arquivos/ids/208021-800-auto?v=638851831282000000&width=800&height=auto&aspect=true',
      isNew: true,
      category: 'Cuidado de la Piel'
    },
    {
      id: 8,
      name: 'Pop Lip And Cheek Oil Pink',
      brand: 'CLINIQUE',
      price: 135.00,
      image: 'https://aruma.vtexassets.com/arquivos/ids/211488-800-auto?v=638912080984570000&width=800&height=auto&aspect=true',
      isNew: true,
      category: 'Cuidado de la Piel'
    }
  ];

  constructor(private meta: Meta, private title: Title, private router: Router) {}

  ngOnInit() {
    this.setupSEO();
  }

  private setupSEO() {
    this.title.setTitle('Aruma - Cosméticos y Belleza Online | Los Mejores Productos de Belleza');
    
    this.meta.updateTag({ 
      name: 'description', 
      content: 'Descubre los mejores productos de belleza en Aruma. Maquillaje, cuidado de la piel, fragancias y más. Envío gratis por compras mayores a S/199.' 
    });
    
    this.meta.updateTag({ 
      name: 'keywords', 
      content: 'cosméticos, maquillaje, cuidado de la piel, fragancias, belleza, Laneige, Maybelline, Revox' 
    });
    
    this.meta.updateTag({ 
      property: 'og:title', 
      content: 'Aruma - Tu tienda de belleza online' 
    });
    
    this.meta.updateTag({ 
      property: 'og:description', 
      content: 'Los mejores productos de belleza con envío gratis. ¡Descubre las últimas tendencias!' 
    });
    
    this.meta.updateTag({ 
      property: 'og:image', 
      content: 'https://aruma.pe/og-image.jpg' 
    });
    
    this.meta.updateTag({ 
      property: 'og:type', 
      content: 'website' 
    });
  }

  // Método para navegar al detalle del producto
  navigateToProduct(productId: number) {
    this.router.navigate(['/product', productId]);
  }

  addToFavorites(product: Product, event: Event) {
    event.stopPropagation(); // Evita que se active el click del card
    console.log('Agregado a favoritos:', product.name);
  }

  addToCart(product: Product, event: Event) {
    event.stopPropagation(); // Evita que se active el click del card
    console.log('Agregado al carrito:', product.name);
  }

  scrollCarousel(direction: 'prev' | 'next') {
    const container = document.querySelector('.products-grid') as HTMLElement;
    if (container) {
      const scrollAmount = 300;
      const scrollLeft = direction === 'next' ? scrollAmount : -scrollAmount;
      container.scrollBy({ left: scrollLeft, behavior: 'smooth' });
    }
  }
}