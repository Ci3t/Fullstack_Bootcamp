

const percentageOfWorld1 = (population) => {
    result = (population / 7900) * 100;
    return result
}

console.log(`Spain Has 47.35 Million People so its about ${percentageOfWorld1(47,35)}% of the World`)

console.log(`Russia Has 144.1 Million People so its about ${percentageOfWorld1(144.1)}% of the World`)

console.log(`Japan Has 125.8 Million People so its about ${percentageOfWorld1(125.8)}% of the World`)

let func = function (population){
    result = (population / 7900) * 100;
    return result
}

console.log(`Spain Has 47.35 Million People so its about ${func(47,35)}% of the World`)

console.log(`Russia Has 144.1 Million People so its about ${func(144.1)}% of the World`)

console.log(`Japan Has 125.8 Million People so its about ${func(125.8)}% of the World`)