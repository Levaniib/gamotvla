// setInterval(function () {
//       console.log("hello");
//     }, 1000);

// შექმენით ტაიმაუტი, რომელიც ფეიჯის ჩატვირთვიდან 3 წამში კონსოლში
// გამოიტანს „Timeout Started”.

// setTimeout(function() {
//     console.log("Timeout Started");
// }, 3000)

// შექმენით ბურთი, რომელშიც ეწერება რიცხვი 0, და ყოველ 1 წამში ეს რიცხვი
// გაიზრდება 1-ით.

// let circle = document.querySelector(".circle")
// let count = 0 
// let circle = document.createElement("div")
// document.body.appendChild(circle)
// circle.classList.add("circle")
// circle.style.backgroundColor = "blue"

// setTimeout(() => {
//     setInterval(() => {
//         circle.innerText = count
//         count++
//         if(count % 2 === 0){
//             circle.style.backgroundColor = "red"
//         }else if(count % 2 === 1){
//             circle.style.backgroundColor = "green"
//         }
//     }, 1000);
// }, 3000);


// let min = document.querySelector(".min")
// let hour = document.querySelector(".hour")
// let sec = document.querySelector(".sec")

// let min1 = 0
// let hour1 = 0
// let sec1 = 0 

// let clock = document.getElementById("#clock")

// setInterval(()=>{
//     sec.textContent = sec1 + "წმ "
//     min.textContent = min1 + "წთ :"
//     hour.textContent = hour1 + "სთ :"
//     sec1++
//     if(sec1 === 60){
//         min1++
//         sec1 = 0
//     }else if( min1 === 60){
//         hour1++
//         min1 = 0
//     }
// }, 100)



// let users=[{name: "John", email: "john@example.com"},{name: "Alex", email:
//     "alex@example.com"}, {name: "Lily", email: "lily@example.com"},]
// let degree = 0

// let img = document.createElement("img")
// img.style.alignItems = "center"
// window.addEventListener("load", () =>{
//     document.body.appendChild(img)
//     img.setAttribute("src", "./loader.png")
//     img
//    let triali = setInterval(() =>{
//         degree++
//         img.style.transform = `rotate(${degree}deg)` 
//     }, 10)
// })

// setTimeout(() => {
//     img.remove()
//     users.forEach(element => {
//         let box = document.createElement("div")
//         document.body.appendChild(box)
//         box.classList.add("box")
//         let p1 = document.createElement("p")
//         box.appendChild(p1)
//         p1.innerHTML =  "Username: " + element.name
//         let p2 = document.createElement("p")
//         box.appendChild(p2)
//         p2.innerHTML = "Email " + element.email
//      });
    
// }, 5000)
let count = 10


console.log(count);

let timing = document.createElement("h1")
document.body.appendChild(timing)
timing.classList.add("dro")
// timing.innerHTML = "დარჩენილი დრო: " 


let main = setInterval(() => {
    button.addEventListener("click", function(){
        clearInterval(main)
        if(input.value == number1 + number2){
            box.innerHTML = ""
            box.innerHTML = "Answer is correct"
        }else{
            box.innerHTML = ""
            box.innerHTML = "Answer is incorrect"

        }
    })
    timing.innerHTML = "დარჩენილი დრო: " + count
    if(count === 0 ){
        box.innerHTML = ""
        box.innerHTML = "დრო ამოიწურა"
        clearInterval(main)
    }
    count--
}, 1000)

let number1 = Math.floor((Math.random() * 100) + 1);
let number2 = Math.floor((Math.random() * 100) + 1);

// console.log(number1 + number2);

let box = document.createElement("div")
document.body.appendChild(box)
box.classList.add("box")

let p1 = document.createElement("p")
box.appendChild(p1)
p1.classList.add("p1")
p1.innerHTML = "რას უდრის: " + number1 + " + " + number2 + "?"
p1.style.color = "white"

let p2 = document.createElement("p2")
box.appendChild(p2)
p2.classList.add("p2")
p2.innerHTML = "პასუხი:"
p2.style.color = "white"



let input = document.createElement("input")
box.appendChild(input)
input.classList.add("inputinio")


let button = document.createElement("button")
box.appendChild(button)
button.classList.add("button")
button.innerHTML = "Confirm"




