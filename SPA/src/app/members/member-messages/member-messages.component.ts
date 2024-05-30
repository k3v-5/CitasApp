import { CommonModule } from "@angular/common";
import { Message } from "src/app/_models/message";
import { TimeagoModule } from "ngx-timeago";
import { Component, Input } from "@angular/core";

@Component({
  selector: "app-member-messages",
  standalone: true,
  templateUrl: "./member-messages.component.html",
  styleUrls: ["./member-messages.component.css"],
  imports: [CommonModule, TimeagoModule],
})
export class MemberMessagesComponent {
  @Input() username?: string;
  @Input() messages: Message[] = [];
}
