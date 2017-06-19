import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'priceDiscount'
})
export class PriceDiscountPipe implements PipeTransform {

  transform(originalPrice: any, args?: any): any {
    if (!args) {
      return originalPrice - 1;
    } else {
      return originalPrice - args;
    }
  }

}
