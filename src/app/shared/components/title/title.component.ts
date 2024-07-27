import {Component, ContentChild, ElementRef, Input} from '@angular/core';

@Component({
  selector: 'custom-title',
  templateUrl: './title.component.html',
  styleUrl: './title.component.less'
})
export class TitleComponent {
  @Input() title: string = '';

  /*@ContentChild('second')
  private second!: ElementRef;*/

  toUpper() {
    return this.title.toUpperCase();
  }
  toLower() {
    return this.title.toLowerCase();
  }

  ngAfterViewInit() {
    //console.log(this.second);
  }
}
