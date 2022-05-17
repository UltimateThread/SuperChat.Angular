import { AfterViewInit, Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { ChatMessage } from 'src/app/models/chat-models';

@Component({
  selector: 'chat-window',
  templateUrl: './chat-window.component.html',
  styleUrls: ['./chat-window.component.scss']
})
export class ChatWindowComponent implements OnInit, AfterViewInit {
  chatMessages: ChatMessage[] = [
    {id: '1', senderName: 'Aaron Brasington', content: 'there is a lot of new technologies we are going to adventure into if he does that will help us tremendously', dateTime: 'Fri, 02 Feb 1996 03:04:05 GMT'},
    {id: '1', senderName: 'Aaron Brasington', content: 'you know how i am about new technologies lol', dateTime: 'Fri, 02 Feb 1996 03:04:05 GMT'},
    {id: '1', senderName: 'Aaron Brasington', content: 'Banks are limited by what technologies they can use by the government so that probably would be the worst place for me to work lol', dateTime: 'Fri, 02 Feb 1996 03:04:05 GMT'},
    {id: '1', senderName: 'Aaron Brasington', content: 'Call the post office', dateTime: 'Fri, 02 Feb 1996 03:04:05 GMT'},
    {id: '1', senderName: 'Aaron Brasington', content: 'what was it that you got me for lunch today?', dateTime: 'Fri, 02 Feb 1996 03:04:05 GMT'},
    {id: '1', senderName: 'Kristin Brasington', content: 'General tso I think', dateTime: 'Fri, 02 Feb 1996 03:04:05 GMT'},
    {id: '1', senderName: 'Aaron Brasington', content: 'ok just making sure i was eating the right thing', dateTime: 'Fri, 02 Feb 1996 03:04:05 GMT'},
    {id: '1', senderName: 'Kristin Brasington', content: 'Cheese\nChicken nuggets\nMeat\nbun\nGreen beans', dateTime: 'Fri, 02 Feb 1996 03:04:05 GMT'},
    {id: '1', senderName: 'Kristin Brasington', content: 'So you think it’s my battery that’s dead?', dateTime: 'Fri, 02 Feb 1996 03:04:05 GMT'},
    {id: '1', senderName: 'Aaron Brasington', content: 'yea', dateTime: 'Fri, 02 Feb 1996 03:04:05 GMT'},
    {id: '1', senderName: 'Aaron Brasington', content: 'there is a lot of new technologies we are going to adventure into if he does that will help us tremendously', dateTime: 'Fri, 02 Feb 1996 03:04:05 GMT'},
    {id: '1', senderName: 'Aaron Brasington', content: 'you know how i am about new technologies lol', dateTime: 'Fri, 02 Feb 1996 03:04:05 GMT'},
    {id: '1', senderName: 'Aaron Brasington', content: 'Banks are limited by what technologies they can use by the government so that probably would be the worst place for me to work lol', dateTime: 'Fri, 02 Feb 1996 03:04:05 GMT'},
    {id: '1', senderName: 'Aaron Brasington', content: 'Call the post office', dateTime: 'Fri, 02 Feb 1996 03:04:05 GMT'},
    {id: '1', senderName: 'Aaron Brasington', content: 'what was it that you got me for lunch today?', dateTime: 'Fri, 02 Feb 1996 03:04:05 GMT'},
    {id: '1', senderName: 'Kristin Brasington', content: 'General tso I think', dateTime: 'Fri, 02 Feb 1996 03:04:05 GMT'},
    {id: '1', senderName: 'Aaron Brasington', content: 'ok just making sure i was eating the right thing', dateTime: 'Fri, 02 Feb 1996 03:04:05 GMT'},
    {id: '1', senderName: 'Kristin Brasington', content: 'Cheese\nChicken nuggets\nMeat\nbun\nGreen beans', dateTime: 'Fri, 02 Feb 1996 03:04:05 GMT'},
    {id: '1', senderName: 'Kristin Brasington', content: 'So you think it’s my battery that’s dead?', dateTime: 'Fri, 02 Feb 1996 03:04:05 GMT'},
    {id: '1', senderName: 'Aaron Brasington', content: 'yea', dateTime: 'Fri, 02 Feb 1996 03:04:05 GMT'},
    {id: '1', senderName: 'Aaron Brasington', content: 'there is a lot of new technologies we are going to adventure into if he does that will help us tremendously', dateTime: 'Fri, 02 Feb 1996 03:04:05 GMT'},
    {id: '1', senderName: 'Aaron Brasington', content: 'you know how i am about new technologies lol', dateTime: 'Fri, 02 Feb 1996 03:04:05 GMT'},
    {id: '1', senderName: 'Aaron Brasington', content: 'Banks are limited by what technologies they can use by the government so that probably would be the worst place for me to work lol', dateTime: 'Fri, 02 Feb 1996 03:04:05 GMT'},
    {id: '1', senderName: 'Aaron Brasington', content: 'Call the post office', dateTime: 'Fri, 02 Feb 1996 03:04:05 GMT'},
    {id: '1', senderName: 'Aaron Brasington', content: 'what was it that you got me for lunch today?', dateTime: 'Fri, 02 Feb 1996 03:04:05 GMT'},
    {id: '1', senderName: 'Kristin Brasington', content: 'General tso I think', dateTime: 'Fri, 02 Feb 1996 03:04:05 GMT'},
    {id: '1', senderName: 'Aaron Brasington', content: 'ok just making sure i was eating the right thing', dateTime: 'Fri, 02 Feb 1996 03:04:05 GMT'},
    {id: '1', senderName: 'Kristin Brasington', content: 'Cheese\nChicken nuggets\nMeat\nbun\nGreen beans', dateTime: 'Fri, 02 Feb 1996 03:04:05 GMT'},
    {id: '1', senderName: 'Kristin Brasington', content: 'So you think it’s my battery that’s dead?', dateTime: 'Fri, 02 Feb 1996 03:04:05 GMT'},
    {id: '1', senderName: 'Aaron Brasington', content: 'yea', dateTime: 'Fri, 02 Feb 1996 03:04:05 GMT'},
    {id: '1', senderName: 'Aaron Brasington', content: 'there is a lot of new technologies we are going to adventure into if he does that will help us tremendously', dateTime: 'Fri, 02 Feb 1996 03:04:05 GMT'},
    {id: '1', senderName: 'Aaron Brasington', content: 'you know how i am about new technologies lol', dateTime: 'Fri, 02 Feb 1996 03:04:05 GMT'},
    {id: '1', senderName: 'Aaron Brasington', content: 'Banks are limited by what technologies they can use by the government so that probably would be the worst place for me to work lol', dateTime: 'Fri, 02 Feb 1996 03:04:05 GMT'},
    {id: '1', senderName: 'Aaron Brasington', content: 'Call the post office', dateTime: 'Fri, 02 Feb 1996 03:04:05 GMT'},
    {id: '1', senderName: 'Aaron Brasington', content: 'what was it that you got me for lunch today?', dateTime: 'Fri, 02 Feb 1996 03:04:05 GMT'},
    {id: '1', senderName: 'Kristin Brasington', content: 'General tso I think', dateTime: 'Fri, 02 Feb 1996 03:04:05 GMT'},
    {id: '1', senderName: 'Aaron Brasington', content: 'ok just making sure i was eating the right thing', dateTime: 'Fri, 02 Feb 1996 03:04:05 GMT'},
    {id: '1', senderName: 'Kristin Brasington', content: 'Cheese\nChicken nuggets\nMeat\nbun\nGreen beans', dateTime: 'Fri, 02 Feb 1996 03:04:05 GMT'},
    {id: '1', senderName: 'Kristin Brasington', content: 'So you think it’s my battery that’s dead?', dateTime: 'Fri, 02 Feb 1996 03:04:05 GMT'},
    {id: '1', senderName: 'Aaron Brasington', content: 'yea', dateTime: 'Fri, 02 Feb 1996 03:04:05 GMT'},
    {id: '1', senderName: 'Aaron Brasington', content: 'there is a lot of new technologies we are going to adventure into if he does that will help us tremendously', dateTime: 'Fri, 02 Feb 1996 03:04:05 GMT'},
    {id: '1', senderName: 'Aaron Brasington', content: 'you know how i am about new technologies lol', dateTime: 'Fri, 02 Feb 1996 03:04:05 GMT'},
    {id: '1', senderName: 'Aaron Brasington', content: 'Banks are limited by what technologies they can use by the government so that probably would be the worst place for me to work lol', dateTime: 'Fri, 02 Feb 1996 03:04:05 GMT'},
    {id: '1', senderName: 'Aaron Brasington', content: 'Call the post office', dateTime: 'Fri, 02 Feb 1996 03:04:05 GMT'},
    {id: '1', senderName: 'Aaron Brasington', content: 'what was it that you got me for lunch today?', dateTime: 'Fri, 02 Feb 1996 03:04:05 GMT'},
    {id: '1', senderName: 'Kristin Brasington', content: 'General tso I think', dateTime: 'Fri, 02 Feb 1996 03:04:05 GMT'},
    {id: '1', senderName: 'Aaron Brasington', content: 'ok just making sure i was eating the right thing', dateTime: 'Fri, 02 Feb 1996 03:04:05 GMT'},
    {id: '1', senderName: 'Kristin Brasington', content: 'Cheese\nChicken nuggets\nMeat\nbun\nGreen beans', dateTime: 'Fri, 02 Feb 1996 03:04:05 GMT'},
    {id: '1', senderName: 'Kristin Brasington', content: 'So you think it’s my battery that’s dead?', dateTime: 'Fri, 02 Feb 1996 03:04:05 GMT'},
    {id: '1', senderName: 'Aaron Brasington', content: 'yea', dateTime: 'Fri, 02 Feb 1996 03:04:05 GMT'},
    {id: '1', senderName: 'Aaron Brasington', content: 'there is a lot of new technologies we are going to adventure into if he does that will help us tremendously', dateTime: 'Fri, 02 Feb 1996 03:04:05 GMT'},
    {id: '1', senderName: 'Aaron Brasington', content: 'you know how i am about new technologies lol', dateTime: 'Fri, 02 Feb 1996 03:04:05 GMT'},
    {id: '1', senderName: 'Aaron Brasington', content: 'Banks are limited by what technologies they can use by the government so that probably would be the worst place for me to work lol', dateTime: 'Fri, 02 Feb 1996 03:04:05 GMT'},
    {id: '1', senderName: 'Aaron Brasington', content: 'Call the post office', dateTime: 'Fri, 02 Feb 1996 03:04:05 GMT'},
    {id: '1', senderName: 'Aaron Brasington', content: 'what was it that you got me for lunch today?', dateTime: 'Fri, 02 Feb 1996 03:04:05 GMT'},
    {id: '1', senderName: 'Kristin Brasington', content: 'General tso I think', dateTime: 'Fri, 02 Feb 1996 03:04:05 GMT'},
    {id: '1', senderName: 'Aaron Brasington', content: 'ok just making sure i was eating the right thing', dateTime: 'Fri, 02 Feb 1996 03:04:05 GMT'},
    {id: '1', senderName: 'Kristin Brasington', content: 'Cheese\nChicken nuggets\nMeat\nbun\nGreen beans', dateTime: 'Fri, 02 Feb 1996 03:04:05 GMT'},
    {id: '1', senderName: 'Kristin Brasington', content: 'So you think it’s my battery that’s dead?', dateTime: 'Fri, 02 Feb 1996 03:04:05 GMT'},
    {id: '1', senderName: 'Aaron Brasington', content: 'yea', dateTime: 'Fri, 02 Feb 1996 03:04:05 GMT'},
  ];

  @ViewChild('scrollMe', { static: true }) private myScrollContainer: ElementRef;

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.calculateChatWindowHeight();
  }

  @HostListener('window:orientationchange ', ['$event'])
  onOrientationChange() {
    this.calculateChatWindowHeight();
  }

  constructor() { }

  ngOnInit(): void {
    const utcDate1 = new Date(Date.UTC(96, 1, 2, 3, 4, 5));
    console.log(utcDate1.toUTCString());
  }

  ngAfterViewInit(): void {
    this.calculateChatWindowHeight();

    // TODO: Find a better solution instead of this hack
    // When you switch back to the RaceChat tab the scroll defaults back to the top
    // Maybe find an event that fires when this component comes back into view?
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          this.scrollToBottom();
          this.calculateChatWindowHeight();
        });
      },
      { rootMargin: '0px 1px 0px 0px' });
    observer.observe(this.myScrollContainer.nativeElement);
  }

  // Scrolls the chat messages to the bottom of the page if autoScroll is selected
  scrollToBottom(): void {
    this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
  }

  // This is used to calculate what the correct height of the chat window itself should be on initial load
  // and any time the window is resized
  // We have to do this manually to account for mobile devices, especially ones with retina displays
  // The pixel density on retina displays is higher than normal so there is a meta tag in the index.html which
  // normalizes the pixel density so our window.innerHeight will return the correct values no matter the screen type
  calculateChatWindowHeight() {
    console.log('Resize');
    const chatWindow = document.getElementsByClassName('chat-window-container')[0] as HTMLElement;
    let header = document.getElementsByClassName('header')[0] as HTMLElement;

    if (chatWindow === undefined || header === undefined) {
      return;
    }

    const height = window.innerHeight - header.offsetHeight;
    const width = window.innerWidth;
    chatWindow.style.maxHeight = `${height}px`;
    chatWindow.style.width = `${width}px`;
  }
}
