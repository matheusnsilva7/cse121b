const div = document.querySelector("#container");
const h1 = document.querySelector("h1");
let href = window.location.search;
let cars = [];

const displayCar = (car) => {
  div.innerHTML = `
    <div class="car">
    <div> <h5>Model Year</h5> <span>${car.AnoModelo}</span> </div>
    <div> <h5>Code</h5> <span>${car.CodigoFipe}</span> </div>
    <div> <h5>Fuel</h5> <span>${car.Combustivel}</span> </div>
    <div> <h5>Brand</h5> <span>${car.Marca}</span> </div>
    <div> <h5>Reference Month</h5> <span>${car.MesReferencia}</span> </div>
    <div> <h5>Model</h5> <span>${car.Modelo}</span> </div>
    <div> <h5>Fuel Acronym</h5> <span>${car.SiglaCombustivel}</span> </div>
    <div> <h5>Vehicle Type</h5> <span>${car.TipoVeiculo}</span> </div>
    <div> <h5>Value</h5> <span>${car.Valor}</span> </div>
    </div>
    `;
};

const displayCars = (cars, type) => {
  div.innerHTML = "";
  console.log(type);
  if (type === "") return displayCar(cars);
  cars.forEach((e) => {
    div.innerHTML += `
        <a href="?${href.slice(1) ? href.slice(1) + "&" : ""}${type}=${
      e.codigo
    }">
            <h3>${e.nome}</h3>
        </a>
        `;
  });
};

const getData = async () => {
  const url = getURL();
  const res = await fetch(url[0]);
  const data = await res.json();

  cars = url[1] === "model" ? data.modelos : data;
  console.log(url[1]);
  displayCars(cars, url[1]);
};

const getURL = () => {
  const hrefUrl = href.split("&");
  const brand = hrefUrl[0].slice(1);
  const model = hrefUrl[1];
  const year = hrefUrl[2];

  const url = `https://parallelum.com.br/fipe/api/v1/carros/marcas${
    brand
      ? `/${brand.split("=")[1]}/modelos${
          model
            ? `/${model.split("=")[1]}/anos${
                year ? `/${year.split("=")[1]}` : ""
              }`
            : ""
        }`
      : ""
  }`;
  h1.textContent = year
    ? ""
    : model
    ? "Select the Year"
    : brand
    ? "Select the Model"
    : "Select the Brand";
  return [url, year ? "" : model ? "year" : brand ? "model" : "brand"];
};

window.addEventListener("load", getData);
