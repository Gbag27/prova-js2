const url = "https://tech4japa.fly.dev/produtos";

const carregarCardapio = async () => {
    const article = document.querySelector("article");
    article.innerHTML = "<h2>Carregando...</h2>";
  
    const response = await fetch(url);
    const produtos = await response.json();
    const pizzas = produtos.filter(p => p.nome === "GabrielM");
    article.innerHTML = "";

    pizzas.forEach(pizza => {
        article.innerHTML += `
            <div class="item">
                <div class="imgs">
                    <img src="${pizza.imagem}" alt="${pizza.produto}">
                </div>
                <h3>${pizza.produto}</h3>
                <a href="detalhes.html#${pizza.id}"><button class="btm">Detalhes</button></a>
            </div>
        `;
  });
};

carregarCardapio();