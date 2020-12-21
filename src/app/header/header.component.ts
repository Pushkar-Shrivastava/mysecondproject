import { AfterViewInit, Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit, AfterViewInit {
  constructor() {}
  ngAfterViewInit(): void {
    $(document).ready(function () {
      //for navbar drawer
      $('.sidenav').sidenav();
      // for dropdown
      $('.dropdown-trigger').dropdown();
    });
  }

  ngOnInit(): void {}
}
