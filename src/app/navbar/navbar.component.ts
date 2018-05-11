import { Component, OnInit, Renderer, ViewChild, ElementRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';

@Component({
    selector: 'navbar-cmp',
    templateUrl: 'navbar.component.html'
 //   styleUrls: ['navbar.component.css'],
})
export class NavbarComponent {
    
    private sidebarVisible: boolean = false;

    sidebarToggle(){
        var body = document.getElementsByTagName('body')[0];

        if(this.sidebarVisible == false){
            body.classList.add('nav-open');
            this.sidebarVisible = true;
        } else {
            this.sidebarVisible = false;
            body.classList.remove('nav-open');
        }
    }


//   openNav() {
//     document.getElementById("mySidenav").style.width = "250px";
//     document.getElementById("main").style.marginLeft = "250px";
//     document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
//     var body = document.getElementsByTagName('body')[0];

//         if(this.sidebarVisible == false){
//             body.classList.add('nav-open');
//             this.sidebarVisible = true;
//         } else {
//             this.sidebarVisible = false;
//             body.classList.remove('nav-open');
//         }
//   }

//   /* Set the width of the side navigation to 0 and the left margin of the page content to 0, and the background color of body to white */
//   closeNav() {
//     document.getElementById("mySidenav").style.width = "0";
//     document.getElementById("main").style.marginLeft = "0";
//     document.body.style.backgroundColor = "white";
//     var body = document.getElementsByTagName('body')[0];

//     if(this.sidebarVisible == false){
//         body.classList.add('nav-open');
//         this.sidebarVisible = true;
//     } else {
//         this.sidebarVisible = false;
//         body.classList.remove('nav-open');
//     }
//   }
}
