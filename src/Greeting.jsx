import React, { useState, useEffect } from 'react';

export default function Greeting(){

    let [name, setName]= useState('Moe Kyaw');
    let [count, setCount]= useState(1);

    function handleName(e){
        setName(e.target.value);
    }

    function handleCount(){
        setCount(++count);   
    }

    // CDM, CDU
    useEffect(()=>{
        console.log('CDM, CDU');
    });

    // CDM, CDU but => when name is update => work CDU
    useEffect(()=>{
        console.log('CDM, CDU but => when name is update => work CDU');
    }, [name]);

    // CDM, CDU but => when name or count update => when name and count update => work CDU
    useEffect(()=>{
        console.log('CDM, CDM but => when name or count update => when name and count update => work CDU');
    }, [name, count]);

    // CDM, CDU, CWUM
    useEffect(()=>{
        let time_up= setInterval(() => {
            console.log('it work');
        }, 3000);

        return () => {
            clearInterval(time_up);
            console.log("CWUM");
        }
    });

    return (
        <>
           <div className="container my-3">
               <div className="col-md-10 mx-auto">
                   <div className="card">
                       <div className="card-header">
                           <h1>React Hook</h1>
                       </div>
                       <div className="card-body">
                            <h3>UseState</h3>
                            <h5>Name is : {name}</h5>
                            <input type="text" value={name} onChange={handleName} /> <br/>
                            <p>Count : {count}</p>
                            <button onClick={handleCount} className="btn btn-sm btn-info">Add</button>
                            <hr/>
                            <h3>UseEffect</h3>
                       </div>
                   </div>
               </div>
           </div>
        </>
    );
}