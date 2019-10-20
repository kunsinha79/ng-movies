import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Movie Serch';
  constructor(private router: Router) {}

  /**
   * used to set the default language and navigate to search page
   * @returns void
   */
  ngOnInit(): void {
    // this.router.navigate(['search']);
  }
}
