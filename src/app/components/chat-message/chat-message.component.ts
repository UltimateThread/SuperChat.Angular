import { Component, Input, OnInit } from '@angular/core';
import { ChatMessage } from 'src/app/models/chat-models';

@Component({
  selector: 'chat-message',
  templateUrl: './chat-message.component.html',
  styleUrls: ['./chat-message.component.scss']
})
export class ChatMessageComponent implements OnInit {
  @Input() chatMessage: ChatMessage = {id: '', senderName: '', content: '', dateTime: ''};

  constructor() { }

  ngOnInit(): void {
  }

}
