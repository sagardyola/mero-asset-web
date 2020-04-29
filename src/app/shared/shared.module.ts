import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from './material/material.module';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MsgService } from './services/msg.service';
import { UploadService } from './services/upload.service';
import { SocketService } from './services/socket.service';



@NgModule({
  declarations: [
    PageNotFoundComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MaterialModule
  ],
  exports: [
    PageNotFoundComponent,
    FlexLayoutModule,
    MaterialModule
  ],
  providers: [
    MsgService,
    UploadService,
    SocketService,
  ]
})
export class SharedModule { }
