import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Aquario } from '../models/aquario';
import { Peixe } from '../models/peixe';

@Injectable({
    providedIn: 'root'
})
export class AquarioService {

    private aquarioApiServerUrl = environment.apiBaseUrl;
    private peixeApiServerUrl = environment.apiBaseUrl;

    constructor(private http: HttpClient) { }

    public getAquarios(): Observable<Aquario[]> {
        return this.http.get<Aquario[]>(`${this.aquarioApiServerUrl}/aquarios/`);
    }

    public addAquario(aquario: Aquario): Observable<Aquario> {
        return this.http.post<Aquario>(`${this.aquarioApiServerUrl}/aquarios/`, aquario);
    }

    public updateAquario(aquario: Aquario): Observable<Aquario> {
        return this.http.put<Aquario>(`${this.aquarioApiServerUrl}/aquarios/`, aquario);
    }

    public deleteAquario(aquarioId: number): Observable<void> {
        return this.http.delete<void>(`${this.aquarioApiServerUrl}/aquarios/${aquarioId}`);
    }


}