
let getFile=async ()=>{
    await fetch('https://us-central1-geodrillmanagerserver.cloudfunctions.net/app/kayrex/')
    .then(res=>res.text())
    .then(data=>console.log(data))
}
getFile()

fetch('new.json').then(res=>res.json()).then(data=>console.log(data))

export function mainOne(){
    console.log("First Function")
}
export function mainTwo(){
    console.log("Second Function")

}
export function mainThree(){
    console.log("Third Function")

}