
    
    function getData() {
        var data = new FormData();
        data.append('type', 'all');
        data.append('action', 'showall');
        var xml = new XMLHttpRequest();
        xml.open("POST", "core/action.php", true)
        xml.onload = function() {
            var ajaxdata = this.response;
            var jsonResult = JSON.parse(ajaxdata);
            jsonResult.forEach(element => displayProduct(element));
        }

        xml.send(data);
    }

    var theform = document.getElementById('mycheckbox')

    function displayProduct(product) {
        var prodArray = [];
        prodArray.push(product);
        for (data of prodArray) {
                switch(true){
                case(!data.weight && !data.size):
            theform.innerHTML += "<div class='card' style='width: 18rem; margin-left:15px; margin-bottom:15px; align-items:center; multiple='yes'>" + "<div class='card-body' id ='card-body' name='furniture' style='display' multiple='yes'><input type='checkbox';  name='productCheckbox' value='" +data.id + "' data-type='" + data.type + "' class='checkbox' style='margin-right: 220px; margin-bottom: 10px'; multiple='yes' ><h5 class='card-title'> SKU - " + data.sku + "</h5>" +"Product Name: " +data.name +"<br>"+"Product Price: "+  data.price + "$" +"<br>"+ "Dimension: " + data.height +"x"+ data.width +"x"+ data.lenght;
            theform.innerHTML += "</div>";
            theform.innerHTML += "</div>";
            break;
            case(!data.weight && !data.height && !data.width && !data.lenght):
                theform.innerHTML += "<div class='card' style='width: 18rem; margin-left:15px; margin-bottom:15px; align-items:center; multiple='yes'>" + "<div class='card-body' id ='card-body' name='disk' style='display' multiple='yes'><input type='checkbox';  name='productCheckbox' value='" +data.id + "' data-type='" + data.type + "'  class='checkbox' style='margin-right: 220px; margin-bottom: 10px'; multiple='yes' ><h5 class='card-title'>  SKU - " + data.sku + "</h5>" +"Product Name: " +data.name +"<br>"+"Product Price: "+  data.price + "$" +"<br>"+ "Size"+ data.size; 
            theform.innerHTML += "</div>";
            theform.innerHTML += "</div>";
            break;
            case(!data.height && !data.width && !data.lenght && !data.size):
                theform.innerHTML += "<div class='card' style='width: 18rem; margin-left:15px; margin-bottom:15px; align-items:center; multiple='yes'>" + "<div class='card-body' id ='card-body' name='book' style='display' multiple='yes'><input type='checkbox' name='productCheckbox' value='" +data.id + "'  data-type='" + data.type + "' class='checkbox' style='margin-right: 220px; margin-bottom: 10px'; multiple='yes' ><h5 class='card-title'>  SKU - " + data.sku + "</h5>" +"Product Name: " +data.name +"<br>"+"Product Price: "+  data.price + "$" +"<br>"+ "Weight: " + data.weight; 
            theform.innerHTML += "</div>";
            theform.innerHTML += "</div>";
            break;
            }
           

            

        }

    }

//reatng array's for put there selected ids of checked items on page
let books = [];
let disks = [];
let furniture = []

// process to put id && and table name in arrays  
function processElement(element){
    let type = element.dataset.type;
    if(type === "books"){
        books.push(element.value);
    } else if(type === "disks") {
        disks.push(element.value);
    } else if(type === "furnitures") {
        furniture.push(element.value);
    }
}


function processDelete(){
    checkboxes = document.getElementsByName("productCheckbox");
    selectedCboxes = Array.prototype.slice.call(checkboxes).filter(ch => ch.checked==true);
    selectedCboxes.forEach(processElement);
    // joined arrays and sending this data to ajax.js funciton deleteItem
    let queryString = "books="+books.join(",")+"&disks="+disks.join(",")+"&furnitures="+furniture.join(",")
    deleteItems(queryString)
    window.location.reload();
}


