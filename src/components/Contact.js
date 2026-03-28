import React from 'react'

const Contact = () => {
  return (
    <div className='min-h-screen flex flex-col justify-center items-center bg-background px-4 py-16'>
      <div className="bg-white p-8 sm:p-12 border border-neutral/20 shadow-2xl rounded-3xl flex flex-col justify-center items-center text-center space-y-4 w-full max-w-2xl cursor-default transition-all duration-300 hover:shadow-xl mt-10">
        <h1 className="font-display font-bold text-primary text-2xl lg:text-4xl">Let's Work Together</h1>

        <p className='mx-auto max-w-3xl text-primary text-md'>Am open to new and ongoing projects. I have three days open in the coming week for new projects. Leave your details for a response.</p>

        <form className="w-full">
          <div className="flex flex-col space-y-4">
            <label
              htmlFor="UserName"
              className="relative block overflow-hidden border-b border-neutral focus-within:border-accent bg-transparent pt-3 transition-colors duration-300 text-left"
            >
              <input
                type="text"
                id="UserName"
                placeholder="Name"
                className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
              />

              <span
                className="absolute start-0 top-2 -translate-y-1/2 text-xs text-secondary transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs peer-focus:text-accent font-medium uppercase"
              >
                Name
              </span>
            </label>

            <label
              htmlFor="UserEmail"
              className="relative block overflow-hidden border-b border-neutral focus-within:border-accent bg-transparent pt-3 transition-colors duration-300 text-left"
            >
              <input
                type="email"
                id="UserEmail"
                placeholder="Email"
                className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
              />

              <span
                className="absolute start-0 top-2 -translate-y-1/2 text-xs text-secondary transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs peer-focus:text-accent font-medium uppercase"
              >
                Email
              </span>
            </label>

            <label
              htmlFor="UserMessage"
              className="relative block overflow-hidden border-b border-neutral focus-within:border-accent bg-transparent pt-3 transition-colors duration-300 text-left"
            >
              <textarea
                id="UserMessage"
                placeholder="Message"
                className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
              />

              <span
                className="absolute start-0 top-2 -translate-y-1/2 text-xs text-secondary transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs peer-focus:text-accent font-medium uppercase"
              >
                Message
              </span>
            </label>
          </div>

          <button type="button" className="group relative inline-flex items-center justify-center focus:outline-none focus:ring mt-10 w-full sm:w-auto">
            <span
              className="absolute inset-0 translate-x-1.5 translate-y-1.5 bg-accent transition-transform group-hover:translate-x-0 group-hover:translate-y-0 rounded"
            ></span>

            <span
              className="relative inline-block border-2 border-primary bg-white px-8 py-3 text-sm font-bold uppercase tracking-widest text-primary group-active:text-opacity-75 rounded transition-colors group-hover:bg-primary group-hover:text-white"
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