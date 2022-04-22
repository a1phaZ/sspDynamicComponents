import { Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild, ViewContainerRef } from '@angular/core';
import {
  DynamicComponentDirective
} from '../../directives/dynamic-component.directive';

@Component({
  selector: 'app-dynamic',
  templateUrl: './dynamic.component.html',
  styleUrls: ['./dynamic.component.scss'],
})
export class DynamicComponent implements OnInit, OnChanges {

  @ViewChild('container') container: ViewContainerRef;
  @ViewChild(DynamicComponentDirective, {static: true}) dc!: DynamicComponentDirective;
  @Input() component: any;
  @Input() data: any;

  constructor() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.loadComponent(this.component);
  }

  ngOnInit() {

  }

  ionViewDidEnter() {
  }

  loadComponent(component: any) {
    const viewContainerRef = this.dc.viewContainerRef;
    viewContainerRef.clear();
    const componentRef = viewContainerRef.createComponent<typeof component>(component);
    componentRef.instance.data = this.data;
  }
}
