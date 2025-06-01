

let w;

function startWebWorker() {
    console.log('START');
    if (typeof (Worker) !== 'undefined') {
        
        if (typeof (w) === 'undefined') {
            w = new Worker('./workers.js');
        }

        w.onmessage = (event)=> {
            document.getElementById('count').innerHTML = event.data;
        }

    } else {
        console.log(`Browser doesn't support web Worker`);
    }
}

function stopWebWorker() {
    w.terminate();
    w = undefined; 
    console.log('STOPED');
}