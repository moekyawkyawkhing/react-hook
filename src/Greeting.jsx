import React, { useState, useEffect } from 'react';
import Calculator from './Calculator';

export default function Greeting(){

    const [name, setName]= useState('Moe Kyaw');
    let [count, setCount]= useState(1);
    const [showExample, setShowExample]= useState(false);

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

    function handleShowUsestate(){
        setShowExample(!showExample)
    }

    return (
        <>
            <div className="row">
                <div className="col-md-10 mx-auto my-3">
                    <button className="btn-sm btn-info" onClick={handleShowUsestate}>Show</button>
                </div>
            </div>
           {
               showExample ?
                (
                    <div className="container my-3">
                        <div className="card">
                                <div className="card-header">
                                    <h5>React Hook</h5>
                                </div>
                                <div className="card-body">
                                        <h5>UseState</h5>
                                        <h5>Name is : {name}</h5>
                                        <input type="text" value={name} onChange={handleName} /> <br/>
                                        <p>Count : {count}</p>
                                        <button onClick={handleCount} className="btn btn-sm btn-info">Add</button>
                                </div>
                            </div>
                    </div>
                ) : (
                    <div className="container my-3">
                        <div className="card">
                            <div className="card-header">Calculator</div>
                            <div className="card-body">
                                <Calculator></Calculator>
                            </div>
                        </div>
                    </div>
                )
           }
        </>
    );
}