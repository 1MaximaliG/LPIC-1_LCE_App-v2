import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { QuestionsModule } from './questions/questions.module';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';

import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

import { ResolverInterceptor } from './shared/resolver.interceptor';
import { CheckModule } from './check/check.module';
import { ExamModule } from './exam/exam.module';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    QuestionsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, {
        delay: 0,
        dataEncapsulation: false}
    ),
    CheckModule,
    ExamModule
     ],
  providers: [
    {
    provide: HTTP_INTERCEPTORS,
    useClass: ResolverInterceptor,
    multi: true
  }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
