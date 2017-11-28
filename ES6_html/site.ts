  ///////////////////// Block Scope ////////////////////////////////////////////////////////////////////
  function clickon(){
    alert("Working");
    displayMessage("Working!")
}

{
    var a ="block"
}

//alert("Scope CHeck" , a);

function displayMessage(variable){
    var input = document.getElementById("message");
    input.innerText = variable;
}

var funcs = [];
for (var i = 0; i < 5; i += 1) {
    var y = i;
    funcs.push(function () {
        console.log(y);
    })
}

funcs.forEach(function (func) {
    func()
});

///////////////////// Const Variables ////////////////////////////////////////////////////////////////////
const foo =10;

function func() {
    if (true) {
        const tmp = 123;
    }
   // console.log(tmp); // Uncaught ReferenceError: tmp is not defined
}
func();


const mute = 'abc';
//mute = 'def'; // TypeError: Assignment to constant variable

const unmute = {};
unmute["eka"] = "one";
console.log(unmute["eka"]);

const foo1 = Object.freeze({});
foo1.prop = 123;
console.log(foo.prop) // undefined


///////////////////// Strings ////////////////////////////////////////////////////////////////////

let doublequte = "hello world";
let singlequote = 'hello world';

let single = 'hello ' +
'world ' +
'my ' +
'name ' +
'is ' +
'asim';

console.log(single);

let tidele = `
    asanga
    chandrakumara
    is 
    a 
    good
    boy
`
console.log(tidele);

let asa = "My Name is Asanga";

let namequote = `
    his name i don't know but,
    ${asa}
`;

console.log(namequote);


///////////////////// Fat Arrow function ////////////////////////////////////////////////////////////////////

setTimeout(function() {
	//console.log("setTimeout called!");
}, 1000);

//this can pass

setTimeout (()=>{
    // console.log("setTimeout called! fat arrow style");
    // console.log(`
    //             Sum 
    //             of 
    //             two
    //             ${add(100,200)}`);
    // console.log(`
    //             Sum 
    //             of 
    //             Three
    //             ${add2(100,200)}`);

},1000)


let add = function(a ,b ){
    return a+b;
}

let add2 = (a,b) => a+b;

//////////////////////Destructing /////////////////////////////////////////////////////////////////////

const arr = {first:"Asanga", second:"Chandrakumara" , Age:35};

const f =arr.first;
const s = arr.second;

console.log(f,s);

const {first: f1, second: s1} = arr;

console.log(f1,s1);

const {first, second} = arr;

this.second = "Niranga";

console.log(first,second);

function goodboy(options){
    console.log("Value of the x is:" , options.x);
}

goodboy({x:1});

function goodboy2({x}) {
    console.log(x); // Refer to x directly
  }
  goodboy2({x:1000});


  /////////////// For & ForEach ////////////////////////////////////////////////////////////////////////////
  console.log(" For & ForEach ");
  let arrnum =[1,2,3];
  for (let index = 0; index < arrnum.length; index++) {
      const element = arrnum[index];
      console.log(element); // Refer to x directly   
      displayMessage("For each " + element);       
  }

  arrnum.forEach((Value) =>{
      console.log("For each " , Value);
      
  })

  for(let x in arrnum){
      console.log(x);
      console.log(typeof(x));
  }

  let base = {a:1,b:2};
  let obj = Object.create(base);
  obj["c"] = 3;
  for (let prop in obj) console.log(prop)


  let map = new Map();
  map.set("val1", "Asanga chandrakumara");
  map.set("val2", "270/A Mullegama ,Homagama");
  map.set("val3", "Software Engineer");
  map.set("val4", "Scinter Technologies");
    let concatstr ="";
  map.forEach((val)=>{
       // console.log(val);
        concatstr += ` ${val}\n`;
        
  });
  displayMessage(concatstr);


  /////////Promises///////////////////////////////////////////////////////////////////////////

  var promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Async Work Complete");
      resolve();
    }, 1000);
  });
let error = false;

  function doAsyncTask() {
    var promise = new Promise((resolve, reject) => {
      setTimeout(() => {
          let result = 1/0;
        if (error) {
            console.log("Async Work not Complete");
          reject();
        } else {
            console.log("Async Work Complete");
          resolve();
        }
      }, 1000);
    });
    return promise;
  }

  function doAsyncTaskwithpro(){
    doAsyncTask().then(
        () =>{
        console.log("Async task is now been completed. do rest now")
        },
        () => {
            console.log("Async Erros")
        }
    );
}



  