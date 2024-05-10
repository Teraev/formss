const form = document.forms.namedItem('Registration')
const inputs = form.querySelectorAll('input')
const inps = form.querySelectorAll('#req')
let eror_span = document.querySelector('.eror span')
let succs = document.querySelector('.success span')

form.onsubmit = (e) => {
    e.preventDefault();

    let error_count = 0
    let success = 13

    const users = {}

    inputs.forEach(inp => {
        let isRequest = inp.parentNode.classList.contains('req')

        if (isRequest === true && inp.value.length === 0) {
            inp.parentNode.classList.add('error')
            error_count++
        } else {
            inp.parentNode.classList.remove('error')
        }
    });

    if (error_count > 0) {
        alert('Заполни главные критерии!')
    } else {
        const fm = new FormData(form)
        fm.forEach((val, key) => {
            users[key] = val
        })
    }
    eror_span.innerHTML = error_count


    inputs.forEach(inpu => {
        if (inpu.value.length === 0) {
            success--
        } else {

        }
    })
    succs.innerHTML = success




    console.log(users);
}