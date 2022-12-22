const template = document.getElementById("li_template");
import data from "./data.json" assert { type: "json" };
const { products } = data;

// Image processing.
function getImageSource(products) {
  const updatedProducts = products.map((product) => {
    const image = product.productImages.map((image) => {
      return `/p/126x168/${image}.jpg`;
    });
    return { ...product, imageSrc: image[0] };
  });
  return updatedProducts;
}

let mainContainer = document.getElementById("product_container");
let productList = document.createElement('div');
productList.className = 'product-list';

(function createProductCard() {
  const updatedProducts = getImageSource(products);
  for (let i = 0; i < updatedProducts.length; i++) {
    let container = document.createElement("div");
    container.className = 'product-card';
    let image = document.createElement("img");
    image.className = 'product-image';
    image.src =
      i % 2 === 0
        ? 'https://www.victoriassecret.com/p/126x168/tif/10/5f/105f928ebcdf4e1c8b1aa3522beecfd2/1118862954A2_34DD_OM_F.jpg' : 'https://www.victoriassecret.com/p/126x168/tif/ce/2e/ce2eb480fc6a4d12b53ab9f363bdd82c/111888515OTW_OM_F.jpg';
    container.appendChild(image);
    let anchor = document.createElement("a");
    anchor.setAttribute(
      "href",
      "https://www.victoriassecret.com/us/vs/bras-catalog/5000000002?choice=54A2&genericId=11211705&limit=100&resultPosition=2&searchBrand=vs&searchedFor=bra"
    );
    anchor.setAttribute("target", '_blank');
    anchor.className = 'product-link';
    anchor.innerText = "link text";
    container.appendChild(anchor);
    let family = document.createElement("span");
    family.className = 'product-family';
    family.innerHTML = updatedProducts[i].family;
    container.appendChild(family);
    let name = document.createElement("span");
    name.className = 'product-name';
    name.innerHTML = updatedProducts[i].name;
    container.appendChild(name);
    let rating = document.createElement("span");
    rating.className = 'product-rating';
    rating.innerHTML = `${updatedProducts[i].rating} rating (${updatedProducts[i].totalReviewCount})`;
    container.appendChild(rating);
    let price = document.createElement("span");
    price.className = "product-price";
    price.innerHTML = updatedProducts[i].price;
    container.appendChild(price);
    let swatchCount = document.createElement("span");
    swatchCount.className = "product-swatchCount";
    swatchCount.innerHTML = `${updatedProducts[i].swatchCount} Colors`;
    container.appendChild(swatchCount);
    let itemLevelCallout = document.createElement("span");
    itemLevelCallout.className = "product-itemLevelCallout";
    itemLevelCallout.innerHTML = updatedProducts[i].itemLevelCallout
      ? updatedProducts[i].itemLevelCallout[0]
      : "";
    container.appendChild(itemLevelCallout);
    productList.appendChild(container);
    mainContainer.appendChild(productList);
  }
})();

const button = document.querySelector("button");
button.addEventListener("click", async () => {
  window.close();
});
