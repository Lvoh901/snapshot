import React from 'react'

const Contact = () => {
  return (
    <div className='h-screen flex flex-col justify-center items-center bg-background'>
      <div className="p-8 flex flex-col justify-center items-center text-center space-y-8">
        <h1 className="font-display font-bold">Let's Work Together</h1>

        <p className='font-light mx-auto max-w-3xl'>Am open to new and ongoing projects. I have three days open in the coming week for new projects. Leave your details for a response.</p>

        <form className="w-full max-w-lg">
          <div className="flex flex-col space-y-8">
            <label
              htmlFor="UserEmail"
              className="relative block overflow-hidden border-b border-gray-400 bg-transparent pt-3 focus-within:border-blue-600"
            >
              <input
                type="email"
                id="UserEmail"
                placeholder="Email"
                className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
              />

              <span
                className="absolute start-0 top-2 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs"
              >
                Email
              </span>
            </label>

            <label
              htmlFor="UserName"
              className="relative block overflow-hidden border-b border-gray-400 bg-transparent pt-3 focus-within:border-blue-600"
            >
              <input
                type="text"
                id="UserName"
                placeholder="Name"
                className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
              />

              <span
                className="absolute start-0 top-2 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs"
              >
                Name
              </span>
            </label>
          </div>

          <button className="group relative inline-block focus:outline-none focus:ring mt-8" href="/">
            <span
              className="absolute inset-0 translate-x-1.5 translate-y-1.5 bg-yellow-300 transition-transform group-hover:translate-x-0 group-hover:translate-y-0"
            ></span>

            <span
              className="relative inline-block border-2 border-current px-8 py-3 text-sm font-bold uppercase tracking-widest text-black group-active:text-opacity-75"
            >
              Contact
            </span>
          </button>
        </form>
      </div>
    </div>
  )
}

export default Contact;