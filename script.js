document.addEventListener("DOMContentLoaded", function () {
  const icons = document.querySelectorAll(".icon");

  let count = 0;

  const intervalId = setInterval(function () {
    // Ukryj wszystkie ikony
    icons.forEach((icon) => icon.classList.add("hide"));

    // Wybierz losowy index "o" do pokazania
    const randomIndex = Math.floor(Math.random() * 3);
    const iconToShow = icons[randomIndex];

    // Opóźnienie przed pokazaniem nowych ikon
    setTimeout(function () {
      // Pokaż wybraną ikonę "o" i ikonę "I"
      iconToShow.classList.remove("hide");
      icons[3].classList.remove("hide");
    }, 1000); // Opóźnienie w milisekundach (1 sekunda)

    // Zwiększ licznik
    count++;

    // Sprawdź, czy osiągnięto 20 wystąpień
    if (count >= 30) {
      clearInterval(intervalId); // Zatrzymaj interwał
    }
  }, 2000); // Czas interwału w milisekundach (2 sekundy)
});
