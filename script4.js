var add = document.getElementById('enroll-btn')
var t = document.getElementById('display')

var row = 1
add.onclick = function () {

    const name = document.getElementById('name').value
    const email = document.getElementById('email').value
    const pNumber = document.getElementById('pNumber').value
    const age = document.getElementById('age').value
    const addr = document.getElementById('addr').value
    const img = document.createElement('img')

    if (name != '' && email != '' && pNumber != '' && age != '' && addr != '') {
        var values = []
        var selected_value = document.querySelectorAll('input[type="checkbox"]:checked')
        Array.from(selected_value).forEach(function (e) {
            values.push(e.value)
        })

        const description = `<p><strong>Name:</strong> ${name}<br><strong>Email:</strong> ${email}<br> 
        <strong>Phone Number:</strong> ${pNumber}<br>
        <strong>Age:</strong> ${age}<br> <strong>Address: </strong> ${addr}<br><strong>Gender:</strong> ${document.querySelector('input[type="radio"]:checked').value}
        <br><strong>Skills: <br></strong> ${values.join(' <br> ')}
       
        </p>
        `
        var newRow = t.insertRow(row)

        var cell1 = newRow.insertCell(0)
        var cell2 = newRow.insertCell(1)

        if (document.querySelector('input[type="radio"]:checked').value == 'Male') {
            img.src="male.png";
            img.setAttribute('alt', 'Male')
        }
        
        else {
            img.src="femle.png";
    
            img.setAttribute('alt', 'Female')
        }


        cell1.innerHTML = description
        cell2.appendChild(img)

        row++
        document.getElementById('input-form').reset()
        name = email = age = ''
    }
    else {
        alert('Please fill all the fields')
    }
}

document.getElementById('clear-btn').onclick = function () {
    if (row != 1) {
        console.log(row)
        row--
        t.deleteRow(row)
    }
    else
        return
}