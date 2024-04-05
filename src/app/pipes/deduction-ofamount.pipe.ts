import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'deductionOFAmount'
})
export class DeductionOFAmountPipe implements PipeTransform {

  transform(value:string, ...args: unknown[]): number {
    return Number(value)-25;
  }

}
