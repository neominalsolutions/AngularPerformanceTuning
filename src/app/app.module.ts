import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChildComponent } from './hooks/child/child.component';
import { ParentComponent } from './hooks/parent/parent.component';
import { AsyncComponent } from './asyncPipes/async-component/async.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MaterialModule } from './shared/material.module';
import { ResolverSampleComponent } from './resolver-sample/resolver-sample.component';
import { UrlFormatterPipe } from './pipes/url-formatter.pipe';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { CDParentComponent } from './ChangeDetection/cdparent/cdparent.component';
import { CDChildComponent } from './ChangeDetection/cdchild/cdchild.component';
import { AngularTemplatesComponent } from './angular-templates/angular-templates.component';
import { AngularContentComponent } from './angular-templates/angular-content/angular-content.component';
import { ApiLogger, ConsoleLogger, loggerType } from './providers/ILogger';
@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ChildComponent,
    AsyncComponent,
    ResolverSampleComponent,
    UrlFormatterPipe,
    CDParentComponent,
    CDChildComponent,
    AngularTemplatesComponent,
    AngularContentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    ScrollingModule,
    // MatButtonModule,
  ],
  providers: [
    // uygulama genelimde loglama yapmak içinm console logger kullanıcağım.
    {
      provide: loggerType,
      useClass: ApiLogger,
    },
    {
      provide: 'apiKey', // provider keyler unique tanımlanmalıdır
      useValue: '2432432432fsdfdsf',
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
