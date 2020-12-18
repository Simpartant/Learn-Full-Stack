import {
  AfterContentChecked,
  AfterContentInit, AfterViewChecked, AfterViewInit,
  Component, ContentChild,
  DoCheck, ElementRef,
  Input,
  OnChanges, OnDestroy,
  OnInit,
  SimpleChange, ViewChild,
  ViewEncapsulation
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ServerElementComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewChecked, AfterViewInit, OnDestroy {
  @Input('srvElement') element: { type: string, name: string, content: string };
  @Input() name: string;
  @ViewChild('heading', {static: true}) header: ElementRef;
  @ContentChild('contentParagraph', {static: true}) paragraph : ElementRef;
  constructor() {
    console.log('constructor call')
  }

  // @ts-ignore
  ngOnChanges(changes: SimpleChange){
    console.log('onchange call')
    console.log(changes);
  }

  ngOnInit(): void {
    console.log('oninit call')
    console.log('Text content: ' + this.header.nativeElement.textContent);
    console.log('Text content of paragraph : ' + this.paragraph.nativeElement.textContent);
  }

  ngDoCheck() {
    console.log('ngDocheck log')
  }

  ngAfterContentInit() {
    console.log('After contend init called');
    console.log('Text content of paragraph : ' + this.paragraph.nativeElement.textContent);

  }

  ngAfterContentChecked() {
    console.log('Aftercontentcheck call')
  }

  ngAfterViewInit() {
    console.log('afterviewinit call');
    console.log('Text content: ' + this.header.nativeElement.textContent);

  }

  ngAfterViewChecked() {
    console.log('afterviewchecked call')
  }

  ngOnDestroy() {
    console.log('destroy call')
  }


}
