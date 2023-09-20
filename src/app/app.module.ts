import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgxGalleryModule } from '@kolkov/ngx-gallery';


import { MarkdownModule } from 'ngx-markdown';

import { ToastService } from 'src/app/presenter/components/shared/toast/toast.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { DATA_BOOKMARK_IOC, DATA_POST_IOC, DATA_PROJECT_IOC } from './data/data.ioc';
import { PresenterModule } from './presenter/presenter.module';


@NgModule({
    bootstrap: [AppComponent],
    declarations: [
        AppComponent,
    ],
    exports: [],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        RouterModule,
        MarkdownModule.forRoot(),
        AppRoutingModule,
        PresenterModule,
        NgxGalleryModule
    ],
    providers: [
        ...DATA_BOOKMARK_IOC,
        ...DATA_PROJECT_IOC,
        ...DATA_POST_IOC,
        ToastService
    ]
})
export class AppModule {
}
