
const questionBox=document.querySelector('.container2')
const answerOption=document.querySelector('.box1')
const option1=document.querySelector('#box1')
const option2=document.querySelector('#box2')
const option3=document.querySelector('#box3')
const option4=document.querySelector('#box4')
const timer=document.querySelector('.timer')
const tick=document.querySelector('.tick')


let n=120;

let i=-1;
let m=0;
const array=[{
    que:'who are you?',
    ans1:'Rupesh',
    ans2:'Silu',
    ans3:'kalu',
    ans4:'Binari',
    correctAns:'Silu',
 },{
    que:'what are you?',
    ans1:'student',
    ans2:'chhapri',
    ans3:'army',
    ans4:'police',
    correctAns:'army',
 },{
    que:'where are you from?',
    ans1:'kurunti',
    ans2:'badajhara',
    ans3:'kusupanga',
    ans4:'mangalpur',
    correctAns:'kurunti',
 },{
   que:'In which college you are studying in?',
   ans1:'IIT KGP',
   ans2:'IIT BHU',
   ans3:'IITB',
   ans4:'IITK',
   correctAns:'IIT KGP',
}
]


const doIt=()=>{
   const list=[];
   i=i+1;
   
    
   questionBox.innerText=array[0].que;
    option1.innerText=array[0].ans1;
    option2.innerText=array[0].ans2;
    option3.innerText=array[0].ans3;
    option4.innerText=array[0].ans4;
    

   setInterval(show,1000);
}
const next=(e)=>{
   
    i=i+1;
    m=m+1;
    questionBox.innerText=array[m].que;
    option1.innerText=array[m].ans1;
    option2.innerText=array[m].ans2;
    option3.innerText=array[m].ans3;
    option4.innerText=array[m].ans4;
    option1.style.backgroundColor='';
    option2.style.backgroundColor='';
    option3.style.backgroundColor='';
    option4.style.backgroundColor='';
   
    
    
}

const show=()=>{
   n=n-1;
   if(n>0){
      timer.innerText=n;
   }
   else{
      timer.innerText=0;
      questionBox.innerHTML='<h3>Time Is Over!!</h3>';
      
   }

}
const previous=()=>{
   i=i-1
   m--;
   questionBox.innerText=array[m].que;
    option1.innerText=array[m].ans1;
    option2.innerText=array[m].ans2;
    option3.innerText=array[m].ans3;
    option4.innerText=array[m].ans4;
    option1.style.backgroundColor='';
    option2.style.backgroundColor='';
    option3.style.backgroundColor='';
    option4.style.backgroundColor='';
   
}
const skip=()=>{
   i=i+1;
   m++;
   questionBox.innerText=array[m].que;
    option1.innerText=array[m].ans1;
    option2.innerText=array[m].ans2;
    option3.innerText=array[m].ans3;
    option4.innerText=array[m].ans4;
    option1.style.backgroundColor='';
    option2.style.backgroundColor='';
    option3.style.backgroundColor='';
    option4.style.backgroundColor='';
   
}
const store=(e)=>{
   
   console.log(e);
   console.log('hii')
   console.log(i)
   
   if(e.target.innerText==array[i].correctAns){
      console.log(i)
      console.log('yes')
     
    console.log( e.srcElement.style.backgroundColor)
    e.srcElement.style.backgroundColor='green';
   }
   else{
      console.log(i)
      console.log('no')
      
      
      e.srcElement.style.backgroundColor='red';
   }
}


option1.addEventListener('click',(e)=>store(e))
option2.addEventListener('click',(e)=>store(e))
option3.addEventListener('click',(e)=>store(e))
option4.addEventListener('click',(e)=>store(e))



