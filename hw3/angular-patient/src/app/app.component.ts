import { Component } from '@angular/core';
import { Patient } from './patient.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  searchText: string;
  patients: Patient[];
  result: Patient[];

  constructor() {
    this.searchText = "";
    this.patients = [
      new Patient("Junhua", "Shi", "shijh302@gmail.com", "http://google.com", "Nick"),
      new Patient("Lawen", "Shi", "shijh302@gmail.com", "http://google.com", "David"),
      new Patient("Tim", "Shi", "shijh302@gmail.com", "http://google.com", "George"),
      new Patient("Jim", "Shi", "shijh302@gmail.com", "http://google.com", "Jim")
    ];
    this.result = this.patients;
  }

  search() {
    var str = this.searchText.split(" ");
    if(str.length > 1) {
      let command = str[0];
      let searchWord = str[1];
      
      if(command == "doctor") {
        this.result = this.patients.filter(patient => patient.doctorName == searchWord);
      } else {
        this.result = this.patients.filter(patient => patient.firstName.startsWith(searchWord.charAt(0)));
      }
    }

  }
}
