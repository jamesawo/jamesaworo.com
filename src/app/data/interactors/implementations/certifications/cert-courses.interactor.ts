import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {ComponentProps} from "../../../../presenter/pages/certificates/certificates/certificates.component";

@Injectable({ providedIn: 'root' })
export class CertCoursesInteractor {

    public url = `https://raw.githubusercontent.com/jamesawo/mock/main/certs.json`;
    public localCerts = '/assets/json/certs.json';

    constructor(private http: HttpClient) {
    }

    public getCertifications(){
        return  this.http.get<ComponentProps>(this.localCerts);
    }
}
