/* eslint-disable react/no-unescaped-entities */
import GeneralPages from '../GeneralPages';

const StaticPages = {
  data: [
    {
      id: 1,
      title: 'Syarat & Ketentuan',
      content: '',
    },
  ],
};

const TermConditions = () => {
  return (
    <div className="container mx-auto xl:max-w-screen-xl">
      <GeneralPages data={StaticPages.data} />
      <div className="mx-auto w-9/12">
        <p>
          Halaman ini menampilkan Syarat dan Ketentuan yang sesuai dengan
          Produk-Produk yang kami tunjukkan (masing-masing adalah "Produk") yang
          terdaftar di website kami studio.femaledaily.com ("Situs") kepada Anda
          ("Persyaratan dan Ketentuan"). Luangkan waktu Anda untuk membaca
          Syarat dan Ketentuan ini sebelum memesan Produk dari Situs kami.
          Dengan memesan salah satu produk kami, berarti Anda setuju untuk
          terikat pada Syarat dan Ketentuan ini. Anda harus mengunjungi halaman
          secara berkala untuk mengetahui setiap perubahan yang kami buat dalam
          Syarat dan Ketentuan kami.
        </p>
        <div>
          <span>1. Definisi</span>
          <ul className="list-disc p-4">
            <li>
              "Akun" berarti Akun FEMALE DAILY STUDIO yang Anda perlukan untuk
              mendaftar di Situs jika Anda ingin melakukan Pemesanan di Situs;
            </li>
            <li>
              "Akun" berarti Akun FEMALE DAILY STUDIO yang Anda perlukan untuk
              mendaftar di Situs jika Anda ingin melakukan Pemesanan di Situs;
            </li>
            <li>
              "Konfirmasi Pesanan" berarti email kami kepada Anda, dimana kami
              mengakui Pesanan Anda sesuai dengan pasal 4.2 di bawah ini;
            </li>
            <li>
              "Kontrak" berarti Pemesanan dari 1 produk atau lebih sesuai dengan
              Syarat dan Ketentuan yang kami terima sesuai dengan pasal 4.2 di
              bawah ini;
            </li>
            <li>
              "Pelanggan" berarti setiap orang yang menempatkan Pemesanan di
              Situs;
            </li>
            <li>
              "Pemesanan" berarti Pemesanan yang diajukan oleh Anda ke Situs
              untuk membeli Produk dari kami;
            </li>
            <li>"Anda" berarti Pelanggan yang menempatkan Pemesanan;</li>
            <li>
              Referensi untuk "klausul" adalah klausa Syarat dan Ketentuan ini;
            </li>
            <li>
              Kata-kata menyampaikan bentuk tunggal harus mencakup jamak dan
              sebaliknya. Kata-kata menyampaikan gender meliputi setiap jenis
              kelamin dan referensi untuk orang meliputi individu, perusahaan,
              korporasi, perusahaan atau kemitraan;
            </li>
            <li>
              Referensi untuk "termasuk" atau kata-kata serupa atau ungkapan,
              berarti tanpa batasan.
            </li>
          </ul>
        </div>
        <br />
      </div>
    </div>
  );
};

export default TermConditions;
