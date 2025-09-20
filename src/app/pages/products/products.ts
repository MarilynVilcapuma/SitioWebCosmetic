import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';

interface Product {
  id: number;
  name: string;
  brand: string;
  price: number;
  originalPrice?: number;
  image: string;
  isNew: boolean;
  category: string;
  description?: string;
  howToUse?: string;
  specifications?: string;
  ref?: string;
  additionalImages?: string[];
}

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.html',
  styleUrl: './products.css'
})
export class Products implements OnInit {
  product: Product | null = null;
  quantity = 1;
  currentImageIndex = 0;
  
  // Simulamos una base de datos de productos
  private products: Product[] = [
    {
      id: 1,
      name: 'Tratamiento Para Labios',
      brand: 'Laneige',
      price: 95.90,
      image: 'https://aruma.vtexassets.com/arquivos/ids/212489-800-auto?v=638924384213870000&width=800&height=auto&aspect=true',
      isNew: true,
      category: 'Cuidado de la Piel',
      ref: '103016',
      description: 'Consigue un brillo natural y radiante con este tratamiento para labios de Laneige. Un producto que combina las propiedades de un labial y un bronceador. Aporta luminosidad a tu rostro, resaltando tus facciones y creando un efecto "buena cara" instantáneo.',
      howToUse: 'Aplica una pequeña cantidad en los labios limpios y secos. Extiende uniformemente.',
      specifications: 'Fórmula libre de parabenos. Enriquecida con vitamina E.'
    },
    {
      id: 2,
      name: 'Labial Superstay Vinyl Ink',
      brand: 'Maybelline',
      price: 69.90,
      image: 'https://aruma.vtexassets.com/arquivos/ids/212058-800-auto?v=638918129439330000&width=800&height=auto&aspect=true',
      isNew: true,
      category: 'Maquillaje',
      ref: '103017',
      description: 'Labial de larga duración con acabado vinílico brillante. Proporciona color intenso hasta por 16 horas.',
      howToUse: 'Aplica directamente en los labios desde el centro hacia las comisuras.',
      specifications: 'Resistente al agua. No transfiere. Fórmula de larga duración.'
    },
    {
      id: 6,
      name: 'Rubor Sunkisser Matte 31 Hot Pink Summer Maybelline',
      brand: 'MAYBELLINE',
      price: 49.90,
      image: 'https://aruma.vtexassets.com/arquivos/ids/211320-300-300?v=638906317551970000&width=300&height=300&aspect=true',
      isNew: true,
      category: 'Maquillaje',
      ref: '103016',
      description: 'Consigue un brillo natural y radiante con Sunkisser de Maybelline New York, un producto que combina las propiedades de un rubor y un bronceador. Aporta luminosidad a tu rostro, resaltando tus facciones y creando un efecto "buena cara" instantáneo. Su fórmula ligera, enriquecida con vitamina E, se difumina fácilmente y se siente cómoda en la piel hasta por 12 horas. Sunkisser te ofrece un brillo saludable y duradero, como si acabaras de volver de vacaciones. Gracias a su práctico aplicador XXL, puedes lograr el look deseado en tan solo tres toques, facilitando una aplicación rápida y precisa. Ideal para conseguir un look luminoso y natural en cualquier ocasión.',
      howToUse: 'Aplica con movimientos circulares en las mejillas, frente y mentón para un look natural.',
      specifications: 'Enriquecido con vitamina E. Larga duración hasta 12 horas. Aplicador XXL incluido.'
    }
  ];

  constructor(
    private route: ActivatedRoute, 
    private router: Router,
    private meta: Meta,
    private title: Title
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      const productId = +params['id'];
      this.loadProduct(productId);
    });
  }

  private loadProduct(id: number) {
    this.product = this.products.find(p => p.id === id) || null;
    
    if (this.product) {
      this.setupSEO();
    } else {
      // Si no encuentra el producto, redirige al home
      this.router.navigate(['/']);
    }
  }

  private setupSEO() {
    if (this.product) {
      this.title.setTitle(`${this.product.name} - ${this.product.brand} | Aruma`);
      this.meta.updateTag({ 
        name: 'description', 
        content: this.product.description || `Compra ${this.product.name} de ${this.product.brand} en Aruma` 
      });
    }
  }

  increaseQuantity() {
    this.quantity++;
  }

  decreaseQuantity() {
    if (this.quantity > 1) {
      this.quantity--;
    }
  }

  addToCart() {
    console.log(`Agregado al carrito: ${this.product?.name}, cantidad: ${this.quantity}`);
    // Aquí implementarías la lógica para agregar al carrito
  }

  goHome() {
    this.router.navigate(['/']);
  }

  nextImage() {
    if (this.product?.additionalImages) {
      this.currentImageIndex = (this.currentImageIndex + 1) % (this.product.additionalImages.length + 1);
    }
  }

  prevImage() {
    if (this.product?.additionalImages) {
      const totalImages = this.product.additionalImages.length + 1;
      this.currentImageIndex = (this.currentImageIndex - 1 + totalImages) % totalImages;
    }
  }

  getCurrentImage(): string {
    if (!this.product) return '';
    if (this.currentImageIndex === 0 || !this.product.additionalImages) {
      return this.product.image;
    }
    return this.product.additionalImages[this.currentImageIndex - 1];
  }
}