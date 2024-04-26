const a = () =>{
    let c = 0;
    const b = () => {
        c ++;
        return c;
    }
    return b;
}

const d = a()



let but = document.querySelector("button.fun")
console.log(but)
but.onclick =() =>{
    const span = document.querySelector("span");
    span.textContent= d();
}
