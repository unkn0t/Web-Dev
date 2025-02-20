import { Injectable } from '@angular/core';
import {Product} from './product';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: Product[] = [
    {
      id: 101,
      image: 'assets/computers/img-1.png',
      name: 'Wireless Mouse черный',
      description: 'Общие характеристики',
      rating: 3,
      link: 'https://kaspi.kz/shop/p/wireless-mouse-chernyi-109619826/?c=750000000',
      categoryId: 0,
    },
    {
      id: 102,
      image: 'assets/computers/img-2.png',
      name: 'NB F80 черный',
      description: 'Общие характеристики',
      rating: 2.5,
      link: 'https://kaspi.kz/shop/p/nb-f80-chernyi-110855908/?c=750000000',
      categoryId: 0,
    },
    {
      id: 103,
      image: 'assets/computers/img-3.png',
      name: 'Inova Death Life',
      description: 'Общие характеристики',
      rating: 4.5,
      link: 'https://kaspi.kz/shop/p/inova-death-life-115283473/?c=750000000',
      categoryId: 0,
    },
    {
      id: 104,
      image: 'assets/computers/img-4.png',
      name: 'Notestand',
      description: 'Общие характеристики',
      rating: 3.5,
      link: 'https://kaspi.kz/shop/p/notestand-102983515/?c=750000000',
      categoryId: 0,
    },
    {
      id: 105,
      image: 'assets/computers/img-5.png',
      name: 'Сумка Portcase 9011 черный',
      description: 'Общие характеристики',
      rating: 4.5,
      link: 'https://kaspi.kz/shop/p/sumka-portcase-9011-chernyi-108895248/?c=750000000',
      categoryId: 0,
    },
    {
      id: 201,
      image: 'assets/furniture/img-1.png',
      name: 'Стул C06, 80x46x40 см, белый',
      description: 'Общие характеристики',
      rating: 4,
      link: 'https://kaspi.kz/shop/p/stul-c06-80x46x40-sm-belyi-100189414/?c=750000000',
      categoryId: 1,
    },
    {
      id: 202,
      image: 'assets/furniture/img-5.png',
      name: 'Обеденный стол Imperial Bontempi Casa',
      description: 'Общие характеристики',
      rating: 0,
      link: 'https://kaspi.kz/shop/p/stul-c06-80x46x40-sm-belyi-100189414/?c=750000000',
      categoryId: 1,
    },
    {
      id: 203,
      image: 'assets/furniture/img-2.png',
      name: 'Sofabed.kz диван угловой 648153, обивка велюр',
      description: 'Общие характеристики',
      rating: 4.5,
      link: 'https://kaspi.kz/shop/p/stul-c06-80x46x40-sm-belyi-100189414/?c=750000000',
      categoryId: 1,
    },
    {
      id: 204,
      image: 'assets/furniture/img-3.png',
      name: 'Распашной шкаф IMPERIAL Алёна 3Д',
      description: 'Общие характеристики',
      rating: 5,
      link: 'https://kaspi.kz/shop/p/raspashnoi-shkaf-imperial-aljona-3d-120-2x190-5h46-6-sm-belyi-bezhevyi-104713427/?c=750000000',
      categoryId: 1,
    },
    {
      id: 205,
      image: 'assets/furniture/img-4.png',
      name: 'Игровое кресло KG 04, черный, белый',
      description: 'Общие характеристики',
      rating: 4.5,
      link: 'https://kaspi.kz/shop/p/igrovoe-kreslo-kg-04-chernyi-belyi-121567527/?c=750000000',
      categoryId: 1,
    },
    {
      id: 301,
      image: 'assets/gadgets/img-1.png',
      name: 'Apple iPhone 13 128Gb черный',
      description: 'Общие характеристики',
      rating: 4.5,
      link: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-chernyi-102298404/?c=750000000',
      categoryId: 2,
    },
    {
      id: 302,
      image: 'assets/gadgets/img-2.png',
      name: 'Apple 20W USB-C Power Adapter белый',
      description: 'Общие характеристики',
      rating: 4.5,
      link: 'https://kaspi.kz/shop/p/apple-20w-usb-c-power-adapter-belyi-100984093/?c=750000000',
      categoryId: 2,
    },
    {
      id: 303,
      image: 'assets/gadgets/img-3.png',
      name: 'Стекло Mocome для Apple iPhone 15 черный',
      description: 'Общие характеристики',
      rating: 4.5,
      link: 'https://kaspi.kz/shop/p/steklo-mocome-dlja-apple-iphone-15-chernyi-134756637/?c=750000000',
      categoryId: 2,
    },
    {
      id: 304,
      image: 'assets/gadgets/img-4.png',
      name: 'Рация WLN KD-C1 + гарнитура AiShop',
      description: 'Общие характеристики',
      rating: 4.5,
      link: 'https://kaspi.kz/shop/p/ratsija-wln-kd-c1-garnitura-aishop-109359537/?c=750000000',
      categoryId: 2,
    },
    {
      id: 305,
      image: 'assets/gadgets/img-5.png',
      name: 'JS0000084 серебристый',
      description: 'Общие характеристики',
      rating: 4,
      link: 'https://kaspi.kz/shop/p/js0000084-serebristyi-110564899/?c=750000000',
      categoryId: 2,
    },
    {
      id: 401,
      image: 'assets/household-appliances/img-1.png',
      name: 'Deerma DX700 белый',
      description: 'Общие характеристики',
      rating: 4,
      link: 'https://kaspi.kz/shop/p/deerma-dx700-belyi-3701383/?c=750000000',
      categoryId: 3,
    },
    {
      id: 402,
      image: 'assets/household-appliances/img-2.png',
      name: 'Generic SF-400',
      description: 'Общие характеристики',
      rating: 4,
      link: 'https://kaspi.kz/shop/p/generic-sf-400-102531445/?c=750000000',
      categoryId: 3,
    },
    {
      id: 403,
      image: 'assets/household-appliances/img-3.png',
      name: 'Электрочайник BEREKE BR-810 серый',
      description: 'Общие характеристики',
      rating: 4,
      link: 'https://kaspi.kz/shop/p/elektrochainik-bereke-br-810-seryi-109981423/?c=750000000',
      categoryId: 3,
    },
    {
      id: 404,
      image: 'assets/household-appliances/img-4.png',
      name: 'LG F2J3NS0W белый',
      description: 'Общие характеристики',
      rating: 4,
      link: 'https://kaspi.kz/shop/p/lg-f2j3ns0w-belyi-3601511/?c=750000000',
      categoryId: 3,
    },
    {
      id: 405,
      image: 'assets/household-appliances/img-5.png',
      name: 'Slaouwo HB-2075 черный',
      description: 'Общие характеристики',
      rating: 4,
      link: 'https://kaspi.kz/shop/p/slaouwo-hb-2075-chernyi-108151055/?c=750000000',
      categoryId: 3,
    },
  ];

  private filteredProducts = new BehaviorSubject<Product[]>(this.products);
  filteredProducts$ = this.filteredProducts.asObservable();

  filterByCategory(categoryId: number) {
    const filtered = this.products.filter(p => p.categoryId === categoryId);
    this.filteredProducts.next(filtered);
  }

  removeProduct(productId: number) {
    this.products = this.products.filter(p => p.id !== productId);
    this.filteredProducts.next(this.filteredProducts.getValue().filter(p => p.id !== productId));
  }
}
