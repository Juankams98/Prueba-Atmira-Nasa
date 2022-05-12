import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ENDPOINTS } from '../../../environments/environment';
import { SessionService } from './session.service';

@Injectable({
  providedIn: 'root'
})
export class DataService extends SessionService{​
  public base = "https://";
  public endPoints = ENDPOINTS;
  public url: any;
  public responseType: any = 'json';
  public httpHeaders: HttpHeaders = new HttpHeaders({​
    "Content-Type": "application/json; charset=UTF-8"
  }​);

  public CONST_HEADERS = {
    contentType: 'Content-Type',
    applicationJson: 'application/json',
    accept: 'Accept',
    textPlain: 'text/plain',
    asterisco: '*/*',
    acceptText: 'application/json, text/plain, */*'
  }

  // Parametros del HTTPHeader
  public params: HttpParams = new HttpParams();
  // constructor del modulo
  constructor(
    public http: HttpClient
  ) {​
    super()
    this.httpHeaders = this.httpHeaders.set(
      "X-Santander-Channel",
      "OFI",
    );
  }​
  // clase de getData con la pipeline
  /**
   * 
   */
  getData(): Observable<any> {​
    return this.http
      .get(this.base + this.url, {​
        headers: this.httpHeaders,
        params: this.params,
		    responseType: this.responseType
      }​)
      .pipe(
        map(res => {​
          // devuelve el resultado
          return this.processHttpResponse(res);
        }​),
      );
  }​
  // clase para crear elementos
  create(body: object): Observable<any> {​
    return this.http
      .post(this.base + this.url, body, {​
        headers: this.httpHeaders,
        params: this.params,
        responseType: this.responseType
      }​)
      .pipe(
        map(res => {​
          return this.processHttpResponse(res);
        }​),
      );
  }​
  // clase para actualizar elementos
  put(body: object): Observable<any> {​
    return this.http
      .put(this.base + this.url, body, {​
        headers: this.httpHeaders,
        params: this.params,
      }​)
      .pipe(
        map(res => {​
          // devuelve el resultado
          return this.processHttpResponse(res);
        }​),
      );
  }​

  patch(body: object): Observable<any> {​
    return this.http
      .patch(this.base + this.url, body, {​
        headers: this.httpHeaders,
        params: this.params,
      }​)
      .pipe(
        map(res => {​
          // devuelve el resultado
          return this.processHttpResponse(res);
        }​),
      );
  }​
  // clase para borrar elementos
  delete(): Observable<any> {​
    return this.http
      .delete(this.base + this.url, {​
        headers: this.httpHeaders,
        params: this.params,
      }​)
      .pipe(
        map(res => {​
          // devuelve el resultado
          return this.processHttpResponse(res);
        }​),
      );
  }​

  /**
   * Metodo que procesa el RESPONSE de las peticiones HttpClien,
   * en este caso inicializamos los HttpParams luego de cada peticion
   * @param response: Object
   * @return response
   */
  processHttpResponse(response: any) {​
    this.params = new HttpParams();
    this.responseType = 'json';
    this.httpHeaders = new HttpHeaders({​
      "Content-Type": "application/json"
    }​);
    // devuelve el resultado
    return response;
  }​
}​
