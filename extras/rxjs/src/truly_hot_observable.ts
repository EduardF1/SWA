import {fromEvent} from "rxjs";
import {addItem} from "./addItem";

const observable = fromEvent(document, 'mousemove');

setTimeout(() => {
   const subscription = observable.subscribe({
       next: (x:any) => addItem(x),
   })
}, 2000);
