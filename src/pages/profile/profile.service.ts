import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { ProfilesModel } from "./profile.model";

/*
  Generated class for the ProfileServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class ProfileServiceProvider {

  constructor(public http: Http) {
    console.log('Hello ProfileServiceProvider Provider');
  }
  getProfile(): Promise<ProfilesModel> {
    return this.http.get('./assets/example_data/profile.json')
      .toPromise()
      .then(response => response.json() as ProfilesModel)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

}
