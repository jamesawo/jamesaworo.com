import {Component, Input, OnInit} from '@angular/core';
import {ProjectRequest} from 'src/app/data/requests/project.request';
import {NgxGalleryOptions, NgxGalleryImage} from '@kolkov/ngx-gallery';


@Component({
    selector: 'app-project',
    templateUrl: './project.component.html',

})
export class ProjectComponent implements OnInit {
    @Input()
    public project?: ProjectRequest;

    public galleryOptions: NgxGalleryOptions[] = [];

    // galleryImages: NgxGalleryImage[] = [];

    ngOnInit() {
        this.galleryOptions = [
            {
                width: '600px',
                height: '400px',
                thumbnailsColumns: 3,
                imageBullets: true,
                previewFullscreen: true,
                previewCloseOnClick: true,
                previewCloseOnEsc: true,
                imageArrows: true,
                imageAutoPlay: true,
            }
        ];

/*
        this.galleryImages = [
            {
                small: 'https://lukasz-galka.github.io/ngx-gallery-demo/assets/img/1-small.jpeg',
                medium: 'https://lukasz-galka.github.io/ngx-gallery-demo/assets/img/1-medium.jpeg',
                big: 'https://lukasz-galka.github.io/ngx-gallery-demo/assets/img/1-big.jpeg'
            },
            {
                small: 'https://lukasz-galka.github.io/ngx-gallery-demo/assets/img/2-small.jpeg',
                medium: 'https://lukasz-galka.github.io/ngx-gallery-demo/assets/img/2-medium.jpeg',
                big: 'https://lukasz-galka.github.io/ngx-gallery-demo/assets/img/2-big.jpeg'
            },
            {
                small: 'https://lukasz-galka.github.io/ngx-gallery-demo/assets/img/3-small.jpeg',
                medium: 'https://lukasz-galka.github.io/ngx-gallery-demo/assets/img/3-medium.jpeg',
                big: 'https://lukasz-galka.github.io/ngx-gallery-demo/assets/img/3-big.jpeg'
            },
            {
                small: 'https://lukasz-galka.github.io/ngx-gallery-demo/assets/img/4-small.jpeg',
                medium: 'https://lukasz-galka.github.io/ngx-gallery-demo/assets/img/4-medium.jpeg',
                big: 'https://lukasz-galka.github.io/ngx-gallery-demo/assets/img/4-big.jpeg'
            },
            {
                small: 'https://lukasz-galka.github.io/ngx-gallery-demo/assets/img/5-small.jpeg',
                medium: 'https://lukasz-galka.github.io/ngx-gallery-demo/assets/img/5-medium.jpeg',
                big: 'https://lukasz-galka.github.io/ngx-gallery-demo/assets/img/5-big.jpeg'
            }
        ];
         */
    }



}
