// import * as Rx from "rxjs";
import { Observable } from 'rxjs';
let observable = new Observable((subscriber) => {
    console.log('this', this);
    subscriber.next('v1');
    subscriber.next('v2');
    setTimeout(() => {
        subscriber.next('v3');
    }, 3000);
});
observable.subscribe((value) => {
    // console.log('v', value);
    addItem(value);
})


function addItem(item: any) {
    var node = document.createElement('li');
    var textNode = document.createTextNode(item + ' - ' + new Date());
    node.appendChild(textNode);
    document.getElementById('output').appendChild(node);
}