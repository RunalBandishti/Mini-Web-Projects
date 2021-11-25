const toggles = document.querySelectorAll('.toggle');
const good = document.querySelector('#good');
const cheap = document.querySelector('#cheap');
const fast = document.querySelector('#fast');

toggles.forEach((toggle) =>
  toggle.addEventListener('change', (e) => dotheTrick(e.target))
);

function dotheTrick(theClicked) {
  if (good.checked && cheap.checked && fast.checked) {
    if (good === theClicked) {
      fast.checked = false;
    }
    if (cheap === theClicked) {
      good.checked = false;
    }
    if (fast === theClicked) {
      cheap.checked = false;
    }
  }
}
