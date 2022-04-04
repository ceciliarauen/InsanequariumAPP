import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { Peixe } from "../models/peixe";


@Injectable({
    providedIn: 'root'
})

export class PeixeService {

    private peixeApiServerUrl = environment.apiBaseUrl;

    constructor(private http: HttpClient) { }

    public getPeixes(): Observable<Peixe[]> {
        return this.http.get<Peixe[]>(`${this.peixeApiServerUrl}/peixes/`);
    }

    public addPeixe(peixe: Peixe): Observable<Peixe> {
        return this.http.post<Peixe>(`${this.peixeApiServerUrl}/peixes/`, peixe);
    }

    public updatePeixe(peixe: Peixe): Observable<Peixe> {
        return this.http.put<Peixe>(`${this.peixeApiServerUrl}/peixes/`, peixe);
    }

    public deletePeixe(peixeId: number): Observable<void> {
        return this.http.delete<void>(`${this.peixeApiServerUrl}/peixes/${peixeId}`);
    }

}