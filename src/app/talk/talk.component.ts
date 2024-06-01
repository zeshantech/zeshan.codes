import { Component, ElementRef, ViewChild } from '@angular/core';
import Talk from 'talkjs';
import { TalkService } from './talk.service';

@Component({
  selector: 'app-talk',
  templateUrl: './talk.component.html',
})
export class TalkComponent {
  @ViewChild('talkjsContainer') talkjsContainer!: ElementRef;

  private inbox!: Talk.Inbox;
  chatBoxVisible = false;

  constructor(private talkService: TalkService) {}

  ngOnInit() {
    this.createInbox();
  }

  private async createInbox() {
    const session = await this.talkService.createCurrentSession();
    this.inbox = await this.talkService.createInbox(session);
    this.inbox.mount(this.talkjsContainer.nativeElement);
  }


  toggleChatBox() {
    this.chatBoxVisible = !this.chatBoxVisible;
  }
}
