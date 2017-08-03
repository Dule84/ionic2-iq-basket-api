import {Http, Response} from "@angular/http";
import {Observable} from "rxjs/Observable";
import 'rxjs/Rx';
import {Injectable} from "@angular/core";
import {Tips} from "./tips.interface";
/**
 * Created by Dule on 02/08/2017.
 */

@Injectable()
export class TipsService {
    constructor(private http: Http) {

    }
    getTips(): Observable<any> {
        return this.http.get('http://iq-basketball.com/api/index')
            .map(
                (response: Response) => {
                    return response.json().tips;
                }
            );
    }
}