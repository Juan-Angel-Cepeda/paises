import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styles: [`
    footer{
      position:fixed;
      bottom:0;
      width:100%;
      height:80px;
    }
    footer img{
      position:absolute;
      left:0;
      bottom:20px;
      width:10%;
      height:auto;
      padding-left:10px;
    }
  `]
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
