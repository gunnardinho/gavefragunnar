import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ChristmasBrothersSister';

  public question: number;
  public errorMessage: string;
  public opened: boolean;
  public error: boolean;
  public finished: boolean;

  ngOnInit() {
    this.question = 0;
  }

  open() {
    this.opened = true;
  }

  start() {
    this.question++;
  }

  onSubmit(value, answers): boolean {
    for (const a in answers) {
      if (value.toUpperCase() === answers[a].toUpperCase()) {
        this.question++;
        this.error = false;
        if (this.question > 10) {this.finished = true; }
        return true;
      }
    }
    this.errorMessage = value + ' er ikke riktig!';
    this.error = true;
    return false;
  }



}
