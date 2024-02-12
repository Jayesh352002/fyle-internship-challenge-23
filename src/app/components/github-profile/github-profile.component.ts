import { Component, Input } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-github-profile',
  templateUrl: './github-profile.component.html',
  styleUrls: ['./github-profile.component.scss'],
})
export class GithubProfileComponent {
  @Input() githubProfile: any;

  constructor(private apiService: ApiService) {}
}
