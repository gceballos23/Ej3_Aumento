let btnSend = document.getElementById("send");

btnSend.addEventListener("click", () => {
  let sueldo: number = Number(data.value);

  if (sueldo < 15001) {
    console.log("Aumento", sueldo * 0.2);
  } else {
    if (sueldo < 20001) {
      console.log("Aumento", sueldo * 0.1);
    } else {
      if (sueldo <= 25000) {
        console.log("Aumento", sueldo * 0.05);
      } else {
        console.log("No hay Aumento");
      }
    }
  }
});
