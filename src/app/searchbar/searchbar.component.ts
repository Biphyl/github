import { Component, OnInit } from '@angular/core';
import { RequestService } from '../user-request/request.service';

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

  constructor(private requestservice:RequestService) { }

  search(inputsearch:string){
    let promise= new Promise((resolve,reject)=> {
    this.requestservice.userInfo(this.inputsearch).toPromise().then((data)=>{
      this.outputresult=data['items'];
      this.users=data;
      console.log(data)
    })
  }
    )
  }
  searchRepo(reposearch:string){
    let promise= new Promise((resolve,reject)=> {
    this.requestservice.reposLink(this.reposearch).toPromise().then((data)=>{
      this.outputRepoSearch=data['items'];
      this.repos=data;
      console.log(data)
    })
  }
    )
  }
 

  ngOnInit(): void {
  }

}
