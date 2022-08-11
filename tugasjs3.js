// Soal 1

// Diketahui sebuah variable berisi data diri
// var person = {name : 'John shine', address: 'JL Melati No. 34', age : 25, hobby: 'reading'}
// Buatlah sebuah function untuk validasi object dari variable person tersebut jika :
// name kosong maka print “name is empty”
// address kosong maka print “address is empty”
// age kosong maka print “age is empty”
// hobby kosong maka print “hobby is empty”
// jika data lengkap maka print “data is valid”

// Soal 2
// Diketahui sebuah array object sebagai berikut:
// var person = [
// {name : 'John shine', address: 'JL Melati No. 34', age : 25, hobby: 'reading'},
// {name : 'Budi’, address: '', age : 26, hobby: 'reading'},
// {name : 'Randi, address: 'JL Mawar No. 34', age : null, hobby: ''},
// {name : '', address: 'JL Kancil No. 35', age : 24, hobby: 'swimming'},
// {name : 'Andre', address: 'JL Melati No. 34', age : 28, hobby: ''}
// ]
// Buatlah sebuah function untuk mem-validasi setiap object yang mempunyai value kosong, jika value nya kosong maka tampilkan array keberapa dan nama key dari object tersebut (index ke 1 pada address)

// Soal 3

// Ada 3 buah function yaitu func1, func2, func3 sebagai berikut

// function func1() {
//      return new Promise(resolve => {
//         setTimeout(() => {
//           console.log('func1');
//           resolve('func1');
//         }, 10000);
//       });
//     }
//      
//     function func2() {
//       return new Promise(resolve => {
//         setTimeout(() => {
//           console.log('func2');
//           resolve('func2');
//         }, 5000);
//       });
//     }
//      
//     function func3() {
//       return new Promise(resolve => {
//         setTimeout(() => {
//           console.log('func3');
//           resolve('func3');
//         }, 1000);
//       });
//     }
//      
//     function asyncCall() {
//       func1();
//       func2();
//       func3();
//      
//     }
//     asyncCall();

//     Saat program tersebut di jalankan akan menghasilkan output sebagai berikut :

//     console

//     func3
//     func2
//     func1

//     Bagaimana cara supaya output yang dihasilkan dengan urutan sebagai berikut tanpa merubah isi function dari func1,func2,func3 :
//     Output:    
//     func1
//     func2
//     func3


// Jawaban

// Soal 1

// var person = (biodata) => {
  
//     var result = {};
//     var newPerson;
//    for ( newPerson in biodata) {
//        if (Object.hasOwnProperty.call(biodata, newPerson)) {
//            var name = biodata.name;
//            var address = biodata.address;
//            var age = biodata.age;
//            var hobby = biodata.hobby;
//        }

//         if(name === "" && address === "" && age === 0 && hobby ===""){
//             name = "name is empty";
//             address = "address is empty";
//             age = "age is empty";
//             hobby = "hobby is empty"
//         }else if(name=== "" && address === "" && age === 0){
//             name = "name is empty";
//             address = "address is empty";
//             age = "age is empty";
//         }else if(name=== "" && address === "" && hobby === ""){
//             name = "name is empty";
//             address = "address is empty";
//             hobby = "hobby is empty";
//         }else if(name=== "" && age === 0 && hobby === ""){
//             name = "name is empty";
//             age = "age is empty";
//             hobby = "hobby is empty";
//         }else if(age=== 0 && address === "" && hobby === ""){
//             age = "age is empty";
//             address = "address is empty";
//             hobby = "hobby is empty";
//         }else if(name=== "" && address === ""){
//             name = "name is empty";
//             address = "address is empty";
//         }else if(name=== "" && age === 0){
//             name = "name is empty";
//             age = "age is empty";
//         }else if(name=== "" && hobby === ""){
//             name = "name is empty";
//             hobby = "hobby is empty";
//         }else if(address=== "" && age === 0){
//             address = "address is empty";
//             age = "age is empty";
//         }else if(address=== "" && hobby === ""){
//             address = "address is empty";
//             hobby = "hobby is empty";
//         }else if(hobby=== "" && age === 0){
//             hobby = "hobby is empty";
//             age = "age is empty";
//         }else if(name === ""){
//             name = "name is empty";
//         }else if(address === ""){
//             address = "address is empty";
//         }else if(age === 0){
//             age = "age is empty";
//         }else if(hobby === ""){
//             hobby = "hobby is empty";
//         }else{
//             return "data is valid";
//         }
//    }
   
//    result.name = name;
//    result.address = address;
//    result.age = age;
//    result.hobby = hobby;

//    return result;
   
// }

// console.log(person({name : 'John shine', address: 'JL Melati No. 34', age : 25, hobby: 'reading'}));


// Soal 2

// var person = (arr) => {
    
