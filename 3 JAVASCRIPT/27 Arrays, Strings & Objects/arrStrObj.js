// Arrays, Strings & Objects

// Arrays
var arr =  [1,4,5,78,5,154,0]
console.log(arr[0])
console.log(arr[1])
console.log(arr[2])
console.log(arr[3])
console.log(arr[4])
console.log(arr[5])
console.log(arr[6])

for(var i = 0; i < arr.length; i++){
    console.log(arr[i])
}

// Strings
var str = 'JavaScript'
console.log(str[0])
console.log(str[1])
console.log(str[2])
console.log(str[3])
console.log(str[4])
console.log(str[5])
console.log(str[6])
console.log(str[7])
console.log(str[8])
console.log(str[9])

for(var i = 0; i < str.length; i++){
    console.log(str[i])
}

// Objects
var obj = {
    name: 'JavaScript',
    length: 10,
    type: 'Programming Language'
}

console.log(obj.name)
console.log(obj.length)
console.log(obj.type)

for(var key in obj){
    console.log(key, obj[key])
}
