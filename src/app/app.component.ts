import { Component, OnInit } from '@angular/core';
import { Observable, interval} from 'rxjs';
import { map, tap } from 'rxjs/operators'
import * as moment from 'moment';

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

  public days: number;
  public hours: number;
  public minutes: number;
  public seconds: number;

  public time;
  public pageLoaded: moment.Moment;

  private christmas = moment('24-12-2019 17:00:00', 'DD-MM-YYYY HH:mm:ss').unix();



  ngOnInit() {
    this.question = 0;
    this.setInterval();

    this.time = interval(1000).pipe(
      map(() => {
        const now = moment().unix();
        const diffTime = (this.christmas - now);
        const duration = moment.duration(diffTime * 1000, 'milliseconds');
        if (diffTime > 0) {
          this.days = moment.duration(duration).days();
          this.hours = moment.duration(duration).hours();
          this.minutes = moment.duration(duration).minutes();
          this.seconds = moment.duration(duration).seconds();
    
        }
        return this.days + ':' + this.hours + ':' + this.minutes + ':' + this.seconds;
      })
    )
  }

  open() {
    this.opened = true;
  }

  start() {
    this.question++;
  }

  setInterval() {
    
    

   
    


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
    this.errorMessage = (value === '') ? 'Du må skrive ett svar' : value + ' er ikke riktig!';
    this.error = true;
    return false;
  }



}
