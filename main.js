let newProductDiv = document.getElementById("new-products");
document.addEventListener("DOMContentLoaded", () => {
  getnew();
});

function getnew() {
  let xhr = new XMLHttpRequest();
  xhr.open(
  "GET",
  "https://fakestoreapi.com/products",
   true);
  xhr.onload = function () {
    if (this.status == 200) {
      let results = JSON.parse(this.responseText);
        let html = "";
        let count = 0;
      console.log(results);
        results.forEach(item => {
            if (count == 4) {
                return;
            }
            if(count == 1 || count == 5)
            html +=
                `<div class="col-md-3">
                  <div class="card mb-2">
                    <img class="card-img-top" src='${item.image}'>
                    <div class="card-body">
                      <h4 class="card-title">${item.title}</h4>
                      <p class="card-text">$${item.price}</p>
                      <a class="btn btn-primary">Get it now</a>
                    </div>
                  </div>
                </div>
            `;
            else html +=
                `<div class="col-md-3 clearfix d-none d-md-block">
                  <div class="card mb-2">
                    <img class="card-img-top" src='${item.image}'>
                    <div class="card-body">
                      <h4 class="card-title">${item.title}</h4>
                      <p class="card-text">$${item.price}</p>
                      <a class="btn btn-primary">Get it now</a>
                    </div>
                  </div>
                </div>
            `;
            count++;
        });
        newProductDiv.innerHTML = html;
    }
  };
  xhr.send();
}
