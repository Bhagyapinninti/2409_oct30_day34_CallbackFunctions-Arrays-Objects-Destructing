import logo from './logo.svg';
import './App.css';

function App() {

  //Callback Functions

  let calculateResult= (engMarks, telMarks, hinMarks, matMarks, sciMarks, socMarks, PassFun, FailFun)=>{
    let passMarks=35;
    if(engMarks >= passMarks &&
      telMarks >= passMarks &&
      hinMarks >= passMarks &&
      matMarks >= passMarks &&
      sciMarks >= passMarks &&
      socMarks >= passMarks )
    {
      PassFun();
    }
    else{
     FailFun();
    }
  }
  calculateResult(91,93,94,25,96,97,
    ()=> {
     console.log("Student Passed") ;
    },
    ()=>{
      console.log("Student Failed");
    }
  );

//Creating an Object: Stores based on Keys

let maheshDetails={
  firstName:"Mahesh Babu",
  lastName:"Ghattamaneni",
  dateofBirth:"Aug 9, 1975",
  age:45,
  role:" Telugu Actor",
  industry: "Tollywood",
  fatherName: "Krishna",
  motherName:"Indira Devi",
  wifeName:"Namratha",
  daughterName:"sitara",
  sonName:"Gowtham",
  email:"mahesh@gmail.com",
  qualification:" bachelor's degree in commerce",
  city:"Hyderabad",
};
 
console.log(maheshDetails.firstName);
console.log(maheshDetails.lastName);
console.log(maheshDetails.role);

//Destructing an Object

let {firstName:fn, lastName:ln, industry:ind, city:ct, qualification:qua}= maheshDetails;
console.log(fn);
console.log(ln);
console.log(ind);
console.log(ct);
console.log(qua);

//Creating an Array: Stores based on Index

let ramCharanDetails=["Ram Charan","Konidela", "27 March 1985", "S/O Chiranjeevi", "Telugu Actor", "Dancer","Father of Klin Kaara", 42];
console.log(ramCharanDetails);
console.log(ramCharanDetails[0]);
console.log(ramCharanDetails[5]);


//Destructring an Array
let [firstName, lastName]=ramCharanDetails;
console.log(firstName,lastName);

  //Another way to Destruct an Array
  let dateofBirth =ramCharanDetails[2];
  let fatherName =ramCharanDetails[3];
  console.log(dateofBirth, fatherName);

//Spread Operator: Creating copies of an Arrays and Objects

//Spraed Operator using Object
let alluArjunDetails= {...maheshDetails};
alluArjunDetails.firstName="Allu";
alluArjunDetails.lastName="Arjun";
console.log(alluArjunDetails);

//Spread Operator using Array
let NTRDetails=[...ramCharanDetails];
NTRDetails[0]="Nandamuri";
NTRDetails[1]="Taraka Ramarao";
console.log(NTRDetails);







  return (
    <div className="App">
      <h1>Callback Functions, Arrays, Objects and Destructuring</h1>
      
    </div>
  );
}

export default App;
