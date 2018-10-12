import { EventService } from './../services/events.service';
import { Component, OnInit, ViewChild } from "@angular/core";
import {FormGroup,FormBuilder,Validators,FormControl} from "@angular/forms";
import { MatMenuTrigger } from "@angular/material";
import {MatSnackBar} from '@angular/material';
import {ToastyService, ToastyConfig, ToastOptions, ToastData} from 'ng2-toasty';

//import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';

@Component({
  selector: "app-event-management",
  templateUrl: "./event-management.component.html",
  styleUrls: ["./event-management.component.css"]
})
export class EventManagementComponent implements OnInit {
  eventname:string='';
  selectefFile: File = null;
  eventCategories = ["conference", "Seminar", "Presentation"];
  isEventActive = ["True", "False"];
  eventRegistration: FormGroup;
  @ViewChild(MatMenuTrigger)
  trigger: MatMenuTrigger;

  //@ViewChild(MatMenuTrigger) trigger: MatMenuTrigger;
  constructor(private eventService:EventService,private toastyService:ToastyService, private toastyConfig: ToastyConfig
  ) {
    this.toastyConfig.theme = 'default';
    this.eventRegistration = new FormGroup({
      eventName: new FormControl(""),
      eventdescription: new FormControl(""),
      // startDate:new FormControl(''),
      // endDate:new FormControl(''),
      event_categories: new FormControl(""),
      startTime: new FormControl(""),
      endTime: new FormControl(""),
      eventLocation: new FormControl(""),
      regActive: new FormControl(""),
      adultPrice: new FormControl(""),
      childPrice: new FormControl(""),
      eventIamge: new FormControl("")
    });
  }

  addEvents() {
    //console.log(this.eventRegistration.status);
    //console.log(this.eventRegistration.value);
   //console.log(this.eventService.posteventData(this.eventRegistration));
   this.eventService.posteventData(this.eventRegistration)
   .subscribe((data)=>{this.eventname=data[0]
   this.toastyService.success("Sucess");});
  }
  clearForm()
  {
this.eventRegistration.reset();
  }
  ngOnInit() {}
  onFileSelected(event) {
    console.log((this.selectefFile = <File>event.target.files[0]));
  }




}
