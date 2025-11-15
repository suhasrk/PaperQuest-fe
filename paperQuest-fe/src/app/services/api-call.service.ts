import { Injectable } from '@angular/core';
import { Subject,delay,of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { mockData } from '../components/assets/mock-data';
import { apiConst } from '../constants/api-constant';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) {}

  // Subject to broadcast query param changes
  private setQueryParamsSource = new Subject<any>();

  // Observable for components to subscribe to
  setQueryParams$ = this.setQueryParamsSource.asObservable();

    // Method to get the current query params observable
  getQueryParams() {
    return this.setQueryParams$;
  }

  // Method to update the query params
  updateQueryParams(params: any) {
    this.setQueryParamsSource.next(params);
  }

  getResponse(queryParams: any) {
    return this.http.post(apiConst.BASE_URL + apiConst.SEARCH_ENDPOINT,{
        query: queryParams.topic,
        top_k: queryParams.numPapers
    });
  }
}
