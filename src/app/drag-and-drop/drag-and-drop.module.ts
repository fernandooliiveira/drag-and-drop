import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DragAndDropRoutingModule } from './drag-and-drop-routing.module';
import {DndDirective} from "../directives/dnd/dnd.directive";


@NgModule({
  declarations: [
    DndDirective
  ],
  exports: [
    DndDirective
  ],
  imports: [
    CommonModule,
    DragAndDropRoutingModule,

  ]
})
export class DragAndDropModule { }
