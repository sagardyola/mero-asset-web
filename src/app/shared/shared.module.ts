import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from './material/material.module';

import { MsgService } from './services/msg.service';
import { UploadService } from './services/upload.service';
import { SocketService } from './services/socket.service';
import { ProgressComponent } from './components/progress/progress.component';
import { DialogService } from './services/dialog.service';
import { ConfirmEqualValidatorDirective } from './directives/confirm-equal-validator.directive';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    ProgressComponent,
    ConfirmEqualValidatorDirective,
    PageNotFoundComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MaterialModule
  ],
  exports: [
    ProgressComponent,
    FlexLayoutModule,
    MaterialModule,
    ConfirmEqualValidatorDirective
  ],
  providers: [
    MsgService,
    UploadService,
    SocketService,
    DialogService
  ]
})
export class SharedModule { }
