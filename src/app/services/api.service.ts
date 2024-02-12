import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, retry, tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  public notFound: boolean = true;

  constructor(private httpClient: HttpClient) {}

  getUser(githubUsername: string) {
    let dataUrl = this.httpClient.get(
      `https://api.github.com/users/${githubUsername}`
    );
    return dataUrl.pipe(retry(0), catchError(this.handleErrors));
  }

  // implement getRepos method by referring to the documentation. Add proper types for the return type and params
  getRepos(githubUsername: string) {
    let dataUrl = this.httpClient.get(
      `https://api.github.com/users/${githubUsername}/repos`
    );
    return dataUrl.pipe(retry(0), catchError(this.handleErrors));
  }

  getLanguage(githubUsername: string,githubRepo: string){
    return `https://api.github.com/users/${githubUsername}/${githubRepo}/languages`
  }

  public handleErrors(error: HttpErrorResponse) {
    let errorMessage!: string;
    this.notFound = false;
    if (error.error instanceof ErrorEvent) {
      errorMessage = `MESSAGE : ${error.error.message}`;
    } else {
      errorMessage = `STATUS : ${error.status} MESSAGE : ${error.message}`;
    }
    console.log(errorMessage);

    return throwError(errorMessage);
  }
}
