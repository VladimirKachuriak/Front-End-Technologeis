import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pricePipe'
})
export class PricePipePipe implements PipeTransform {

  transform(price: number): string {
    return `${price.toFixed(2)}$`;
  }

}
