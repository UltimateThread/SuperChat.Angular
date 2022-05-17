import { Component, OnInit } from '@angular/core';
import { ChatRoom } from 'src/app/models/chat-models';

@Component({
  selector: 'side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {
  rooms: ChatRoom[] = [
    {id: '', name: 'Kristin Brasington', isSelected: true},
    {id: '', name: 'Kaylin Brasington', isSelected: false},
    {id: '', name: 'Evan Byrd', isSelected: false},
    {id: '', name: 'Small Groups', isSelected: false},
    {id: '', name: 'Family', isSelected: false}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
