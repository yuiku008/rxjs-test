import { interval, timeInterval,Subject ,concatMap} from 'rxjs';

const s$ = new Subject()<void>
const seconds =  interval(100)) ;

seconds
  .pipe(timeInterval())
  .subscribe(value => console.log(value));

  seconds
  .subscribe(value => console.log(`time2 ${value}`));

// setTimeout(()=>{
//   alert(1)
//   seconds.complete()
// },3000)

// Open the console in the bottom right to see results.
