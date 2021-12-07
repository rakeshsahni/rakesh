import React from 'react'
import './CP.css';
import CF from './../../images/codeforces.png';
import HR from './../../images/hacckerrank.png';
import GFG from './../../images/gfg.png';

function CP() {
    return (
        <div id='cp' className='cp' >
            <div className='hac-code' >
                <div className='hac' >
                    <a 
                        href="https://www.hackerrank.com/rakeshsahni" 
                        target="_blank" 
                        rel="noopener noreferrer"
                    >
                        <img src={HR} alt="hackerrank" className='cp-img' />
                    </a>
                    <div className='cp-content' >
                        This is my HackerRank Profile.<br/>
                        I am 6⭐ Coder in Algorithm,<br/> 5⭐ Coder in C++ and Python.
                    </div>
                </div>
                <div className='hac' >
                <a 
                    href="https://codeforces.com/profile/RAKESHGON" 
                    target="_blank" 
                    rel="noopener noreferrer"
                >
                    <img src={CF} alt="codeforces" className='cp-img' />
                </a>
                <div className='cp-content' >
                    This is my Codeforces profile.<br/>
                    I have participated about 70+ contests.<br/>
                    I have solved about 450+ problems.
                </div>
                </div>
            </div>
            <div className='gfg' >
                <div className='gfg-content' >
                    This is my Geeksforgeeks profile.<br/>
                    We have written about 250+ articles on this plateform.<br/>
                    All articles are based on Data Structure and Algorithm.
                </div>
                    <a 
                        href="https://auth.geeksforgeeks.org/user/rakeshsahni/articles" 
                        target="_blank" 
                        rel="noopener noreferrer"
                    >
                        <img src={GFG} alt="geeksforgeeks" className='cp-gfg' />
                    </a>
            </div>
        </div>
    )
}

export default CP
