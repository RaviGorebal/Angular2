import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

// import { AppComponent } from './app.component';
// import { CourseComponent } from './course.component';
// import { OtherComponent } from './other/other.component';
// import { AnotherComponent } from './other/another.component';
import { AttrDirComponent } from './attr-dir.component';
// import { InterestComponent } from './interest/interest.component';
// import { CuspipePipe } from './cuspipe.pipe';
// import { Pipe, PipeTransform } from '@angular/core';
// import { HighlightDirective } from './highlight.directive';
// import { UnlessDirective } from './unless.directive';
// import { LifecycleComponent } from './lifecycle/lifecycle.component';
// import { LogServicesComponent } from './services/logservices.component';
// import { LoginComponent } from './forms/login.component';
// import { ReactiveComponent } from './forms/reactive.component';
@NgModule({
  declarations: [AttrDirComponent],
  imports: [ BrowserModule,FormsModule],
  bootstrap: [AttrDirComponent]
})
export class AppModule {}
