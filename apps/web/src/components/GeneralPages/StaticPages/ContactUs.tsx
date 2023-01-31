import GeneralPages from '../GeneralPages';
import ImgEmail from '../../../assets/images/ico-email.svg';
import ImgWhatsapp from '../../../assets/images/ico-whatsapp.svg';

const StaticPages = {
  data: [
    {
      id: 1,
      title: 'We are 24/7 here for you.',
      content:
        'Whenever you have issues or questions,let us know and we`ll fix it for you!',
    },
  ],
};

const ContactUs = () => {
  return (
    <div className="container mx-auto xl:max-w-screen-xl">
      <GeneralPages data={StaticPages.data} />
      <div className="container mx-auto mt-8 flex w-4/5 justify-center">
        <div className="flex h-[73px] w-[210px] cursor-pointer items-center justify-evenly rounded-md bg-slate-100">
          <div>
            <img src={ImgEmail.src} alt="" className="mx-auto" />
          </div>
          <div className="grid">
            <span>Email</span>
            <span className="text-zinc-300">help@fds.com</span>
          </div>
        </div>
        <div className="mx-8 flex h-[73px] w-[210px] cursor-pointer items-center justify-evenly rounded-md bg-rose-500 text-white">
          <div className="grid">
            <span className="text-center font-semibold">Report Prodblem</span>
            <span className="text-white">Click & fill in the form</span>
          </div>
        </div>
        <div className="flex h-[73px] w-[210px] cursor-pointer items-center justify-evenly rounded-md bg-slate-100">
          <div>
            <img src={ImgWhatsapp.src} alt="" className="mx-auto" />
          </div>
          <div className="grid">
            <span>Whatsapp</span>
            <span className="text-zinc-300">Chat here</span>
          </div>
        </div>
      </div>
      <div className="container mx-auto mt-20 flex w-4/5 place-content-between self-center">
        <div className="mx-8">
          <iframe
            width="528"
            height="286"
            id="gmap_canvas"
            src="https://maps.google.com/maps?q=Menara%20Bank%20Mega&t=&z=13&ie=UTF8&iwloc=&output=embed"
            scrolling="no"
          ></iframe>
        </div>
        <div className="">
          <h2 className="mb-4 text-2xl font-semibold">FD Studio Head Office</h2>
          <span className="leading-4">
            Lantai 4 Wisma Prima, Jl. Kapten Tendean No.34, Mampang Prapatan,
            Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12720
          </span>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
