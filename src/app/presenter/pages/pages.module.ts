import { MarkdownModule } from 'ngx-markdown';
import { RouterModule } from '@angular/router';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { HomeComponent } from './home/home.component';
import { EditorModule } from './editor/editor.module';
import { BookmarksComponent } from './bookmarks/bookmarks.component';
import { BlogComponent } from './blog/blog.component';
import { NgModule } from '@angular/core';
import { ProjectsComponent } from './projects/projects.component';
import { ComponentModule } from "../components/components.module";
import { BookmarkComponent } from './bookmarks/bookmark/bookmark.component';
import { CommonModule } from '@angular/common';
import { PostComponent } from './blog/post/post.component';
import { ProjectComponent } from './projects/project/project.component';
import {NgxGalleryModule} from "@kolkov/ngx-gallery";
import { CertificatesComponent } from './certificates/certificates/certificates.component';
import { SchoolboxComponent } from './projects/landing/schoolbox/schoolbox.component';
import { StockyComponent } from './projects/landing/stocky/stocky.component';


@NgModule({
    declarations: [
        BlogComponent,
        BookmarksComponent,
        HomeComponent,
        PostComponent,
        ProjectsComponent,
        BookmarkComponent,
        PostDetailComponent,
        ProjectComponent,
        CertificatesComponent,
        SchoolboxComponent,
        StockyComponent,
    ],
    exports: [
        CommonModule,
        ComponentModule,
        PostComponent,
        BlogComponent,
        ProjectComponent
    ],
    imports: [
        RouterModule,
        CommonModule,
        ComponentModule,
        EditorModule,
        MarkdownModule.forChild(),
        NgxGalleryModule,
    ]
})
export class PagesModule { }
