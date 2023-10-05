import {Component, OnInit, Type} from '@angular/core';
import {CertProps} from "../../../../core/types/types";
import {HttpClient} from "@angular/common/http";
import {firstValueFrom, shareReplay} from "rxjs";
import {
    CertCoursesInteractor
} from "../../../../data/interactors/implementations/certifications/cert-courses.interactor";

export type ComponentProps = { courses: CertProps[], certifications: CertProps[] };

@Component({
    selector: 'app-certificates',
    templateUrl: './certificates.component.html',
    styles: []
})
export class CertificatesComponent implements OnInit {
    public certAndCourses: ComponentProps = {courses: [], certifications: []};

    constructor(private http: HttpClient, private interactor: CertCoursesInteractor) {
    }

    public async ngOnInit(): Promise<void> {
        const result = this.interactor.getCertifications().pipe(shareReplay());
        const values = await firstValueFrom(result);
        if (values) {
            this.certAndCourses = values;
        }
    }
}
