import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'languages',
  templateUrl: './languages.component.html',
  styleUrls: ['./languages.component.css']
})
export class LanguagesComponent implements OnInit {

  languages = ["C#", "JavaScript", "Python"];

  viewMode = "listCourses";

  data = {
    title:"isFav",
    isFav:false
  }

  OnChange(eventArgs){
    console.log("Fav is changed to", eventArgs);
  }

  selLanguage;

  constructor() { }

  ngOnInit() {
    
  }

  btnClick(){
    console.log("button is clicked");
  }

}
