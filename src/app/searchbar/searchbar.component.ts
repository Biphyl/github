import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent implements OnInit {

  inputsearch = ''
  outputresult = []
  users: any = []
  reposearch = ''
  outputRepoSearch = []
  repos: any = []

  constructor() { }

  ngOnInit(): void {
  }

}
