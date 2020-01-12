function m1() {
    return new Promise((resolve, reject) => {
        console.log('m1 promsie')
        // throw Error
        resolve()
    });
}

function m2() {
    return new Promise((resolve, reject) => {
        console.log('m2 promsie')
        throw Error;
    });
}
function m3() {
    return new Promise((resolve, reject) => {
        console.log('m3 promsie')
    });
}
function m4() {
    return new Promise((resolve, reject) => {
        console.log('m4 promsie')
    });
}

function m5() {

    m1().then(() => {
        console.log('inside m1 then');
        m2().then(() => {
            console.log('inside m2 then');
        })
            .catch((Error) => {
                console.log('m2 catch---->', Error)
            })
    }).catch((Error) => {
        console.log('m1 catch---->', Error)
    })

}
m5()