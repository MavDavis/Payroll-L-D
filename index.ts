let id :number= 7
let company:String ="SeamlessHR"
let x:any =null
type User = {id:number, name:String}
let list: object[] =[{id:"hy "}]
const user:User ={id:1,name:"me"}
let cid:any = "x"
let ctid =<number>cid
const addNum = (x:number, y:number):number=>{
return x + y 
}
// if you pass in a string to the params while calling the func, it will fail.
const addedNum : number = addNum(3,3)
//x can be changed to anything 
// tsc --watch index to run file in watch mode