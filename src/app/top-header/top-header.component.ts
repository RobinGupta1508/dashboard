import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-top-header',
  templateUrl: './top-header.component.html',
  styleUrls: ['./top-header.component.css']
})
export class TopHeaderComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit() {
  }

  toggleUserPopup() {
    document.querySelector('.user_popup').classList.toggle('show');
  }

  logout() {
    this._router.navigate(['./login']);
    localStorage.removeItem('userInfo');
  }

}
