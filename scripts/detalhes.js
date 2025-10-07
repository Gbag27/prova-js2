const url = "https://tech4japa.fly.dev/produtos";

const validarForm = () => {
    event.preventDefault();
    const form = event.currentTarget;
    //codigos aprendidos no trabalho

    const email = form.querySelector("input[name='email']"); 
    const checkbox = form.querySelector("input[name='checkbox']");
    let valorEmail = email.value.trim();

    if (valorEmail === "") {
        valorEmail = prompt("Por favor, preencha o campo de email:");
        if (valorEmail) email.value = valorEmail;
    }

    if (!valorEmail) {
        alert("Você precisa preencher o campo de email para se cadastrar.");
        return;
    }

    const arroba = valorEmail.includes("@");
    const ponto = valorEmail.includes(".", valorEmail.indexOf("@"));
    const tamanho = valorEmail.length >= 10;

    if (!arroba && !ponto && !tamanho){
        alert("Por favor, insira um e-mail válido.");
        return;
    }

    if (!checkbox.checked){
        checkbox.style.backgroundColor = "red";
        alert("Por favor, aceite os termos!");
    }

    alert(`Cadastro do email: ${valorEmail} realizado com sucesso!`);
    email.value = "";
    checkbox.checked = false;
}

const carregarDetalhes = async () => {
    const article = document.querySelector("article");
    article.innerHTML = "<p>Carregando pizzas...</p>";

    const response = await fetch(url);
    const produtos = await response.json();
    const pizzas = produtos.filter(p => p.nome === "GabrielM");
    article.innerHTML = "";
  
    pizzas.forEach(pizza => {
        article.innerHTML += `
            <section class="container" id="${pizza.id}"> <!-- tentativa fracassada de fazer ir pro card certo --> 
                <div class="item">
                    <div class="left">
                        <img src="${pizza.imagem}" alt="${pizza.produto}" class="imgs">
                        <div class="wrapper">
                            <button class="btm">Comprar</button>
                        </div>
                    </div>
                    <div class="info"> 
                        <h2>${pizza.produto}</h2>
                        <h5>${pizza.descricao}</h5>
                        <form>
                            <fieldset>
                                <legend class="text">Cadastre-se</legend>
                                <div>  
                                    <label for="email-${pizza.id}">Email</label>
                                    <input type="text" name="email" placeholder="Digite seu email">
                                </div>
                                <div class="checkbox-area">
                                    <label for="checkbox-${pizza.id}">Aceitar os termos de uso</label>
                                    <input type="checkbox" name="checkbox">
                                </div>
                                <div>
                                    <input type="submit" value="Enviar" id="btmEnviar">
                                </div>
                            </fieldset>
                        </form>
                    </div>                    
                </div>
            </section>
        `;
    });
    const formularios = document.querySelectorAll("form");
    formularios.forEach(form => {
        form.addEventListener("submit", validarForm);
    });
};

carregarDetalhes();