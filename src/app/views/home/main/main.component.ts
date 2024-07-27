import {AfterViewInit, Component, ElementRef, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {Observable} from "rxjs";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.less'
})
export class MainComponent implements OnInit, AfterViewInit {
  private observable: Observable<number>;
  @ViewChild('popup')
  popup!: TemplateRef<ElementRef>;

  constructor(private modalService: NgbModal) {
    this.observable = new Observable(observer => {
      let count = 0;
      const interval = setInterval(() => {
        observer.next(count++);
      }, 1000);
      const timeout1 = setTimeout(() => {
        observer.complete();
      }, 4000);
      const timeout2 = setTimeout(() => {
        observer.error('world');
      }, 5000);

      return {
        unsubscribe() {
          clearInterval(interval);
          clearTimeout(timeout1);
          clearTimeout(timeout2);
        }
      }
    });
  }

  ngOnInit() {
    // this.observable.subscribe({
    //   next: (param: number) => {
    //     console.log('subscriber 1: ' + param);
    //   },
    //   error: (error: string) => {
    //     console.log('ERROR!!! ' + error);
    //   }
    // });
    // const myModal = new bootstrap.Modal('#myModal', {});
    // myModal.show();
  }

  ngAfterViewInit() {
    this.modalService.open(this.popup, {});
  }

  test() {

  }
}
