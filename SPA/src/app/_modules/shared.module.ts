import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BsDropdownModule } from "ngx-bootstrap/dropdown";
import { ToastrModule } from "ngx-toastr";
import { TabsModule } from "ngx-bootstrap/tabs";
import { NgxSpinner, NgxSpinnerModule } from "ngx-spinner";

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
  ],
  exports: [BsDropdownModule, ToastrModule, TabsModule, NgxSpinnerModule],
})
export class SharedModule {}
