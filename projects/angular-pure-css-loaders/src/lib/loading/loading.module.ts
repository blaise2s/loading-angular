import { NgModule } from '@angular/core';

import { CircleComponent } from './circle/circle.component';
import { DualRingComponent } from './dual-ring/dual-ring.component';
import { FacebookComponent } from './facebook/facebook.component';
import { HeartComponent } from './heart/heart.component';
import { RingComponent } from './ring/ring.component';
import { RollerComponent } from './roller/roller.component';
import { DefaultComponent } from './default/default.component';
import { EllipsisComponent } from './ellipsis/ellipsis.component';
import { GridComponent } from './grid/grid.component';
import { HourglassComponent } from './hourglass/hourglass.component';
import { RippleComponent } from './ripple/ripple.component';
import { SpinnerComponent } from './spinner/spinner.component';

@NgModule({
  declarations: [
    CircleComponent,
    DualRingComponent,
    FacebookComponent,
    HeartComponent,
    RingComponent,
    RollerComponent,
    DefaultComponent,
    EllipsisComponent,
    GridComponent,
    HourglassComponent,
    RippleComponent,
    SpinnerComponent,
  ],
  exports: [
    CircleComponent,
    DualRingComponent,
    FacebookComponent,
    HeartComponent,
    RingComponent,
    RollerComponent,
    DefaultComponent,
    EllipsisComponent,
    GridComponent,
    HourglassComponent,
    RippleComponent,
    SpinnerComponent,
  ],
})
export class LoadingModule {}
