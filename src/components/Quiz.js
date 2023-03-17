import React from 'react'
import quiz from './quiz.png'



export default function Benefits(props) {

    let myStyle = {
        color: props.mode === 'dark' ? 'white' : '#042743',
        backgroundColor: props.mode === 'dark' ? 'rgb(36 74 104)' : 'white',
    }

    return (
        <div class="card-group">
            <div class="card">
                <div class="card-body" style={{ myStyle }}>
                    <h5 class="card-title">SCHOOL BENEFITS</h5><br /><hr />
                    <p class="card-text">Quiz competition will be held in Six groups:
                        <ol type='I'>
                            <li>Class I- II</li>
                            <li>Class III- IV</li>
                            <li>Class V-VI</li>
                            <li>Class VII- VIII</li>
                            <li>Class IX- X</li>
                            <li>Class XI- XII</li>
                        </ol>


                        EXAMINATION :-
                        1. SCHOOL LEVEL
                        2. DISTRICT LEVEL
                        3. STATE LEVEL
                        4. NATIONAL LEVEL
                        Students will be given scholarship ( each group ) as follows : First scholarship of Rs.10000/- , Second scholarship of Rs. 5000/- , Third scholarship of Rs. 2000/- along with 10 consolation prizes.
                        CERTIFICATES FOR ALL PARTICIPANTS & TWO MONTHS FREE CODING CLASS</p>
                </div>
            </div>
            <div class="card">
                <img src={quiz} className="img1" alt="not found" />
            </div>
        </div>
    )
}
