import { Component } from '@angular/core';

@Component({
  selector: 'my-course',
  templateUrl: './course.component.html' 
})
export class CourseComponent {
  name:string = 'Angular2';
  online:boolean = false;
  topics:string[]=["Getting Started","Typescript","Installation","Forms","Services"]
  addTopic(topic):void{
      console.log("Adding New Topic Name " + topic);
      this.topics.push(topic);
  }
  clearTopic():void{
      this.topics.splice(0,this.topics.length)
  }
  mode:string ='f';
  flight:string='Indigo'
  train:string='AP express';
}
