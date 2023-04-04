let vvod1= document.getElementById('input1')
let vvod2= document.getElementById('input2')
let fact= document.getElementById('ok')
let vyvd= document.getElementById('rand')

function f2() {
    let min= vvod1.value
    let max= vvod2.value
	 vyvd.innerHTML=Math.round(min - 0.5 + Math.random() * (max - min + 1));
}
fact.onclick=f2