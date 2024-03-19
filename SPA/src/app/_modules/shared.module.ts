import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BsDropdownModule } from "ngx-bootstrap/dropdown";
import { ToastrModule } from "ngx-toastr";
import { TabsModule } from "ngx-bootstrap/tabs";
import { NgxSpinnerModule } from "ngx-spinner";
import { FileUploadModule } from "ng2-file-upload";
import { BsDatepickerModule } from "ngx-bootstrap/datepicker";
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BsDropdownModule.forRoot(),
    TabsModule.forRoot(),
    ToastrModule.forRoot({
      timeOut: 10000,
      positionClass: "toast-bnottom-right",
      preventDuplicates: false,
      progressBar: true,
    }),

    NgxSpinnerModule.forRoot({
      type: "square-jelly-box.css",
    }),
    FileUploadModule,
    BsDatepickerModule.forRoot(),
  ],
  exports: [
    BsDropdownModule,
    ToastrModule,
    TabsModule,
    NgxSpinnerModule,
    FileUploadModule,
    BsDatepickerModule,
  ],
})
export class SharedModule {}
