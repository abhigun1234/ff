import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-db',
  templateUrl: './db.component.html',
  styleUrls: ['./db.component.css']
})
export class DbComponent implements OnInit {
  changeText="hi how are you"
  constructor() { }
  myid='123'
  condition=true
  listoffruits=['mango','banana','apple']

  ngOnInit() {
  }


  login(username)
  {
    alert(username)

  }

}
