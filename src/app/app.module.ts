import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChildComponent } from './hooks/child/child.component';
import { ParentComponent } from './hooks/parent/parent.component';
import { AsyncComponent } from './asyncPipes/async-component/async.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MaterialModule } from './shared/material.module';
import { ResolverSampleComponent } from './resolver-sample/resolver-sample.component';
import { UrlFormatterPipe } from './pipes/url-formatter.pipe';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { CDParentComponent } from './ChangeDetection/cdparent/cdparent.component';
import { CDChildComponent } from './ChangeDetection/cdchild/cdchild.component';
@NgModule({
  declarations: [AppComponent, ParentComponent, ChildComponent, AsyncComponent, ResolverSampleComponent, UrlFormatterPipe, CDParentComponent, CDChildComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    ScrollingModule
    // MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
