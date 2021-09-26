    //path para to yield or yield an array or any thing
    function * genpar(array){
        for (let iterator of array) {
            yield iterator
        }
        yield * ["ahmed","ali"];
        yield 2;
        return 5;
        yield 6;
        }

        for (let iterator of genpar([3,4])) {
            console.log(iterator)

        }
        
        //generate infinty number
        console.log(`generate inginty number`)
        function * generateinfin(){
            let i=0;
            while (true) {
            yield ++i;
            }
        }
        let x=generateinfin();
        console.log(x.next().value)

        //Delegat generator
        console.log(`Delegat generator`)
        function * gn1(){
            yield 1;
            yield 2;
        }
        function * gn2(){
            yield "ahmed"
            yield "ali"
        }
        function * gnall(){
            yield * gn1()
            yield * gn2()
        }
        let y = gnall()
        console.log(y.next().value)
        console.log(y.next().value)
        console.log(y.next().value)
        console.log(y.next().value)
        console.log(y.next().value)