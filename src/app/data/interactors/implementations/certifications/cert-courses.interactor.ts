import {Injectable} from "@angular/core";
import {IBookmarkInteractor} from "../../contracts/ibookmark.interactor";
import {HttpClient} from "@angular/common/http";
import {ComponentProps} from "../../../../presenter/pages/certificates/certificates/certificates.component";

@Injectable({ providedIn: 'root' })
export class CertCoursesInteractor {

    constructor(private http: HttpClient) {
    }

    public getCertifications(){
        return  this.http.get<ComponentProps>(`https://raw.githubusercontent.com/jamesawo/mock/main/certs.json`);
    }
}
