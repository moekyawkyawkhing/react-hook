import React, { useEffect, useState } from 'react';
import Btn from './Btn';

export default function Calculator(){

    const [firstInput, setFirstInput]= useState(0);
    const [secondInput, setSecondInput]= useState(0);
    const [focusVal, setFocusValue]= useState('');
    const [arthopts]= useState([
        '+', '-', '*', '/'
    ]);
    const [result, setResult]= useState(0);
    const [hasopt, setHasOpt]= useState(false);
    const [opt, setOpt]= useState('');

    function operate(opt_val){
        switch (opt_val) {
            case '+':
                return firstInput+secondInput;
            case '-':
                return firstInput-secondInput;
            case '/':
                return firstInput/secondInput;
            case '*':
                return firstInput*secondInput;
            default:
                return 0;
       }
    }

    function handleBtnValue(value){
        let opts= ['+', '-', '/', '*'];
        if(opts.includes(value) && firstInput==0){
            return;
        }

        if(!opts.includes(value) && !hasopt){
            setFirstInput(value);
            setResult(value);
        }else if(opts.includes(value) && !hasopt){
            setOpt(value);
            setResult(value);
            setHasOpt(true);
        }else if(hasopt){
            setSecondInput(value);
            setResult(value);
        }
    }

    function handleResult(){
        setResult(operate(opt))
        setFirstInput(operate(opt));
    }

    return(
        <div className="row">
            <div className="col-md-7">
                <textarea className="form form-control" value={result}>
                </textarea>
            </div>
            <div className="col-md-5">
                <div className="row">
                    <Btn onChildClick={handleBtnValue} />
                    {arthopts.map((value)=>{
                        return (
                            <div className="col-md-2 my-2">
                                <button className="btn-sm btn-info" onClick={()=>handleBtnValue(value)}>{value}</button>
                            </div>
                        );
                    })}
                    <button className="btn-lg btn-info" onClick={handleResult}>=</button>
                </div>
            </div>
        </div>
    );
}