import React from "react";

export default function Footer(){
    return(
        <div>
<footer className="flex flex-col space-y-10 justify-center m-10 mb-0">
<nav className="flex justify-center flex-wrap gap-6 text-slate-500 font-medium bg-gradient-to-r from-black to-slate-900">
<a className="hover:text-cyan-500 text-amber-500" href="#"> Home </a>
<a className="hover:text-cyan-500 text-amber-500" href="#"> About </a>
<a className="hover:text-cyan-500 text-amber-500" href="#"> Delivery </a>
<a className="hover:text-cyan-500 text-amber-500" href="#"> Contact </a>
</nav>
<div className="flex justify-center space-x-5 transition-transform duration-500 ease-in-out transform hover:scale-105 ">
<a href="" target="blank" rel="nofollow noopener">
<img src="https://img.icons8.com/fluency/48/facebook-new.png" alt="facebook logo" />
</a>

<a href="" target="blank" rel="nofollow noopener">
<img src="https://img.icons8.com/fluency/48/linkedin-circled.png" alt="linkedin logo" />
</a>


</div>
<p className="text-center hover:text-cyan-600 text-amber-400 font-medium mb-8"> 2024 Fareeha Imran. All Rights Reserved.</p>
<br/>
<br/>
<br/>
</footer>
            
        </div>
    )
}