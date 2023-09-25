import { Component, Input , Output, EventEmitter,OnInit} from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit{
  @Input() username: string = 'default';
  @Output() message = new EventEmitter<string>();

  constructor(){}
  ngOnInit(): void {
    this.message.emit("output from welcome")
  }
  
  
}
