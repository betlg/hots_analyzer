import { NgModule } from '@angular/core';
import { MatSelectModule, MatOptionModule, MatFormFieldModule } from '@angular/material';

@NgModule({
    imports: [MatSelectModule, MatOptionModule, MatFormFieldModule],
    exports: [MatSelectModule, MatOptionModule, MatFormFieldModule]
})
export class AngularModule { }
