const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNumers.map( (num) => { return num + 10})

const newNums = myNumers
                .map((num) => num * 10 )
                .map( (num) => num + 2)
                .filter( (num) =>{return  num >= 40})
                .filter( (num) =>  num >= 50)

console.log(newNums);