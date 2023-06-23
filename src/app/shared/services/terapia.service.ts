import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs'

@Injectable()
export class TerapiaService {
  private API: string
  private headers: HttpHeaders

  constructor(private httpClient: HttpClient) {
    this.API = 'https://lara-terapias-default-rtdb.firebaseio.com/lista.json'
    this.headers = this.getMultipartHeaders()
  }

  public getMultipartHeaders() {
    let headers = new HttpHeaders()
    headers = headers.set('Content-Type', 'application/json; charset=utf-8')
    headers = headers.set('cache-control', 'no-cache')
    headers = headers.set('enctype', 'multipart/form-data')
    return headers
  }

  getListaTerapias(): Observable<any> {
    return this.httpClient.get<any>(this.API, { headers: this.headers })
  }

  criarTerapia(terapia: any): Observable<any> {
    return this.httpClient.post<any>(this.API, terapia, { headers: this.headers })
  }

  editarTerapia(terapia: any): Observable<any> {
    return this.httpClient.put<any>(this.API, terapia, { headers: this.headers })
  }
}
