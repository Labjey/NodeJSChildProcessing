const obsorable=require('os');
const RX=require('rxjs/RX');

const SystemCheck=new Promise((resolve,reject)=>{
    const memosystem=obsorable.totalmem();
    // console.log("Memory Size: "+memSize);
    if(memosystem<4*1024*1024*1024)
        reject("Memory not sufficient");
    const cpuCores=obsorable.cpus().length;
    // console.log("CPU Core: "+cpuCores);
        if(cpuCores<2)
            reject("Processor not supported");
    resolve("System is successfully checked" + " With Memory Size: "+memosystem+" and CPU Core: "+cpuCores);
})

function checkSystem()
{
    console.log("Checking system ...");
    promiseSystemCheck.then(function(value){
        console.log(value);
    }).catch(function(reason){console.log(reason);});
}


checkSystem();

// Using Observables

// function checkSystemObservable()
// {
//     console.log("Checking system ...");
//     RX.Observable.fromPromise(promiseSystemCheck).subscribe((status)=>console.log(status),(err)=>console.log(err));
// }


// checkSystemObservable();