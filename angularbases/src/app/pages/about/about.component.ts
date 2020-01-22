import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor( private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getAbout().subscribe( posts => { console.log(posts); })
  }

}