const contentPopup = document.getElementById('card-list-topic')
if (contentPopup !== null) {
  const newEl = document.createElement('div')
  newEl.innerHTML = `
  <div class="flex justify-start md:gap-x-10 gap-x-4 place-items-center first__content-card mt-4 md:-mt-0">
    <div onClick="redirectPage('delivery')" class="card-content w-24 md:w-36 md:h-36 h-24 relative rounded-1xl md:rounded-3xl shadow-lg cursor-pointer">
      <div class="md:mt-10 mt-5">
        <img src="../assets/images/helpcenter/icon-box/cube.svg" alt="account" class="max-w-none ring-0 md:w-8 w-8">
      </div>
      <div class="md:mt-3 mt-2">
        <h5>Others</h5>
      </div>
      </div>
    </div>
  `
  contentPopup.appendChild(newEl)
}
