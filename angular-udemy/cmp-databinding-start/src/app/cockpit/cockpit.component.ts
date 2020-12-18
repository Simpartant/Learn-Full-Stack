import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent : string}>();
  @Output('bbCreated') blueprintCreated = new EventEmitter<{serverName: string, serverContent : string}>();
  // newServerName = '';
  // newServerContent = '';
  constructor() { }
  @ViewChild('serverContentInput') serverContentInput: ElementRef;

  ngOnInit(): void {
  }
  onAddServer(nameIput: HTMLInputElement) {
    this.serverCreated.emit({
      serverName: nameIput.value,
      serverContent: this.serverContentInput.nativeElement.value
    });
  }

  onAddBlueprint(nameIput: HTMLInputElement) {
    this.blueprintCreated.emit({
      serverName: nameIput.value,
      serverContent: this.serverContentInput.nativeElement.value
    });
  }
}
