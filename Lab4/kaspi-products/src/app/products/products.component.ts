import { Component } from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  shareProduct(link: string) {
    let shareUrl = `https://t.me/share/url?url=${encodeURIComponent(link)}`;
    window.open(shareUrl, '_self');
  }

  productList: Product[] = [
    {
      id: 1,
      image: 'assets/img-1.png',
      name: 'Wireless Mouse черный',
      description: 'Общие характеристики',
      rating: 4.9,
      link: 'https://kaspi.kz/shop/p/wireless-mouse-chernyi-109619826/?c=750000000',
    },
    {
      id: 2,
      image: 'assets/img-2.png',
      name: 'NB F80 черный',
      description: 'Общие характеристики',
      rating: 4.5,
      link: 'https://kaspi.kz/shop/p/nb-f80-chernyi-110855908/?c=750000000',
    },
    {
      id: 3,
      image: 'assets/img-3.png',
      name: 'Inova Death Life',
      description: 'Общие характеристики',
      rating: 4.5,
      link: 'https://kaspi.kz/shop/p/inova-death-life-115283473/?c=750000000',
    },
    {
      id: 4,
      image: 'assets/img-4.png',
      name: 'Notestand',
      description: 'Общие характеристики',
      rating: 4.5,
      link: 'https://kaspi.kz/shop/p/notestand-102983515/?c=750000000',
    },
    {
      id: 5,
      image: 'assets/img-5.png',
      name: 'Сумка Portcase 9011 черный',
      description: 'Общие характеристики',
      rating: 4.5,
      link: 'https://kaspi.kz/shop/p/sumka-portcase-9011-chernyi-108895248/?c=750000000',
    },
    {
      id: 6,
      image: 'assets/img-6.png',
      name: 'Logitech G102 Lightsync черный',
      description: 'Общие характеристики',
      rating: 4.5,
      link: 'https://kaspi.kz/shop/p/logitech-g102-lightsync-chernyi-100956618/?c=750000000',
    },
    {
      id: 7,
      image: 'assets/img-7.png',
      name: 'Kingston DataTraveler Exodia DTX/64GB 64 Гб',
      description: 'Общие характеристики',
      rating: 4.5,
      link: 'https://kaspi.kz/shop/p/kingston-datatraveler-exodia-dtx-64gb-64-gb-100759959/?c=750000000',
    },
    {
      id: 8,
      image: 'assets/img-8.png',
      name: 'Wi-Fi роутер TP-LINK TD-W8961N',
      description: 'Общие характеристики',
      rating: 4.5,
      link: 'https://kaspi.kz/shop/p/wi-fi-router-tp-link-td-w8961n-7600132/?c=750000000',
    },
    {
      id: 9,
      image: 'assets/img-9.png',
      name: 'X-Game XM-775OGB черный',
      description: 'Общие характеристики',
      rating: 4.5,
      link: 'https://kaspi.kz/shop/p/x-game-xm-775ogb-chernyi-100374644/?c=750000000',
    },
    {
      id: 10,
      image: 'assets/img-10.png',
      name: 'X-Game XM-770OUB черный',
      description: 'Общие характеристики',
      rating: 4.5,
      link: 'https://kaspi.kz/shop/p/x-game-xm-770oub-chernyi-9101354/?c=750000000',
    },
    ];
}
