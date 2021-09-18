var str = 'hello world'
console.log(str)
for(i=1;i<5;i++)
    console.log(i)

function greeting(name) {
    console.log(name)
}

const greeting2 = (name)=>{
    console.log(name)
}

//JSON
personA = {
    name : "Phuong",
    tel : "0922552255"
}

ds = [
    {
        name : "Phuong",
        tel : "0922552255"
    },
    {
        name : "Cuong",
        tel : "654564455"
    }
]

str ="Vinh;Hai;Cuong;Long"
str.split(';').forEach(a => {
    greeting2(a)
});

greeting(personA.name)
greeting2(ds[1].name)

ds.forEach(p => {
    greeting2(p.name + ': ' + p.tel)
});
//BTVN: https://nodejs.dev/learn/javascript-asynchronous-programming-and-callbacks/