import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: './resolver-sample.component.html',
  styleUrls: ['./resolver-sample.component.scss'],
})
export class ResolverSampleComponent implements OnInit {
  data!: any[];
  photos!: any[];

  constructor(private ac: ActivatedRoute, private http: HttpClient) {}

  ngOnInit(): void {
    // this.data = this.ac.params.subscribe((p) => {});

    console.log('data', this.ac.snapshot.data['users']);
    this.data = [...this.ac.snapshot.data['users']];

    const param = (this.ac.snapshot as any).param;
  }

  trackByFn(index: number, item: any) {
    return item.id;
  }

  loadPhotos() {
    this.http.get('https://jsonplaceholder.typicode.com/photos').subscribe({
      next: (data: any) => {
        // try, success
        this.photos = [
          ...data,
          ...data,
          ...data,
          ...data,
          ...data,
          ...data,
          ...data,
          ...data,
          ...data,
          ...data,
        ];
      },
      error: (err) => {
        // catch
      },
      complete: () => {
        // finally blogu
      },
    });
  }
}
