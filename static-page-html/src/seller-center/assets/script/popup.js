const contentPopup = document.getElementById('card-list-topic')
if (contentPopup !== null) {
  const newEl = document.createElement('div')
  newEl.innerHTML = `
  <div class="flex justify-center md:gap-x-10 gap-x-4 place-items-center first__content-card -mt-12 md:-mt-0">
    <div onClick="redirectPage('product')" class="card-content md:w-36 md:h-36 h-24 relative rounded-1xl md:rounded-3xl shadow-lg cursor-pointer">
      <div class="md:mt-10 mt-5">
        <img src="../assets/images/helpcenter/icon-box/profile.svg" alt="account" class="max-w-none ring-0 md:w-8 w-8">
      </div>
      <div class="md:mt-3 mt-2">
        <h5>Seller Center Account</h5>
      </div>
      </div>

      <div onClick="redirectPage('product')" class="card-content md:w-36 md:h-36 h-24 relative rounded-1xl md:rounded-3xl shadow-lg cursor-pointer">
        <div class="md:mt-10 mt-5">
          <img src="../assets/images/helpcenter/icon-box/menu.svg" alt="" class="max-w-none ring-0 md:w-8 w-8">
        </div>
        <div class="md:mt-3 mt-2">
          <h5>Order</h5>
        </div>
      </div>

      <div onClick="redirectPage('product')" class="card-content md:w-36 md:h-36 h-24 relative rounded-1xl md:rounded-3xl shadow-lg cursor-pointer">
        <div class="md:mt-10 mt-5">
          <img src="../assets/images/helpcenter/icon-box/box-outline.svg" alt="" class="max-w-none ring-0 md:w-8 w-8">
          <div class="md:mt-3 mt-2">
            <h5>Return & Refund</h5>
          </div>
        </div>
      </div>

      <div onClick="redirectPage('product')" class="card-content md:w-36 md:h-36 h-24 relative rounded-1xl md:rounded-3xl shadow-lg cursor-pointer">
        <div class="md:mt-10 mt-5">
          <img src="../assets/images/helpcenter/icon-box/package-outline.svg" alt="" class="max-w-none ring-0 md:w-8 w-8">
          <div class="md:mt-3 mt-2">
            <h5>Product</h5>
          </div>
        </div>
      </div>
    </div>

    <div class="flex justify-center md:gap-x-10 lg:gap-x-10 gap-x-4 place-items-center second__content-card">
        <div onClick="redirectPage('product')" class="card-content md:w-36 md:h-36 h-24 relative rounded-1xl md:rounded-3xl shadow-lg cursor-pointer">
            <div class="md:mt-10 mt-5">
                <img src="../assets/images/helpcenter/icon-box/percent.svg" alt="" class="max-w-none ring-0 md:w-8 w-8">
            </div>
            <div class="md:mt-3 mt-2">
                <h5>Promotion</h5>
            </div>
        </div>

        <div onClick="redirectPage('product')" class="card-content md:w-36 md:h-36 h-24 relative rounded-1xl md:rounded-3xl shadow-lg cursor-pointer">
            <div class="md:mt-10 mt-5">
                <img src="../assets/images/helpcenter/icon-box/box-inventory.svg" alt="" class="max-w-none ring-0 md:w-8 w-8">
            </div>
            <div class="md:mt-3 mt-2"
                <h5>Inventory</h5>
            </div>
        </div>
        <div onClick="redirectPage('product')" class="card-content md:w-36 md:h-36 h-24 relative rounded-1xl md:rounded-3xl shadow-lg cursor-pointer">
            <div class="md:mt-10 mt-5">
                <img src="../assets/images/helpcenter/icon-box/settings.svg" alt="" class="max-w-none ring-0 md:w-8 w-8">
                <div class="md:mt-3 mt-2">
                    <h5>Pengaturan <br/> Toko</h5>
                </div>
            </div>
        </div>
        <div onClick="redirectPage('product')" class="card-content md:w-36 md:h-36 h-24 relative rounded-1xl md:rounded-3xl shadow-lg cursor-pointer">
            <div class="md:mt-10 mt-5">
                <img src="../assets/images/helpcenter/icon-box/shop-outline.svg" alt="" class="max-w-none ring-0 md:w-8 w-8">
                <div class="md:mt-3 mt-2">
                    <h5>Performa <br/> Toko</h5>
                </div>
            </div>
        </div>
    </div>

    <div class="flex justify-center md:gap-x-10 lg:gap-x-10 gap-x-4 place-items-center second__content-card">
        <div onClick="redirectPage('product')" class="card-content md:w-36 md:h-36 h-24 relative rounded-1xl md:rounded-3xl shadow-lg cursor-pointer">
            <div class="md:mt-10 mt-5">
                <img src="../assets/images/helpcenter/icon-box/list-menu.svg" alt="" class="max-w-none ring-0 md:w-8 w-8">
            </div>
            <div class="md:mt-3 mt-2">
                <h5>Laporan</h5>
            </div>
        </div>
        <div onClick="redirectPage('product')" class="card-content md:w-36 md:h-36 h-24 relative rounded-1xl md:rounded-3xl shadow-lg cursor-pointer">
            <div class="md:mt-10 mt-5">
                <img src="../assets/images/helpcenter/icon-box/approve-file-outline.svg" alt="" class="max-w-none ring-0 md:w-8 w-8">
            </div>
            <div class="md:mt-3 mt-2">
                <h5>Persetujuan <br/> Pembayaran</h5>
            </div>
        </div>
        <div onClick="redirectPage('product')" class="card-content md:w-36 md:h-36 h-24 relative rounded-1xl md:rounded-3xl shadow-lg cursor-pointer">
            <div class="md:mt-10 mt-5">
                <img src="../assets/images/helpcenter/icon-box/chat-outline.svg" alt="" class="max-w-none ring-0 md:w-8 w-8">
                <div class="md:mt-3 mt-2">
                    <h5>Chat & Review</h5>
                </div>
            </div>
        </div>
        <div onClick="redirectPage('product')" class="card-content md:w-36 md:h-36 h-24 relative rounded-1xl md:rounded-3xl shadow-lg cursor-pointer">
            <div class="md:mt-10 mt-5">
                <img src="../assets/images/helpcenter/icon-box/shipping-truck-outline.svg" alt="" class="max-w-none ring-0 md:w-8 w-8">
                <div class="md:mt-3 mt-2">
                    <h5>Pengiriman</h5>
                </div>
            </div>
        </div>
    </div>

    <div class="flex justify-self-center md:gap-x-10 lg:gap-x-10 gap-x-4 place-items-center second__content-card w-36 md:w-96 -ml-48 md:ml-0">
        <div onClick="redirectPage('product')" class="card-content md:w-36  md:h-36 relative rounded-1xl md:rounded-3xl shadow-lg cursor-pointer">
            <div class="md:mt-10 mt-5">
                <img src="../assets/images/helpcenter/icon-box/notification.svg" alt="" class="max-w-none ring-0 md:w-8 w-8">
            </div>
            <div class="md:mt-3 mt-2">
                <h5>Notifikasi</h5>
            </div>
        </div>
        <div onClick="redirectPage('product')" class="card-content md:w-36 md:h-36 h-24 relative rounded-1xl md:rounded-3xl shadow-lg cursor-pointer">
            <div class="md:mt-10 mt-5">
                <img src="../assets/images/helpcenter/icon-box/megaphone.svg" alt="" class="max-w-none ring-0 md:w-8 w-8">
            </div>
            <div class="md:mt-3 mt-2"
                <h5 style="${fontSize()}">Pasang Iklan</h5>
            </div>
        </div>
    </div>
  `
  contentPopup.appendChild(newEl)
}
