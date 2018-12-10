import {Component, EventEmitter, Input, Output} from '@angular/core';



@Component({
  selector: 'page-popup',
  templateUrl: 'popup.html'
})
export class Popup {
  iconCash = '../../../assets/imgs/cash.svg';
  iconVisa = '../../../assets/imgs/visa.svg';
  starsNumber = [1, 2, 3, 4, 5];

  starEmpty = '../../../assets/imgs/star_empty.png';
  starYellow = '../../../assets/imgs/star_check.svg';
  iconClose = '../../../assets/imgs/close.svg';
  constructor() {
  }
  @Input() checkedGroup = {};
  @Output() closePopup = new EventEmitter<any>();

  close() {
    this.closePopup.emit();
  }
}
