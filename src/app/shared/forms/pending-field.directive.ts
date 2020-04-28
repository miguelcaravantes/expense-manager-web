import { Directive, OnInit, Input, ElementRef } from '@angular/core';
import { startWith } from 'rxjs/operators';
import { NgControl } from '@angular/forms';

@Directive({
  selector: '[appPendingField]'
})
export class PendingFieldDirective implements OnInit {
  control: NgControl;
  @Input() appPendingField: string;

  constructor(private element: ElementRef) {
  }

  ngOnInit() {
    setTimeout(() => {
      this.control.statusChanges.pipe(startWith(null as string)).subscribe(() => {
        if (this.control.pending) {
          this.element.nativeElement.classList.add(this.appPendingField);
        } else {
          this.element.nativeElement.classList.remove(this.appPendingField);
        }
      }
      );
    });
  }

}
