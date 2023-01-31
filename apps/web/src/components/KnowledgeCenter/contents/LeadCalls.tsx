import { Vector } from '@components/KnowledgeCenter';

const LeadCalls = () => {
  return (
    <>
      <div className="container mt-36 w-full overflow-x-hidden border-t-2 md:mt-6">
        <div className="mt-12 grid h-screen grid-cols-12 gap-4">
          <div className="col-span-full place-self-center md:col-span-full">
            <h2 className="ml-16 mb-6 w-10/12 font-extrabold md:ml-12 md:mb-0 md:w-10/12 md:text-center">
              Tim kami akan selalu ada untuk membantu Anda.
            </h2>
            <Vector name="contact-us" />
            <p className="text-1xl mt-6 ml-12 w-10/12 font-semibold md:mt-6 md:ml-40 md:w-7/12">
              Tidak menemukan jawaban untuk pertanyaan Anda? Hubungi kami lebih
              lanjut.
            </p>
          </div>

          <div className="col-span-full place-self-center">
            <div className="grid grid-cols-1 md:flex md:place-content-center md:justify-center">
              <div className="col-span-full place-self-center md:flex-1">
                <button
                  type="button"
                  className="mr-2 mb-2 rounded-lg border border-gray-200 bg-white py-2.5 px-5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
                >
                  <div className="flex place-content-center justify-center">
                    <div className="flex-1">
                      <i className="fa fa-envelope-o fa-fw fa-lg text-2xl font-extrabold text-red-500"></i>
                    </div>
                    <div className="w-32 shrink items-start">
                      <span className="font-extrabold md:-ml-16">Email</span>{' '}
                      <br />
                      <span className="text-gray-400">help@fds.com</span>
                    </div>
                  </div>
                </button>
              </div>
              <div className="col-span-full md:flex-1">
                <button
                  type="button"
                  className="mr-2 mb-2 rounded-lg bg-red-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                >
                  <div className="flex place-content-center justify-center">
                    <div className="w-64 shrink items-start">
                      <span className="font-extrabold ">Report Problem</span>{' '}
                      <br />
                      <span className="text-gray-100">
                        Click & fill in the form
                      </span>
                    </div>
                  </div>
                </button>
              </div>
              <div className="col-span-full place-self-center md:flex-1">
                <button className="mr-2 mb-2 rounded-lg border border-gray-200 bg-white py-2.5 px-5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700">
                  <div className="flex place-content-center justify-center">
                    <div className="flex-1">
                      <i className="fa fa-whatsapp fa-fw fa-lg text-2xl font-extrabold text-green-600"></i>
                    </div>
                    <div className="w-32 shrink items-start">
                      <span className="font-extrabold md:-ml-10">WhatsApp</span>{' '}
                      <br />
                      <span className="text-gray-400 md:-ml-10">Chat here</span>
                    </div>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LeadCalls;
