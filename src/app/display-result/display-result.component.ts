import { Component, OnInit } from '@angular/core';
import { RequestService } from '../user-request/request.service';

@Component({
  selector: 'app-display-result',
  templateUrl: './display-result.component.html',
  providers:[RequestService],
  styleUrls: ['./display-result.component.css']
})
export class DisplayResultComponent implements OnInit {

  constructor(private requestsearvice:RequestService) { }

  ngOnInit(): void {
  }

}
