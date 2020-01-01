import { Component, OnInit } from '@angular/core';
import { Observable, interval} from 'rxjs';
import { map, tap } from 'rxjs/operators';
import * as moment from 'moment';

@Component({
  selector: 'app-kenneth',
  templateUrl: './kenneth.component.html',
  styleUrls: ['./kenneth.component.scss']
})
export class KennethComponent implements OnInit {
  title = 'KennethBirthday';

  public opened: boolean;

  private days: number;
  private hours: number;
  private minutes: number;
  private seconds: number;
  public diffTime: number;
  public time: Observable<string>;
  private readonly christmas = moment('02-01-2020 18:00:00', 'DD-MM-YYYY HH:mm:ss').unix();
  public isChristmas: boolean;



  ngOnInit() {

    this.time = interval(1000).pipe(
      map(() => {
        const now = moment().unix();
        this.diffTime = (this.christmas - now);
        const duration = moment.duration(this.diffTime * 1000, 'milliseconds');

        if (this.diffTime > 0) {
          this.days = moment.duration(duration).days();
          this.hours = moment.duration(duration).hours();
          this.minutes = moment.duration(duration).minutes();
          this.seconds = moment.duration(duration).seconds();
        } else {
          this.isChristmas = true;
        }
        return this.days + ':' + this.hours + ':' + this.minutes + ':' + this.seconds;
      })
    );
  }

  open() {
    if (  !(this.diffTime > 0)) {
      this.opened = true;
    }
  }



}



