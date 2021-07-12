
//Here just access answers from props and display it effectively That's it. Ending part of the application
// we have a button if clicked, directs to starting ie, HomeBody.js component where we repeat the
import React from 'react'
import { Link } from 'react-router-dom'

export default function Answer(props) {
    return (
        
        <div>
            <div className="container" >
                <div className="row" style={{height:"30px"}} ></div>
                <div className="row justify-content-center ans-container" >
                    <div className="col-12" style={{height:"30px"}}></div>
                    <div className="col-9 align-self-center">
                        <div className="row" style={{marginTop:"20px", marginBottom:"20px"}}>
                            <div className="col-5">
                                <div className="ans-para">Equation:</div>
                            </div>
                            <div className="col-7" style={{backgroundColor:"#121212", borderRadius:"13px"}}>
                                <div className="ans-para">{props.Ans.Eqn}</div>
                            </div>
                        </div>
                        <div className="row" style={{marginTop:"20px", marginBottom:"20px"}}>
                            <div className="col-5">
                                <div className="ans-para">Type of Equation:</div>
                            </div>
                            <div className="col-7" style={{backgroundColor:"#121212", borderRadius:"13px"}}>
                                <div className="ans-para">{props.Ans.TypeEqn}</div>
                            </div>
                        </div>
                        <div className="row" style={{marginTop:"20px", marginBottom:"20px"}}>
                            <div className="col-5">
                                <div className="ans-para">Answer:</div>
                            </div>
                            <div className="col-7" style={{backgroundColor:"#121212", borderRadius:"13px"}}>
                                <div className="ans-para">{props.Ans.EqnAns}</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12" style={{height:"30px"}}></div>
                    
                </div>
                <div  style={{height:"30px"}}></div>
                <div className="text-center" >
                                <Link to="/" className="btn btn-home" >
                                    Go to Home
                                </Link>
                </div>
            </div>
        </div>
    )
}
