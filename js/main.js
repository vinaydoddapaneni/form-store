var pname = document.querySelector('#pname');
var pcost = document.querySelector('#pcost');
var plocation = document.querySelector('#plocation');
// var submit = document.querySelector('#getvalue');


var allProducts = []

// var list = [
//     { name: "vinay", location: "Kodad" },
//     { name: "vinay", location: "Kodad" },
//     { name: "vinay", location: "Kodad" },
//     { name: "vinay", location: "Kodad" },
//     { name: "vinay", location: "Kodad" },
//     { name: "vinay", location: "Kodad" },
//     { name: "vinay", location: "Kodad" },
//     { name: "vinay", location: "Kodad" }
// ]

function getValue() {
    var store = { prod: pname.value, value: pcost.value, location: plocation.value };

    allProducts.push(store)



    // console.log(allProducts);

    if (allProducts.prod !== "" && allProducts.value !== "" && allProducts.location !== "") {

        document.querySelector("#getValue").innerHTML = JSON.stringify(allProducts)

    } else {
        console.log("try again");
    }


















    // // var data = allProducts.map(list => {
    // //     list.prod
    // //     document.querySelector("#getValue").innerHTML = `<p>${list.prod}</p><br><p>${list.value}</p><br><p>${list.location}</p>`
    // // })




    // document.getElementsByTagName('div')[0].setAttribute("class", "card")



    // allProducts.map(names => {
    //     if (names.prod !== 0 && names.value !== 0) {
    //         var par = document.createElement('h1')
    //         var node = document.createTextNode(names.prod)
    //         par.appendChild(node)

    //         var dv = document.getElementById('pnameg')
    //         dv.appendChild(par)
    //     }
    //     else {
    //         names.prod = ""
    //         names.value = ""
    //     }
    // })

    return false



}
