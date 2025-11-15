import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../services/api-call.service';
import { distinctUntilChanged } from 'rxjs';

@Component({
  selector: 'app-result-section',
  imports: [CommonModule],
  templateUrl: './result-section.html',
  styleUrl: './result-section.css',
})
export class ResultSection implements OnInit {

  showResults: boolean = false;
  loading: boolean = false;
  papers: any[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.getQueryParams().pipe(distinctUntilChanged()).subscribe(queryParams => {
      this.showResults = true;
      this.loading = true;

      setTimeout(() => {
        document.getElementById('results')?.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }, 100);

      this.apiService.getResponse(queryParams).subscribe({
        next: (data: any) => {
          this.loading = false;
          this.papers = data?.results;
        },
        error: (error: any) => {
          this.loading = false;
          console.error('Error fetching papers:', error);
        },
      })
    });
  }
}
