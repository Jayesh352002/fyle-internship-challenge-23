import { Component, Input } from '@angular/core';
import { GithubAppComponent } from '../github-app/github-app.component';

@Component({
  selector: 'app-github-repos',
  templateUrl: './github-repos.component.html',
  styleUrls: ['./github-repos.component.scss'],
})
export class GithubReposComponent {
  @Input()
  githubRepos!: any[];

  page: number = 1;
  count: number = 0;
  tableSize: number = 10;
  tableSizes: any = [5];

  constructor(private obj: GithubAppComponent) {}

  onTableDataChange(event: any) {
    this.page = event;
    this.obj.searchUser();
    this.onTableSizeChange(event)
  }
  onTableSizeChange(event: any): void {
    //console.log(event.target.value);
    this.tableSize = event.target.value;
    this.page = 1;
    this.obj.searchUser();
  }
}
