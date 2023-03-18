// search 3d text in code pen
// poke ball
// <body>
//   <div class="pokeball"><img src="http://cdn.bulbagarden.net/upload/3/3b/Stadium_Pok%C3%A9_Ball.png" width="150px"/></div>
//   <div class="shadow"></div>
// </body>
// body{
//     -webkit-perspective: 800px;
//   }

//   .shadow{
//     position: relative;
//     top: 0px;
//     text-align: center;
//     margin:auto;
//     width: 150px;
//     height: 150px;
//     background-color: #353535;
//     border-radius: 100%;
//     -webkit-transform: rotateX(75deg);
//     -webkit-animation: float 2s ease-in-out infinite;

//   }

//   .pokeball{
//     z-index: 20;
//     position: relative;
//     top: 20px;
//     text-align: center;
//     margin:20px auto;
//     -webkit-animation: floatBall 2s ease-in-out infinite;
//   }

//   /*Animations*/
//   @-webkit-keyframes float{
//     0%{-webkit-transform:translate(0) rotateX(75deg); background-color:#5e5e5e;}
//     50%{-webkit-transform: translateY(20px) rotateX(75deg);background-color:#353535;}
//     100%{-webkit-transform:translate(0) rotateX(75deg); background-color:#5e5e5e;};
//   }

//   @-webkit-keyframes floatBall{
//     0%{-webkit-transform: translate(0px);}
//     50%{-webkit-transform: translateY(40px);}
//     100%{-webkit-transform: translate(0px);}
//   }
//   }

// text
// h1
// {
//   margin: 0;
//   padding: 0;
//   font-size: 10em;
//   color: #fff;
//   text-transform: uppercase;
//   transform: rotate(-20deg) skew(25deg);
//   animation: animate 5s ease-in-out infinite;

// }

// @keyframes animate
// {
//   0%,100%
//   {
//     transform: rotate(-20deg) skew(25deg) translate(0,0);
//    text-shadow: -5px 5px 0 rgba(0,0,0,.2);
//   }
//   50%
//   {
//     transform: rotate(-20deg) skew(25deg) translate(50px,-50px);
//    text-shadow: -50px 50px 0 rgba(0,0,0,.2);
//    filter: blur(15px);
//  }
// }

// 3d text

// h1 {
//     position: absolute;
//     top: 35%;
//     width: 100%;

//     text-shadow:     0 1px 0 hsl(174,5%,80%),
//                        0 2px 0 hsl(174,5%,75%),
//                        0 3px 0 hsl(174,5%,70%),
//                        0 4px 0 hsl(174,5%,66%),
//                        0 5px 0 hsl(174,5%,64%),
//                        0 6px 0 hsl(174,5%,62%),
//                        0 7px 0 hsl(174,5%,61%),
//                        0 8px 0 hsl(174,5%,60%),

//                        0 0 5px rgba(0,0,0,.05),
//                       0 1px 3px rgba(0,0,0,.2),
//                       0 3px 5px rgba(0,0,0,.2),
//                      0 5px 10px rgba(0,0,0,.2),
//                     0 10px 10px rgba(0,0,0,.2),
//                     0 20px 20px rgba(0,0,0,.3);
//   }

// glow effect 
// <figure>
//   <h1>3d CSS GLOW</h1>
//   <h1>3d CSS GLOW</h1>
//   <h1>3d CSS GLOW</h1>
//   <h1>3d CSS GLOW</h1>
//   <h1>3d CSS GLOW</h1>
//   <h1>3d CSS GLOW</h1>
//   <h1>3d CSS GLOW</h1>
//   <h1>3d CSS GLOW</h1>
//   <h1>3d CSS GLOW</h1>
//   <h1>3d CSS GLOW</h1>  
// </figure>h1 {
//   animation:glow 10s ease-in-out infinite;
  
  

/* For less laggy effect, uncomment this:
  
  animation:none;
  -webkit-text-stroke:1px #fff; 
  
=========== */
  
// }



// * { box-sizing:border-box; }

// body {
//   background:#0a0a0a;
//   overflow:hidden;
//   text-align:center;
// }

// figure {
//   animation:wobble 5s ease-in-out infinite;
//   transform-origin:center center;
//   transform-style:preserve-3d;
// }

// @keyframes wobble {
//   0%,100%{ transform:rotate3d(1,1,0,40deg); }
//   25%{ transform:rotate3d(-1,1,0,40deg); }
//   50%{ transform:rotate3d(-1,-1,0,40deg); }
//   75%{ transform:rotate3d(1,-1,0,40deg); }
// }

// h1 {
//   display:block;
//   width:100%;
//   padding:40px;
//   line-height:1.5;
//   font:900 8em 'Concert One', sans-serif;
//   text-transform:uppercase;
//   position:absolute;
//   color:#0a0a0a;
// }

// @keyframes glow {
//   0%,100%{ text-shadow:0 0 30px red; }
//   25%{ text-shadow:0 0 30px orange; }
//   50%{ text-shadow:0 0 30px forestgreen; }
//   75%{ text-shadow:0 0 30px cyan; }
// }

// h1:nth-child(2){ transform:translateZ(5px); }
// h1:nth-child(3){ transform:translateZ(10px);}
// h1:nth-child(4){ transform:translateZ(15px); }
// h1:nth-child(5){ transform:translateZ(20px); }
// h1:nth-child(6){ transform:translateZ(25px); }
// h1:nth-child(7){ transform:translateZ(30px); }
// h1:nth-child(8){ transform:translateZ(35px); }
// h1:nth-child(9){ transform:translateZ(40px); }
// h1:nth-child(10){ transform:translateZ(45px); }