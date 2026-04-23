{
  // dark mode
  const darkButton = document.querySelector(".dark-mode");
  const button = document.querySelector(".button");
  const input = document.querySelector(".input");
  const al = document.querySelector(".warn");
  const names = ["johnny", "hugo", "joão pedro", "alisson", "ricardo", "emely"];
  darkButton.addEventListener("click", () => {
    alert(
      "Fiquei com preguiça de fazer essa parte! Só escolhe o nome aí e fica de boa!",
    );
  });
  button.addEventListener("click", () => {
    if (!names.includes(input.value.toLowerCase())) {
      al.innerHTML =
        "<span class='material-symbols-outlined'>warning</span> Coloque seu nome como está exibido na lateral!</span>";
      al.classList.add("alert");
    } else {
      al.classList.remove("alert");
      al.innerHTML = `<span class='material-symbols-outlined'>lock</span> Gerando amigo secreto para ${input.value.toUpperCase()}...</span>`;
    }
  });
}
