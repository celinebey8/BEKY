import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-vitals',
  templateUrl: './vitals.component.html',
  styleUrls: ['./vitals.component.css']
})
export class VitalsComponent implements OnInit {

  vitals;

  constructor(private router: Router ,private route: ActivatedRoute,  private location: Location) { }

  ngOnInit(): void {
    // this.route.params.subscribe(
    //   (params: Params) => {
    //     this.vitals = this.location.getState()["0"];
    //     console.log(this.location.getState());
    //   }
    // );
    // console.log(this.vitals);
    // var nav = this.router.getCurrentNavigation();
    // console.log(nav.extras);
    
    // console.log(this.location.getState());

    const myArray = this.route.snapshot.queryParamMap.get('myArray');

    if (myArray === null) {
      console.log("array is null");
      console.log(this.vitals);
    } else {
      this.vitals = JSON.parse(myArray);
      console.log(this.vitals);
    }

  }

}