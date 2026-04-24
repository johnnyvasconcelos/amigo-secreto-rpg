import products from "./products.js";
const darkButton = document.querySelector(".dark-mode");
const button = document.querySelector(".button");
const input = document.querySelector(".input");
const al = document.querySelector(".warn");
const names = ["johnny", "hugo", "joão pedro", "alisson", "ricardo", "emely"];
const associations = [
  {
    name: "johnny",
    products: [
      "Cueca Top",
      "Cantil",
      "Mini Cooper",
      "Camiseta Dev",
      "Camiseta RPG",
      "Pimenta com Leite",
      "Livro AD&D",
    ],
  },
  {
    name: "hugo",
    products: [
      "Camiseta RPG",
      "Camiseta God of War",
      "Camiseta Assassins Creed",
      "Caneca de Macaco",
      "Microfone",
      "Camiseta Chiclete",
      "Camiseta Vivo",
    ],
  },
  {
    name: "joão pedro",
    products: [
      "Energético",
      "Camiseta Minecraft",
      "Capacete Cearense",
      "Action Figure",
      "Skyrim",
      "Travesseiro",
      "Kit Dormir Bem",
    ],
  },
  {
    name: "alisson",
    products: [
      "Boneco Patolino",
      "Pimenta com Leite",
      "Capacete Cearense",
      "Skyrim",
      "Action Figures",
      "Carolina Reaper",
      "Mighty Blade",
    ],
  },
  {
    name: "ricardo",
    products: [
      "Action Figure",
      "Mighty Blade",
      "Cinzeiro Top",
      "Caixa de Cigarro",
      "Charuto",
      "Peruca Metaleiro",
      "Narguile",
    ],
  },
  {
    name: "emely",
    products: [
      "Hidratante",
      "Batom Top",
      "Skin Care",
      "Camiseta Gatinho",
      "Kit Limpeza",
      "Pano de Chão",
      "Pulseira Feminina",
    ],
  },
];
const productsDiv = document.querySelector(".products");
for (let i = 0; i < 7; i++) {
  productsDiv.innerHTML += `<article>
<div class="image"><a target="_blank" href="${products[i].link}"><img src="./assets/images/${products[i].imagem}"/></a></div>
<div class="name"><a target="_blank" href="${products[i].link}">${products[i].nome}</a></div>
<div class="price">R$ ${products[i].preco}</div>
</article>`;
}
darkButton.addEventListener("click", () => {
  alert(
    "Fiquei com preguiça de fazer essa parte! Só escolhe o nome aí e fica de boa!",
  );
});
const h1 = document.querySelector(".h1-area");
const loading = document.querySelector(".loading");
const h_1 = h1.querySelector("h1");
const li = document.querySelectorAll("li");
for (let i = 0; i < li.length; i++) {
  li[i].addEventListener("click", () => {
    const currentName = li[i].querySelector(".text").textContent.toLowerCase();
    const person = associations.find((a) => a.name === currentName);
    const currentProducts = person.products;
    const filteredProducts = products.filter((p) =>
      currentProducts.includes(p.nome),
    );
    productsDiv.innerHTML = "";

    filteredProducts.forEach((p) => {
      productsDiv.innerHTML += `
  <article>
    <div class="image">
      <a target="_blank" href="${p.link}">
        <img src="./assets/images/${p.imagem}" />
      </a>
    </div>
    <div class="name">
      <a target="_blank" href="${p.link}">${p.nome}</a>
    </div>
    <div class="price">R$ ${p.preco}</div>
  </article>`;
    });
  });
}
button.addEventListener("click", () => {
  if (!names.includes(input.value.toLowerCase())) {
    al.innerHTML =
      "<span class='material-symbols-outlined'>warning</span> Coloque seu nome como está exibido na lateral!</span>";
    al.classList.add("alert");
  } else {
    al.classList.remove("alert");
    al.innerHTML = `<span class='material-symbols-outlined'>lock</span> Gerando amigo secreto para ${input.value.toUpperCase()}...</span>`;
    h1.classList.add("none");
    loading.classList.remove("none");
    setTimeout(() => {
      h1.classList.remove("none");
      loading.classList.add("none");
      h_1.innerHTML = `Parabéns! Seu amigo secreto é: <span style="color: orange;">JOÃO PEDRO</span>!`;
    }, 3000);
  }
});
