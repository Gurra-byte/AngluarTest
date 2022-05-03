import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  newMemberName = '';
  members: string[] = [];
  errorMessage: string = "";

  nummberOfTeams: number | "" = "";
  teams: string[][] = [];
  
  onInput(input: string){
    this.newMemberName = input;    
  }

  addMember()
  {
    if(!this.newMemberName){
      this.errorMessage = "Name can't be empty.";
      return;
    }

    this.members.push(this.newMemberName);
    this.newMemberName = "";
    this.errorMessage = "";
  }

  onNumberOfTeamsInput(input: string) {
    this.nummberOfTeams = Number(input);
  }

  generateTeams(){
    
    if(!this.nummberOfTeams || this.nummberOfTeams <= 0){
      this.errorMessage = "Error";
      return;
    }

    if(this.members.length < this.nummberOfTeams){
      this.errorMessage = "To few Players";
      return;
    }
    this.errorMessage = "";
    const allMembers = [...this.members]

    while(allMembers.length){
      for(let i = 0; i < this.nummberOfTeams; i++){
        const ran = Math.floor(Math.random() * allMembers.length);
        const member = allMembers.splice(ran, 1)[0];
        if(!member){
          break;
        }
        if(this.teams[i]){
          this.teams[i].push(member);
        }
        else{
          this.teams[i] = [member];
        }
      }
    }
    console.log(this.teams);
    this.members = [];
    this.nummberOfTeams = "";

  }
}
