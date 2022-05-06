let btnSend = document.getElementById("send");

btnSend.addEventListener("click", () => {
  let posicionLLegada: number = Number(data1.value);
  switch (posicionLLegada) {
    case 1:
      console.log("Entregar medalla de oro");
      break;
    case 2:
      console.log("Entregar medalla de plata");
      break;

    case 3:
      console.log("Entregar Medalla de Bronce");
      break;
    default:
      console.log("NO recibe medalla");
  }
});
