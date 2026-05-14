const radius=[2,3,4,5]

function area(radius) {
    return Math.PI * radius * radius
}

function calulater(radius,logic){

    const outer=[]
    for(let i=0; i <radius.length; i++)
    {

        outer.push(logic(radius[i]))
    }
    return outer
}

console.log(calulater(radius,area));
