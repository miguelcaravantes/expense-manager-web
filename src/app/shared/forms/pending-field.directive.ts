import { Directive, OnInit, Input, ElementRef, AfterViewInit } from '@angular/core';
import { startWith, map } from 'rxjs/operators';
import { NgControl } from '@angular/forms';

@Directive({
  selector: '[appPendingField]'
})
export class PendingFieldDirective implements AfterViewInit {
  control?: NgControl;
  @Input() appPendingField!: string;

  constructor(private element: ElementRef) {
  }

  ngAfterViewInit(): void {
    const addClass = () => this.element.nativeElement.classList.add(this.appPendingField);
    const removeClass = () => this.element.nativeElement.classList.add(this.appPendingField);
    this.control?.statusChanges?.pipe(startWith('')).subscribe(status => status === 'PENDING' ? addClass() : removeClass());
  }
}