//     var result = "";
//     for (let i = 0; i < arr.length; i++) {
//         if(arr[i]["name"] === "" && arr[i]["address"] === "" && arr[i]["age"] === null && arr[i]["hobby"] ===""){
//             result += `index ke ${i} pada ${["name"]} \nindex ke ${i} pada ${["address"]} \nindex ke ${i} pada ${["age"]} \nindex ke ${i} pada ${["hobby"]} \n`
//         }else if(arr[i]["name"] === "" && arr[i]["address"] === "" && arr[i]["age"] === null){
//             result += `index ke ${i} pada ${["name"]} \nindex ke ${i} pada ${["address"]} \nindex ke ${i} pada ${["age"]} \n`
//         }else if(arr[i]["name"] === "" && arr[i]["address"] === "" && arr[i]["hobby"] === ""){
//             result += `index ke ${i} pada ${["name"]} \nindex ke ${i} pada ${["address"]} \nindex ke ${i} pada ${["hobby"]} \n`
//         }else if(arr[i]["name"] === "" && arr[i]["age"] === null && arr[i]["hobby"] === ""){
//             result += `index ke ${i} pada ${["name"]} \nindex ke ${i} pada ${["age"]} \nindex ke ${i} pada ${["hobby"]} \n`
//         }else if(arr[i]["age"] === null && arr[i]["address"] === "" && arr[i]["hobby"] === ""){
//             result += `index ke ${i} pada ${["address"]} \nindex ke ${i} pada ${["age"]} \nindex ke ${i} pada ${["hobby"]} \n`
//         }else if(arr[i]["name"] === "" && arr[i]["address"] === ""){
//             result += `index ke ${i} pada ${["name"]} \nindex ke ${i} pada ${["address"]} \n`
//         }else if(arr[i]["name"] === "" && arr[i]["age"] === null){
//             result += `index ke ${i} pada ${["name"]} \nindex ke ${i} pada ${["age"]} \n`
//         }else if(arr[i]["name"] === "" && arr[i]["hobby"] === ""){
//             result += `index ke ${i} pada ${["name"]} \nindex ke ${i} pada ${["hobby"]} \n`
//         }else if(arr[i]["address"] === "" && arr[i]["age"] === null){
//             result += `index ke ${i} pada ${["address"]} \nindex ke ${i} pada ${["age"]} \n`
//         }else if(arr[i]["address"] === "" && arr[i]["hobby"] === ""){
//             result += `index ke ${i} pada ${["address"]} \nindex ke ${i} pada ${["hobby"]} \n`
//         }else if(arr[i]["hobby"] === "" && arr[i]["age"] === null){
//             result += `index ke ${i} pada ${["age"]} \nindex ke ${i} pada ${["hobby"]} \n`
//         }else if(arr[i]["name"] === ""){
//             result += `index ke ${i} pada ${["name"]} \n`
//         }else if(arr[i]["address"] === ""){
//             result += `index ke ${i} pada ${["address"]} \n`
//         }else if(arr[i]["age"] === null){
//             result += `index ke ${i} pada ${["age"]} \n`
//         }else if(arr[i]["hobby"] === ""){
//             result += `index ke ${i} pada ${["hobby"]} \n`
//         }else {
//             result += "data is valid \n"
//         }
//     }

//     return result;
// } 


// console.log(person([
//     {name : 'John shine', address: 'JL Melati No. 34', age : 25, hobby: 'reading'},
//     {name : 'Budi', address: '', age : 26, hobby: 'reading'},
//     {name : 'Randi', address: 'JL Mawar No. 34', age : null, hobby: ''},
//     {name : '', address: 'JL Kancil No. 35', age : 24, hobby: 'swimming'},
//     {name : 'Andre', address: 'JL Melati No. 34', age : 28, hobby: ''}
//     ]));


// Soal 3

// function func1() {
//          return new Promise(resolve => {
//             setTimeout(() => {
//               console.log('func1');
//               resolve('func1');
//             }, 10000);
//           });
//         }
//          
//         function func2() {
//           return new Promise(resolve => {
//             setTimeout(() => {
//               console.log('func2');
//               resolve('func2');
//             }, 5000);
//           });
//         }
//          
//         function func3() {
//           return new Promise(resolve => {
//             setTimeout(() => {
//               console.log('func3');
//               resolve('func3');
//             }, 1000);
//           });
//         }
//          
//         function asyncCall() {
       
//         func1()
//         .then((ok)=>{
//                 console.log(ok);
//                 return func2();
//         })
//         .then((ok)=>{
//                 console.log(ok);
//                 return func3();
//         })
//         .then((ok)=>{
//                 console.log(ok);
//         })
        //  var newResolve = async function (){
        //          var resFirst = await func1;
        //          console.log(resFirst);
        //          var resSecond = await func2;
        //          console.log(resSecond);
        //          var resThird = await func3;
        //          console.log(resThird);
                
        //  }
        //  return newResolve()
       
        // }
        
        // asyncCall()