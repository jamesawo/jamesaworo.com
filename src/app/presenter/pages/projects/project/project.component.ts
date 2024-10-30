import { Component, Input, OnInit } from "@angular/core";

import { NgxGalleryOptions, NgxGalleryImage } from "@kolkov/ngx-gallery";

import { ProjectRequest } from "src/app/data/requests/project.request";

@Component({
	selector: "app-project",
	templateUrl: "./project.component.html",
})
export class ProjectComponent implements OnInit {
	@Input()
	public project?: ProjectRequest;

	public galleryOptions: NgxGalleryOptions[] = [];

	ngOnInit() {
		this.galleryOptions = [
			{
				width: "600px",
				height: "400px",
				thumbnailsColumns: 3,
				imageBullets: true,
				previewFullscreen: true,
				previewCloseOnClick: true,
				previewCloseOnEsc: true,
				imageArrows: true,
				imageAutoPlay: true,
			},
		];
	}
}
