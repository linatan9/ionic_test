import {Component, OnInit} from '@angular/core';
import { AlertController } from 'ionic-angular';

import {data} from './data'
@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage implements OnInit{
  data = data;
  starsNumber = [1, 2, 3, 4, 5];

  starEmpty = '../../../assets/imgs/star_empty.png';
  starYellow = '../../../assets/imgs/star_check.svg';
  iconCash = '../../../assets/imgs/cash.svg';
  iconVisa = '../../../assets/imgs/visa.svg';
  filteredData = data;
  checkAll = true;
  cardCheck = false;
  cashCheck = false;
  isShowPopup = false;
  checkedGroup = {};
  constructor(private alertController: AlertController) {
  }
  ngOnInit() {
    console.log(this.filteredData)
  }
  showPopUp(group) {
    this.isShowPopup = true;
    this.checkedGroup = group;
  }
  closePopup() {
    this.isShowPopup = false;
    this.checkedGroup = {};
  }
  filterData() {
    this.filteredData = data.filter((item) => {
      if (this.cardCheck) {
        console.log(this.cardCheck)
        return item.cashType === 'card'
      } else if (this.cashCheck) {
        return item.cashType === 'cash'
      } else if (this.checkAll) {
        return data
      }
    })
  }
  changeCheckAll() {
    this.checkAll = !this.checkAll;
    this.cardCheck = false;
    this.cashCheck = false;
    this.filterData();
  }
  changeCheckCard() {
    this.cardCheck = !this.cardCheck;
    this.checkAll = false;
    this.cashCheck = false;
    this.filterData();
  }
  changeCheckCash() {
    this.cashCheck = !this.cashCheck;
    this.checkAll = false;
    this.cardCheck = false;
    this.filterData();
  }
  presentAlert(group) {
    let alert = this.alertController.create({
      title: `Cash type: ${group.cashType}`,
      subTitle: `You wnt pay using ${group.cashType}`,
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    alert.present();
  }
}
