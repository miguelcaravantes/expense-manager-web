import { PendingFieldDirective } from './pending-field.directive';
import { ElementRef } from '@angular/core';

describe('PendingFieldDirective', () => {
  it('should create an instance', () => {
    const directive = new PendingFieldDirective(new ElementRef(document.createElement('span')));
    expect(directive).toBeTruthy();
  });
});
