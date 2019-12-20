import { Component, OnInit } from '@angular/core';
import { Observable, interval} from 'rxjs';
import { map, tap } from 'rxjs/operators';
import * as moment from 'moment';

@Component({
  selector: 'app-elinor',
  templateUrl: './elinor.component.html',
  styleUrls: ['./elinor.component.scss']
})
export class ElinorComponent implements OnInit {
  title = 'ChristmasElinor';

  public opened: boolean;

  private days: number;
  private hours: number;
  private minutes: number;
  private seconds: number;
  public diffTime: number;
  public time: Observable<string>;
  private readonly christmas = moment('24-12-2019 17:00:00', 'DD-MM-YYYY HH:mm:ss').unix();
  // private readonly christmas = moment('18-12-2019 09:35:00', 'DD-MM-YYYY HH:mm:ss').unix();
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
    if (!(this.diffTime > 0)) {
      this.opened = true;
    }
  }



}


