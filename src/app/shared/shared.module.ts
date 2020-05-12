import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from './material/material.module';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MsgService } from './services/msg.service';
import { UploadService } from './services/upload.service';
import { SocketService } from './services/socket.service';
import { ProgressComponent } from './components/progress/progress.component';
import { DialogService } from './services/dialog.service';

@NgModule({
  declarations: [
    PageNotFoundComponent,
    ProgressComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MaterialModule
  ],
  exports: [
    PageNotFoundComponent,
    ProgressComponent,
    FlexLayoutModule,
    MaterialModule
  ],
  providers: [
    MsgService,
    UploadService,
    SocketService,
    DialogService
  ]
})
export class SharedModule { }
