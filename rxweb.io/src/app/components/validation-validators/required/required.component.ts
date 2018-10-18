import { Component, OnChanges, SimpleChanges, OnInit, Input } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { RequiredAddValidatorComponent } from 'src/assets/examples/reactive-form-validators/validators/required/add/required-add.component';
import { RequiredCompleteValidatorComponent } from 'src/assets/examples/reactive-form-validators/validators/required/complete/required-complete.component';
import { RequiredDynamicValidatorComponent } from 'src/assets/examples/reactive-form-validators/validators/required/dynamic/required-dynamic.component';
import { DisqusComponent } from '../../shared/disqus/disqus.component';
import { HttpClient, HttpRequest, HttpErrorResponse } from '@angular/common/http';
import { TitleCasePipe } from "@angular/common";

@Component({
  templateUrl: './required.component.html',
  entryComponents: [
DisqusComponent
  ]
})
export class RequiredComponent implements OnInit {
  showComponent: boolean = false;
  options: any = { responseType: 'text' };
  codeContent:any = {};
  sidebarLinks:any = {"When to use":null,"Basic Required Validation":null,"RequiredConfig":["conditionalExpression","message"],"Complete required Example":null,"Dynamic required Example":null};
  tab_1:string = "conditionalExpressionModel";
   tab_2:string = "messageModel";
   tab_3:string = "completeExample";
   tab_4:string = "dynamicExample";
   
  constructor(
    private http: HttpClient   ,private titlecasePipe:TitleCasePipe
  ) {
  }
  ngOnInit(): void {
	this.http.get('assets/examples/reactive-form-validators/validators/required/required.json',this.options).subscribe((response:object) => {
      this.codeContent = JSON.parse(response.toString());
	  let splitedArray = location.pathname.split('/');
	  if(splitedArray[2] != undefined)
		document.title = this.titlecasePipe.transform(splitedArray[2]) + " : " + this.titlecasePipe.transform(splitedArray[1])
	  else
		document.title = splitedArray[1] ? this.titlecasePipe.transform(splitedArray[1]) : "RxApp"
	  this.showComponent = true;
    })
  }
  scrollTo(section) {  
    var node = document.querySelector(section);
    node.scrollIntoView(true);
    var scrolledY = window.scrollY;
    if(scrolledY){
      window.scroll(0, scrolledY - 62);
    }
	return false;
  }
}