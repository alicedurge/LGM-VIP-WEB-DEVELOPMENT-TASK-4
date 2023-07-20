let ans = document.querySelector('#ans')
let clear = document.querySelector('#clear')
let vale = document.querySelector('#val-e')
let btns = document.querySelectorAll('button');

clear.addEventListener('click', () => {
    ans.innerText = "";
})

for (let btn of btns) {
    btn.addEventListener('click', (e) => {
        let btnVal = e.target.innerText;
        let val = ans.innerText;
        ans.innerText = `${val}${btnVal}`;
    })
}

vale.addEventListener('click', () => {
    let val = ans.innerText;
    ans.innerText = eval(val);
})
