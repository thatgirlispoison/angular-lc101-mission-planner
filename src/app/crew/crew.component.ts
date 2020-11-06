import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crew',
  templateUrl: './crew.component.html',
  styleUrls: ['./crew.component.css']
})
export class CrewComponent implements OnInit {

  crew: object[] = [
    {name: "Eileen Collins", firstMission: false},
    {name: "Mae Jemison", firstMission: false},
    {name: "Ellen Ochoa", firstMission: true}
  ];
  memberBeingEdited: object = null;
  crewMember: boolean = false;
  
  add(memberName: string, isFirst: boolean) {
    for (let i = 0; i < this.crew.length; i++) {
      if (this.crew[i]['name'] === memberName) {
        this.crewMember = true;
      }
    }
    if (!this.crewMember) {
      this.crew.push({ name: memberName, firstMission: isFirst });
    }
    this.crewMember = false;
  }
  
  remove(member: object) {
    let index = this.crew.indexOf(member);
    this.crew.splice(index, 1);
  }
  edit(member: object) {
    this.memberBeingEdited = member;
  }
  save(name: string, member: object) {
    member['name'] = name;
    this.memberBeingEdited = null;
  }
  constructor() { }

  ngOnInit() {
  }

}
