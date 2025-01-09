//  2-AMALIYOT YOUTUBE 
// 1
// let ism = prompt("ismingizni kiriting")
// let yosh =+prompt('yoshingizni kiriting')
// let result = `Qadirli ${ism} Siz ${2025-yosh}tug'ilgansiz. Va siz ${yosh*12} oy yashagansiz siz ${((yosh*365)/7).toFixed} hafta yashagansiz,${yosh*365} kun yashagansiz, ${yosh*365*24} soat yashagansiz, yosh${yosh*365*24*60} minut yashagansiz, ${yosh*365*24*60*60} sekund yashagansiz`
// alert (result)

// 2
// let ism = prompt("ismni kiriting")
// let ismlar = ['Dostonbek','Sadbek','Nodrbek']
// if(ismlar.includes(ism)){
//     alert(`Ha ${ism} bor`)
// } else {
//     alert(`Afsus bunday ${ism} yo'q`)
// }

// 3
// let ismlar = ['Doston','Asad','Nodr']
// for(let i = 0; i < ismlar.length; i++){
//     let result = ismlar[i]+ 'bek'
//     console.log(result)
// }

// let viloyat = prompt('viloyat nomini kirting')
// switch (viloyat){
//     case 'Andijon':
//         alert('Andijon viloyatida 2mln aholi yashaydi');
//         case "Farg'on ":
//             alert("Fargona viloyati 5mnl aholisi bor");
//             default:
//                 alert(`afsus ${viloyat} viloyati yoq`)
// }

// let berilar = prompt('belgini kiriting....')
// let meyor = 20
// if(berilar.length > meyor){
//     alert(`siz ${meyor} belgi kirishingiz mumkin ,lekin hozir siz ${berilar.length} kiritdingiz. Bu meyordan${berilar.length - meyor} ta kop kritdingiz` )
// } else {
//       alert(`siz ${meyor} belgi kirishingiz mumkin , hozirda siz ${berilar.length} kiritdingiz. Bu meyordan${meyor-berilar.length} ta  belgi kiritishingiz mumkin `)
// }

// let myArr = [[false,true],[1,2],99,'yaxshi']
// for(let i = 0; i <myArr.length; i++){
//     if ( myArr[i] == 'yaxshi'){
//         console.log('string endex',i)
//     }
// }
// arry ichidan faqat arry olish va kutilayotgan natija [1,2,3,4,5,6]

// let data = [[1,2,3],'qizil',[4,5,6,],true,false]
// let newArr= []
// data.forEach ((item) => {
// let res= Array.isArray(item)
// if(res){
//  item.forEach((num) =>{
//     newArr.push(num)
//  })   
// }
// })
// console.log(newArr)
// Array ichidagi
// [nul,0,"",false,NaN,] false  qiymatlarni ajratib 
// let checkData = [null,'false',1,99,false,undefined,'',NaN,'0']
// let falsey= []
//    for (let i=0; i<checkData.length; i++){
//     if(!checkData[i])
//         falsey.push(checkData[i])
//    }
//    console.log(falsey)
// birorta soz kiritsak uni teskarisini chiqarish
// let soz = 'Andijon'
// let splitWord = soz.split('').reverse()
// let word = ''
// for(let i = 0; i<splitWord.length; i++){
// word+= soz[i]
// }
// console.log(word)

// let word = 'Andijon'
// let splitWord= word.split('')
// let newArr = ''
// for (let i = word.length-1; i>=0;i-- ){
// newArr+= splitWord[i]
// }
// console.log(newArr)
// promptdan kiritilgan istalgan sozni  bosh harifini kichkina qilib qolganini kata qilish
// 5
//  let word = 'AsSsalomu ALAYkum YaXshiMisiz '
//  let splitWord= word.split(' ')
//  let newArr = ''
// splitWord.forEach((item) => {
//     let bosh= item.charAt().toLowerCase()
//     let davomi = item.slice(1).toUpperCase()
//     newArr+= ' '+ bosh+ davomi

// })
// console.log(newArr)

// 6
// let numbers= [-1,87,4,3.1,-5.5,Infinity,0,1,2,0.9]
// let naturlNumbers= 0
// numbers.forEach((num)=>{
//     if(num >=0.0 && Math.floor(num)===num && num !== Infinity && num !== 0)
//         naturlNumbers += num
// })
// console.log(naturlNumbers)
// 7
// let word = 'qalesiz Yaxshimisiz Salomatmisiz'
// let splitWord = word.split('')
// let caunter = 0
// splitWord.forEach((word)=>{
//  if(word=='a'|| word=="A")
// caunter++
// })
// console.log(`so'raliyotgan harf ${caunter} ta `)
// 8
// let son= [21.1, 'Dostonbek','arry', null,true,214]
// let caunter = []
// son.forEach((type)=>{
//     caunter.push(typeof type)
// })
// console.log(caunter)
// 9 
// let word = 'uzbekiston'
// let soz = word.lastIndexOf(word.slice(-1))+1
// console.log(soz)   
// 10
// let number = [1,2,3,4,5]
// let result = []
// number.forEach((item, i)=>{
//     result.push(item+ i)

// })
// console.log(result)
// 11 
// let caunter= 0
// for(let i= 1; i<=10; i++){
//     caunter+=i
// }
// console.log(caunter )
// 12
let son = 9
for(let i =1; i<=10; i++){
    let result = son*i+1
    console.log(result)
}

