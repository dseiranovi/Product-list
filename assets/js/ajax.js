

// function that sending request to action.php with needed parameters
function add() {

  //getting values of input
  const sku = document.getElementById('SKU').value;
  const name = document.getElementById('name').value;
  const price = document.getElementById('PRICE').value;
  const weight = document.getElementById('Weight').value;
  const height = document.getElementById('height').value;
  const width = document.getElementById('width').value;
  const lenght = document.getElementById('lenght').value;
  const size = document.getElementById('Size').value;

  // maked switch to avoid use if else statement
  // checking what type of data is adding on page
    switch (true) {
      case (!weight && !height &&!width && !lenght):
        function addDisk() {
          var data = new FormData();
          data.append('type', 'disk');
          data.append('action', 'add');
          data.append('SKU', sku);
          data.append('name', name);
          data.append('price', price);
          data.append('size', size);
          var xml = new XMLHttpRequest();
          xml.open("POST", "Core/action.php", true)
          xml.send(data);
          window.location = 'index.html';
        }
        return addDisk();
        break;
      case (!size && !weight):
        function addFurniture() {
          var data = new FormData();
          data.append('type', 'furniture');
          data.append('action', 'add');
          data.append('SKU', sku);
          data.append('name', name);
          data.append('price', price);
          data.append('height', height);
          data.append('width', width);
          data.append('lenght', lenght);
          var xml = new XMLHttpRequest();
          xml.open("POST", "Core/action.php", true)
          xml.send(data);
          console.log (sku,name,price,height,width,lenght)
          window.location = 'index.html';
        }
        return addFurniture();
        break;
      case (!size && !height &&!width && !lenght):
        function addBook() {
          var data = new FormData();
          data.append('type', 'book');
          data.append('action', 'add');
          data.append('SKU', sku);
          data.append('name', name);
          data.append('price', price);
          data.append('weight', weight);
          var xml = new XMLHttpRequest();
          xml.open("POST", "Core/action.php", true)
          xml.send(data);
          window.location = 'index.html';
        }
        return addBook();
        break;
    }
  }

  //sending data of selected items to action.php with action delete
  function deleteItems(queryString) {
    var data = new FormData();
    data.append('type', 'all');
    data.append('action', 'delete');
    var xml = new XMLHttpRequest();
    xml.open("POST", "Core/action.php?" + queryString, true)
    xml.send(data);
  }
