function hello(params) {
    console.log(`Hello ${params}!`)
}


function goodBye(params) {
    console.log(`Good Bye ${params}!`)
}

export function name(params) {
    console.log(`Welcome ${params}!`)
}

// change exported name
export { hello as hl, goodBye }