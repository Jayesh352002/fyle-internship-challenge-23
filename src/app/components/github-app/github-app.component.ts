import { Component } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { NgxUiLoaderService } from 'ngx-ui-loader';

@Component({
  selector: 'app-github-app',
  templateUrl: './github-app.component.html',
  styleUrls: ['./github-app.component.scss'],
})
export class GithubAppComponent {
  public githubUserQuery!: string;
  public githubProfile: any;
  public githubRepos!: any[];
  public errorMessage!: string;

  public notFound: boolean = true;

  repoName!: string;

  constructor(
    private apiService: ApiService,
    private ngxService: NgxUiLoaderService
  ) {}

  public searchUser() {
    this.ngxService.start();
    this.notFound = true;

    // to get the github profile
    this.apiService.getUser(this.githubUserQuery).subscribe(
      (data: any) => {
        this.githubProfile = data;
        this.ngxService.stop();
      },
      (error: string) => {
        this.notFound = false;
        this.errorMessage = error;
        this.ngxService.stop();
      }
    );

    // to get the github repos
    this.apiService.getRepos(this.githubUserQuery).subscribe(
      (data: any) => {
        this.githubRepos = data;
        console.dir(this.githubRepos);
      },
      (error: string) => {
        this.errorMessage = error;
      }
    );
  }

}
