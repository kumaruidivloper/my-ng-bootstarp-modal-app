
import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { JsonpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbdModalBasic } from './app.component';

@Component({
  selector: 'my-app',
  template: `
    <div class="container-fluid">
    
    <hr>
    <p>
      This is a demo plnkr forked from the <strong>ng-bootstrap</strong> project: Angular powered Bootstrap.
      Visit <a href="https://ng-bootstrap.github.io/" target="_blank">https://ng-bootstrap.github.io</a> for more widgets and demos.
    </p>
    <hr>

    <ngbd-modal-basic></ngbd-modal-basic>
  </div>
  `
})
export class App {
}   

@NgModule({
  imports: [BrowserModule, FormsModule, ReactiveFormsModule, JsonpModule, NgbModule.forRoot()], 
  declarations: [App, NgbdModalBasic],
  bootstrap: [App]
}) 
export class AppModule {}
