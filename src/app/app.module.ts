import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CourseComponent } from './course.component';
import { OtherComponent } from './other/other.component';
import { AnotherComponent } from './other/another.component';
import { AttribDirComponent } from './other/attrib-dir/attrib-dir.component';
@NgModule({
  declarations: [ CourseComponent, OtherComponent, AnotherComponent, AttribDirComponent ],
  imports: [ BrowserModule ],
  bootstrap: [CourseComponent]
})
export class AppModule { }
