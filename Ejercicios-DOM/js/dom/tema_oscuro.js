const d = document;
export default function darkTheme(btn, classDark) {
  const $themeBtn = d.querySelector(btn),
    $selectors = d.querySelectorAll("[data-dark]");

  console.log($selectors);

  let moom = "🌙",
    sun = "☀️";

  d.addEventListener("click", (e) => {
    if (e.target.matches(btn)) {
      console.log($themeBtn.textContent);
      if ($themeBtn.textContent === moom) {
        $selectors.forEach((el) => el.classList.add(classDark));
        $themeBtn.textContent = sun;
      } else {
        $selectors.forEach((el) => el.classList.remove(classDark));
        $themeBtn.textContent = moom;
      }
    }
  });
}
