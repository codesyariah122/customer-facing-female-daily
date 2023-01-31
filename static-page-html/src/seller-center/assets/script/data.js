const subMenu = [
  {
    target: 'product',
    data: [
      {
        id: 1,
        title: 'Upload Product',
        query: 'upload-product'
      },
      {
        id: 2,
        title: 'Status Product',
        query: 'upload-product'
      },
      {
        id: 3,
        title: 'Foto Anda',
        query: 'upload-product'
      },
      {
        id: 4,
        title: 'Langganan',
        query: 'upload-product'
      },
      {
        id: 5,
        title: 'Product Group & Bundel',
        query: 'upload-product'
      },
      {
        id: 6,
        title: 'Layanan Pemasangan',
        query: 'upload-product'
      },
      {
        id: 7,
        title: 'Product Pengganti',
        query: 'upload-product'
      },
      {
        id: 8,
        title: 'Grosir',
        query: 'upload-product'
      }
    ],
  },
]

const topicQuestions = [
  {
    target: 'upload-product',
    data: [
      {
        id: 1,
        title: 'Bagaimana cara upload produk ? ',
        query: 'bagaimana-cara-upload-produk'
      },
      {
        id: 2,
        title: 'Saat proses upload, brand yang ingin saya pilih tidak tersedia',
        query: 'bagaimana-cara-upload-produk'
      },
      {
        id: 3,
        title: 'Saya tidak dapat memilih keterangan atribut produk seperti warna ukuran pada saat proses upload',
        query: 'bagaimana-cara-upload-produk'
      },
      {
        id: 4,
        title: 'Bagaimana cara mengubah berat dan dimensi produk yang telah disetujui ?',
        query: 'bagaimana-cara-upload-produk'
      },
      {
        id: 5,
        title: 'Bagaimana jika terjadi perbedaan berat pada produk yang mengakibatkan adanya selisih ongkir ?',
        query: 'bagaimana-cara-upload-produk'
      }
    ]
  }
]


const contentQuestions = [
  {
    target: 'bagaimana-cara-upload-produk',
    data: [
      {
        id: 1,
        title: 'Bagaimana cara upload produk?',
        contents: `
          <p class="text-justify leading-loose w-full md:mb-12 mb-12">Pada menu produk, Anda dapat mengakses tambah produk baru dari panel navigasi atau dengan tombol +tambah produk baru di halaman produk saya, bagian kanan atas. Anda akan menemukan formulir produk baru. Anda wajib mengisi kolom yang berlabel wajib. </p>
          <img src="../assets/images/topics/cara-upload-produk.svg" class="max-w-none"/>
          <p class="text-justify leading-loose w-full md:mt-12 mt-12">Setelah mengisi semua kolom, Anda dapat ‘Simpan & Arsipkan’ terlebih dahulu atau ‘Tambah Produk’. Aksi ini akan mengirimkan produk yang sudah Anda isi ke tim internal  female daily studio untuk diulas terlebih dahulu.</p>
        `
      },
      {
        id: 2,
        title: 'Bagaimana cara upload produk?',
        contents: `
          <p class="text-justify leeding-loose mb-12 w-full md:mb-12">Saksikan video cara mengupload produk yang baik dan benar. Agar proses persetujuanmu cepat dan produkmu segera tampil di  female daily studio.</p>
          <div class="cursor-pointer">
            <img src="../assets/images/topics/video-upload-product.svg" class="object-cover max-w-full h-auto rounded-lg"/>
          </div>
          <p class="text-justify mt-12 leading-loose w-full md:mt-12">Setelah mengisi semua kolom, Anda dapat ‘Simpan & Arsipkan’ terlebih dahulu atau ‘Tambah Produk’. Aksi ini akan mengirimkan produk yang sudah Anda isi ke tim internal  female daily studio untuk diulas terlebih dahulu.</p>
        `
      }
    ]
  }
]
