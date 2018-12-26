import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompareValidatorDirective } from './compare-validator.directive';
import { UniqueEmailValidatorDirective } from './unique-email-validator.directive';

@NgModule({
  imports: [],
  declarations: [
    CompareValidatorDirective,
    UniqueEmailValidatorDirective,
  ],
  exports: [
    CommonModule,
    CompareValidatorDirective,
    UniqueEmailValidatorDirective,
  ]
})
export class SharedModule { }
