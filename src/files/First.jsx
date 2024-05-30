import Footer from './Footer.jsx'

function First() {

    return(
        <>

        <div className="first-container">
        <div className="mx-auto text-center lg:mx-0 lg:flex-auto lg:py-10 lg:text-left main-writing">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Contribute to the world.
              <br/>
              Start your journey here.
            </h2>
            </div>
            <img src = "./public/lang.jpeg" className="main-img" alt = "lang"/>
        <p className="mt-1 text-lg leading-8 text-gray-300 main-context">
        We believe open source solves real-world problems for everyone.<br/>Open Source House supports open source innovation, collaboration,<br/>and sustainability through our community.
      </p>
      <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start main-btn">
        <a href="/register" className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
            Get started
        </a>
            </div>
            </div>

      <Footer/>
      </>
    );
}

export default First;