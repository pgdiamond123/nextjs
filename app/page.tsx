'use client';

import Image from 'next/image';
import { Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

export default function Home() {
  return (
    <div className='relative min-h-screen overflow-hidden'>
      <div className='absolute top-0 right-0 -translate-y-1/3 translate-x-1/3'>
        <div className='w-[80vw] h-[80vw] md:w-[60vw] md:h-[60vw] lg:w-[50vw] lg:h-[50vw] rounded-full border border-red-500/20'>
          <div className='w-full h-full rounded-full border border-red-500/20 p-4'>
            <div className='w-full h-full rounded-full border border-red-500/20 p-4'>
              <div className='w-full h-full rounded-full border border-red-500/20 p-4'></div>
            </div>
          </div>
        </div>
      </div>
      <div className='absolute bottom-1/4 left-1/2 w-4 h-4 bg-red-500 rounded-full opacity-50'></div>
      <div className='absolute bottom-8 right-8 z-20'>
        <button className='w-12 h-12 rounded-full bg-slate-300 dark:bg-slate-700 text-slate-600 dark:text-slate-300 flex items-center justify-center hover:bg-slate-400 dark:hover:bg-slate-600 transition-colors'>
          <span className='material-symbols-outlined'>arrow_upward</span>
        </button>
      </div>
      <div className='relative z-10'>
        <header className='py-3 px-4 sm:px-6 lg:px-8 relative bg-white z-50 shadow-sm'>
          {/* 
     IMPORTANT: This inner div is usually "relative", but we keep it "static" (default) 
     so that the dropdowns position themselves based on the <header> (which is full width).
  */}
          <div className='max-w-7xl mx-auto flex justify-between items-center static'>
            {/* Logo */}
            <div className='flex items-center space-x-2'>
              <span className='font-extrabold text-2xl text-slate-900 dark:text-white'>
                orient
              </span>
              <div className='w-4 h-4 bg-red-500 rounded-full'></div>
            </div>

            {/* Navigation */}
            <nav className='hidden lg:flex items-center space-x-8'>
              {/* 
         1. SERVICES (MEGA MENU EXAMPLE) 
         Note: "static" class ensures the absolute child uses the Header as reference, not this div.
      */}
              <div className='group static'>
                <button className='flex items-center space-x-1 py-4 text-slate-600 dark:text-slate-300 hover:text-red-500 dark:hover:text-red-500 transition-colors'>
                  <span>Services</span>
                  <span className='material-symbols-outlined text-base group-hover:rotate-180 transition-transform duration-300'>
                    expand_more
                  </span>
                </button>

                {/* Full Width Dropdown Wrapper */}
                <div className='absolute top-full left-0 w-full opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-2 border-t border-gray-100 dark:border-slate-700 bg-white dark:bg-slate-800 shadow-xl'>
                  {/* Inner Container to align content with your page width */}
                  <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8'>
                    <div className='grid grid-cols-3 gap-8'>
                      {/* Column 1 */}
                      <div>
                        <h3 className='font-bold text-slate-900 dark:text-white mb-4 text-lg'>
                          Software Development
                        </h3>
                        <ul className='space-y-3'>
                          <li>
                            <a
                              href='#'
                              className='text-slate-600 dark:text-slate-400 hover:text-red-500 block'
                            >
                              Custom Software
                            </a>
                          </li>
                          <li>
                            <a
                              href='#'
                              className='text-slate-600 dark:text-slate-400 hover:text-red-500 block'
                            >
                              Web App Development
                            </a>
                          </li>
                          <li>
                            <a
                              href='#'
                              className='text-slate-600 dark:text-slate-400 hover:text-red-500 block'
                            >
                              Mobile App Development
                            </a>
                          </li>
                        </ul>
                      </div>
                      {/* Column 2 */}
                      <div>
                        <h3 className='font-bold text-slate-900 dark:text-white mb-4 text-lg'>
                          Emerging Tech
                        </h3>
                        <ul className='space-y-3'>
                          <li>
                            <a
                              href='#'
                              className='text-slate-600 dark:text-slate-400 hover:text-red-500 block'
                            >
                              Artificial Intelligence
                            </a>
                          </li>
                          <li>
                            <a
                              href='#'
                              className='text-slate-600 dark:text-slate-400 hover:text-red-500 block'
                            >
                              Internet of Things (IoT)
                            </a>
                          </li>
                          <li>
                            <a
                              href='#'
                              className='text-slate-600 dark:text-slate-400 hover:text-red-500 block'
                            >
                              Blockchain
                            </a>
                          </li>
                        </ul>
                      </div>
                      {/* Column 3 - Featured */}
                      <div className='bg-slate-50 dark:bg-slate-700 p-6 rounded-lg'>
                        <h3 className='font-bold text-red-500 mb-2'>
                          Featured Case Study
                        </h3>
                        <p className='text-sm text-slate-600 dark:text-slate-300 mb-4'>
                          How we helped a fintech startup scale to 1M users.
                        </p>
                        <a
                          href='#'
                          className='text-sm font-semibold underline hover:text-red-500'
                        >
                          Read story &rarr;
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* 2. COMPANY (FULL WIDTH) */}
              <div className='group static'>
                <button className='flex items-center space-x-1 py-4 text-slate-600 dark:text-slate-300 hover:text-red-500 dark:hover:text-red-500 transition-colors'>
                  <span>Company</span>
                  <span className='material-symbols-outlined text-base group-hover:rotate-180 transition-transform duration-300'>
                    expand_more
                  </span>
                </button>

                <div className='absolute top-full left-0 w-full opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-2 border-t border-gray-100 dark:border-slate-700 bg-white dark:bg-slate-800 shadow-xl'>
                  <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6'>
                    <div className='flex space-x-12'>
                      <a href='#' className='group/item'>
                        <div className='font-semibold text-slate-900 dark:text-white group-hover/item:text-red-500'>
                          About Us
                        </div>
                        <div className='text-sm text-slate-500'>
                          Our story and values
                        </div>
                      </a>
                      <a href='#' className='group/item'>
                        <div className='font-semibold text-slate-900 dark:text-white group-hover/item:text-red-500'>
                          Leadership
                        </div>
                        <div className='text-sm text-slate-500'>
                          Meet the team
                        </div>
                      </a>
                      <a href='#' className='group/item'>
                        <div className='font-semibold text-slate-900 dark:text-white group-hover/item:text-red-500'>
                          Awards
                        </div>
                        <div className='text-sm text-slate-500'>
                          Our achievements
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* 3. CAREERS (FULL WIDTH) */}
              <div className='group static'>
                <button className='flex items-center space-x-1 py-4 text-slate-600 dark:text-slate-300 hover:text-red-500 dark:hover:text-red-500 transition-colors'>
                  <span>Careers</span>
                  {/* Arrow added for consistency */}
                  <span className='material-symbols-outlined text-base group-hover:rotate-180 transition-transform duration-300'>
                    expand_more
                  </span>
                </button>

                <div className='absolute top-full left-0 w-full opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-2 border-t border-gray-100 dark:border-slate-700 bg-white dark:bg-slate-800 shadow-xl'>
                  <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6'>
                    {/* Simple grid list for careers */}
                    <div className='grid grid-cols-4 gap-4'>
                      <a
                        className='block p-3 rounded hover:bg-slate-50 dark:hover:bg-slate-700'
                        href='#'
                      >
                        <div className='font-semibold text-slate-900 dark:text-white hover:text-red-500'>
                          Job Openings
                        </div>
                        <div className='text-xs text-slate-500 mt-1'>
                          Join our team
                        </div>
                      </a>
                      <a
                        className='block p-3 rounded hover:bg-slate-50 dark:hover:bg-slate-700'
                        href='#'
                      >
                        <div className='font-semibold text-slate-900 dark:text-white hover:text-red-500'>
                          Life at Orient
                        </div>
                        <div className='text-xs text-slate-500 mt-1'>
                          Culture & Perks
                        </div>
                      </a>
                      <a
                        className='block p-3 rounded hover:bg-slate-50 dark:hover:bg-slate-700'
                        href='#'
                      >
                        <div className='font-semibold text-slate-900 dark:text-white hover:text-red-500'>
                          Internship
                        </div>
                        <div className='text-xs text-slate-500 mt-1'>
                          Start your career
                        </div>
                      </a>
                      <a
                        className='block p-3 rounded hover:bg-slate-50 dark:hover:bg-slate-700'
                        href='#'
                      >
                        <div className='font-semibold text-slate-900 dark:text-white hover:text-red-500'>
                          Career Path
                        </div>
                        <div className='text-xs text-slate-500 mt-1'>
                          Growth opportunities
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <button className='flex items-center space-x-1 py-4 text-slate-600 dark:text-slate-300 hover:text-red-500 dark:hover:text-red-500 transition-colors'>
                  <span>Blogs</span>
                </button>
              </div>
            </nav>

            {/* Right Actions */}
            <div className='hidden lg:flex items-center space-x-6'>
              <a
                className='bg-red-500 text-white px-5 py-2.5 rounded-full font-semibold text-sm hover:opacity-90 transition-opacity'
                href='#'
              >
                Get in touch
              </a>
              <div className='flex items-center space-x-3 text-sm'>
                <a className='font-bold text-red-500' href='#'>
                  ENG
                </a>
                <span className='text-slate-300 dark:text-slate-600'>|</span>
                <a
                  className='text-slate-500 dark:text-slate-400 hover:text-red-500 dark:hover:text-red-500 transition-colors'
                  href='#'
                >
                  日本語
                </a>
              </div>
            </div>

            {/* Mobile Menu Toggle */}
            <button className='lg:hidden text-slate-800 dark:text-slate-200'>
              <span className='material-symbols-outlined'>menu</span>
            </button>
          </div>
        </header>
        <main>
          <div className='py-16 sm:py-24 px-4 sm:px-6 lg:px-8'>
            <div className='max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center'>
              <div className='text-center lg:text-left'>
                <h1 className='text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white leading-tight'>
                  Top-Tier Software Development Company
                </h1>
                <p className='mt-6 text-sm font-bold tracking-widest text-red-500'>
                  POWERED BY TALENT. DRIVEN BY PASSION
                </p>
                <p className='mt-8 max-w-lg mx-auto lg:mx-0 text-lg text-slate-600 dark:text-slate-400'>
                  We deliver end-to-end software services—building world-class
                  solutions and empowering your projects with vetted tech
                  talent.
                </p>
                <div className='mt-10 flex justify-center lg:justify-start'>
                  <a
                    className='bg-red-500 text-white px-8 py-4 rounded-full font-bold flex items-center space-x-3 hover:opacity-90 transition-opacity'
                    href='#'
                  >
                    <span>Work with Us</span>
                    <span className='material-symbols-outlined'>
                      arrow_forward
                    </span>
                  </a>
                </div>
              </div>
              <div className='hidden lg:block relative h-full'>
                <div className='relative w-full aspect-4/4 max-w-md mx-auto'>
                  <Image
                    alt='A professional woman smiling while working on a laptop in a modern office.'
                    className='absolute inset-0 object-cover rounded-full z-10'
                    src='https://lh3.googleusercontent.com/aida-public/AB6AXuAsUroO2JUr_ZBK1S2riJ7I-dm8DhfmMLPkSbHs8Kx2wWkE5xngEoudszusi6ruQFMvei8jyEDOVvyQ1q7-nPGnywWItsQV7M-ElDxqdxcHumr3X6CosnN8MFeW1pZRmD_6ighfOvvFqFoWyhu8JS4OQr2v7U8D9MFJYy-Vgtvmpgd-bjAMCmTqE_HguXiF1nLQyY5nh1Ts1tnPqItWushhVbwiZtD9lCi-r-2TARU4FNZu5viqLZhXIJLGAqYcfT4kutRfZfa9XA'
                    fill
                  />
                </div>
              </div>
            </div>
          </div>
          <section className='py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-950'>
            <div className='max-w-7xl mx-auto'>
              <div className='text-center'>
                <h2 className='text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white'>
                  We are Orient Software
                </h2>
                <p className='mt-4 max-w-2xl mx-auto text-lg text-slate-600 dark:text-slate-400'>
                  We are a leading software development company, providing
                  high-quality solutions to businesses worldwide. Our team of
                  experts is dedicated to delivering excellence and innovation.
                </p>
              </div>
              <div className='mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>
                <div className='text-center p-6 border border-slate-200 dark:border-slate-800 rounded-lg'>
                  <p className='text-4xl font-extrabold text-red-500'>350+</p>
                  <p className='mt-2 text-slate-600 dark:text-slate-400'>
                    Skilled and Motivated Tech Staff
                  </p>
                </div>
                <div className='text-center p-6 border border-slate-200 dark:border-slate-800 rounded-lg'>
                  <p className='text-4xl font-extrabold text-red-500'>8</p>
                  <p className='mt-2 text-slate-600 dark:text-slate-400'>
                    Branch Offices Around the World
                  </p>
                </div>
                <div className='text-center p-6 border border-slate-200 dark:border-slate-800 rounded-lg'>
                  <p className='text-4xl font-extrabold text-red-500'>200+</p>
                  <p className='mt-2 text-slate-600 dark:text-slate-400'>
                    Successful Projects Delivered
                  </p>
                </div>
                <div className='text-center p-6 border border-slate-200 dark:border-slate-800 rounded-lg'>
                  <p className='text-4xl font-extrabold text-red-500'>100+</p>
                  <p className='mt-2 text-slate-600 dark:text-slate-400'>
                    Clients Worldwide
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section className='py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-background-dark text-slate-200'>
            <div className='max-w-7xl mx-auto'>
              <div className='grid grid-cols-1 lg:grid-cols-3 gap-12 items-center'>
                <div className='lg:col-span-1 text-center lg:text-left'>
                  <h2 className='text-3xl sm:text-4xl font-extrabold text-white'>
                    What We Offer
                  </h2>
                  <p className='mt-4 text-lg text-slate-400'>
                    Empower your projects with our vetted tech talent and
                    world-class software solutions.
                  </p>
                  <div className='mt-8'>
                    <a
                      className='inline-block bg-red-500 text-white px-8 py-4 rounded-full font-bold hover:opacity-90 transition-opacity'
                      href='#'
                    >
                      Upgrade your team now
                    </a>
                  </div>
                </div>
                <div className='lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8'>
                  <div className='group relative overflow-hidden rounded-lg'>
                    <Image
                      alt='A team collaborating on a project.'
                      className='w-full h-80 object-cover transform group-hover:scale-105 transition-transform duration-300'
                      src='https://lh3.googleusercontent.com/aida-public/AB6AXuBBpfuq8Sy8dbOqVhJjie0fDlgGqr2ckcqcO7pIDCmXsLnrGOfahHgYOvDoMT3nDQEAJ9i8aEPQBvqCVrPMyJfCs7LYrXQw6K0mAfoncnde8hs_8ym_1d9gGhyMF-kougPAk3QPK51xhgQ3XSsSWCgD51-Yr222cCCwMLs-NJJUudsCvxrt0fvtMf_TTitlipF_jHckStG6pZb4WDRQxW50SOkwfuezVC-juj42N8tkw3F_2NzbAX0Pl6PVJCkf1UYr05avzVvX0w'
                      width={402}
                      height={320}
                    />
                    <div className='absolute inset-0 bg-linear-to-t from-black/70 to-transparent'></div>
                    <div className='absolute bottom-0 left-0 p-6'>
                      <h3 className='text-2xl font-bold text-white'>
                        Delivery Team
                      </h3>
                      <a
                        className='inline-flex items-center text-white mt-2 group-hover:text-red-500 transition-colors'
                        href='#'
                      >
                        <span className='material-symbols-outlined bg-white text-black rounded-full p-1 text-base group-hover:bg-red-500 group-hover:text-white transition-colors'>
                          arrow_forward
                        </span>
                      </a>
                    </div>
                  </div>
                  <div className='group relative overflow-hidden rounded-lg'>
                    <Image
                      alt='A software developer focused on coding.'
                      className='w-full h-80 object-cover transform group-hover:scale-105 transition-transform duration-300'
                      src='https://lh3.googleusercontent.com/aida-public/AB6AXuBwlaaAetmjC2b_UlrVqoHzpNvgjcCA6kfEdmKUQsbw29MnJ2HZK53WF3xtbMKVG3aVour6ncVBHkqv57_3T09KtKDQgSNOt4TiBmGrXj7VMXneIihjBlYcNIxfaJrSFn4paBOmzdjxfmLbiQzSt9QCeB78VVx7CqQ8Z6cE4e2hIpIE_DrPNzi6ZoF9tZGBmnkdXPo-9Dw2k8DZ1pLdZ8MUUFvzc5DlPRBHAqy4LvzzQ_vtUJgwNyA6y4uuxhQopcw0o-137tqbYw'
                      width={402}
                      height={320}
                    />
                    <div className='absolute inset-0 bg-linear-to-t from-black/70 to-transparent'></div>
                    <div className='absolute bottom-0 left-0 p-6'>
                      <h3 className='text-2xl font-bold text-white'>
                        Extended Team
                      </h3>
                      <a
                        className='inline-flex items-center text-white mt-2 group-hover:text-red-500 transition-colors'
                        href='#'
                      >
                        <span className='material-symbols-outlined bg-white text-black rounded-full p-1 text-base group-hover:bg-red-500 group-hover:text-white transition-colors'>
                          arrow_forward
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className='py-16 sm:py-24 px-4 sm:px-6 lg:px-8'>
            <div className='max-w-7xl mx-auto text-center'>
              <h2 className='text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white'>
                What We Do
              </h2>
              <p className='mt-4 max-w-2xl mx-auto text-lg text-slate-600 dark:text-slate-400'>
                We offer a full spectrum of software services to bring your
                vision to life.
              </p>
              <div className='mt-8'>
                <a
                  className='inline-block bg-red-500 text-white px-8 py-4 rounded-full font-bold hover:opacity-90 transition-opacity'
                  href='#'
                >
                  Connect with our expert
                </a>
              </div>
              <div className='mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-left'>
                <div className='bg-white dark:bg-slate-900 p-6 rounded-lg border border-slate-200 dark:border-slate-800'>
                  <span className='material-symbols-outlined text-4xl text-red-500'>
                    code_blocks
                  </span>
                  <h3 className='mt-4 text-xl font-bold text-slate-900 dark:text-white'>
                    Custom Software Development
                  </h3>
                  <p className='mt-2 text-slate-600 dark:text-slate-400'>
                    Tailored solutions to meet your specific business needs.
                  </p>
                </div>
                <div className='bg-white dark:bg-slate-900 p-6 rounded-lg border border-slate-200 dark:border-slate-800'>
                  <span className='material-symbols-outlined text-4xl text-red-500'>
                    smart_toy
                  </span>
                  <h3 className='mt-4 text-xl font-bold text-slate-900 dark:text-white'>
                    AI Development
                  </h3>
                  <p className='mt-2 text-slate-600 dark:text-slate-400'>
                    Leverage the power of artificial intelligence for your
                    business.
                  </p>
                </div>
                <div className='bg-white dark:bg-slate-900 p-6 rounded-lg border border-slate-200 dark:border-slate-800'>
                  <span className='material-symbols-outlined text-4xl text-red-500'>
                    task_alt
                  </span>
                  <h3 className='mt-4 text-xl font-bold text-slate-900 dark:text-white'>
                    QA and Testing
                  </h3>
                  <p className='mt-2 text-slate-600 dark:text-slate-400'>
                    Ensuring your software is reliable, secure, and
                    user-friendly.
                  </p>
                </div>
                <div className='bg-white dark:bg-slate-900 p-6 rounded-lg border border-slate-200 dark:border-slate-800'>
                  <span className='material-symbols-outlined text-4xl text-red-500'>
                    design_services
                  </span>
                  <h3 className='mt-4 text-xl font-bold text-slate-900 dark:text-white'>
                    UX/UI Design
                  </h3>
                  <p className='mt-2 text-slate-600 dark:text-slate-400'>
                    Creating intuitive and engaging user experiences.
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section className='py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-950'>
            <div className='max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start'>
              <div>
                <h2 className='text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white'>
                  Why Choose Us
                </h2>
                <p className='mt-4 text-lg text-slate-600 dark:text-slate-400'>
                  We are more than just a software company. We are your
                  technology partner, committed to your success. Our proven
                  track record, elite talent, and client-centric approach set us
                  apart.
                </p>
                <div className='mt-8'>
                  <a
                    className='inline-block bg-red-500 text-white px-8 py-4 rounded-full font-bold hover:opacity-90 transition-opacity'
                    href='#'
                  >
                    Get Started Now
                  </a>
                </div>
              </div>
              <div className='space-y-6'>
                <div className='flex items-start'>
                  <div className='shrink-0 text-red-500 font-extrabold text-2xl mr-4'>
                    01
                  </div>
                  <p className='text-slate-600 dark:text-slate-300'>
                    <strong className='text-slate-800 dark:text-white'>
                      96% Satisfaction and 95% Repeat Business
                    </strong>
                  </p>
                </div>
                <div className='flex items-start'>
                  <div className='shrink-0 text-red-500 font-extrabold text-2xl mr-4'>
                    02
                  </div>
                  <p className='text-slate-600 dark:text-slate-300'>
                    <strong className='text-slate-800 dark:text-white'>
                      A History of Over 20 Years in the Tech Industry
                    </strong>
                  </p>
                </div>
                <div className='flex items-start'>
                  <div className='shrink-0 text-red-500 font-extrabold text-2xl mr-4'>
                    03
                  </div>
                  <p className='text-slate-600 dark:text-slate-300'>
                    <strong className='text-slate-800 dark:text-white'>
                      A Full Spectrum of Services &amp; Solutions
                    </strong>
                  </p>
                </div>
                <div className='flex items-start'>
                  <div className='shrink-0 text-red-500 font-extrabold text-2xl mr-4'>
                    04
                  </div>
                  <p className='text-slate-600 dark:text-slate-300'>
                    <strong className='text-slate-800 dark:text-white'>
                      Transparent &amp; Time-Tested Development Processes
                    </strong>
                  </p>
                </div>
                <div className='flex items-start'>
                  <div className='shrink-0 text-red-500 font-extrabold text-2xl mr-4'>
                    05
                  </div>
                  <p className='text-slate-600 dark:text-slate-300'>
                    <strong className='text-slate-800 dark:text-white'>
                      Over 350 Elite Talent
                    </strong>
                  </p>
                </div>
                <div className='flex items-start'>
                  <div className='shrink-0 text-red-500 font-extrabold text-2xl mr-4'>
                    06
                  </div>
                  <p className='text-slate-600 dark:text-slate-300'>
                    <strong className='text-slate-800 dark:text-white'>
                      ISO-9001 and ISO-27001 Certified Company
                    </strong>
                  </p>
                </div>
                <div className='flex items-start'>
                  <div className='shrink-0 text-red-500 font-extrabold text-2xl mr-4'>
                    07
                  </div>
                  <p className='text-slate-600 dark:text-slate-300'>
                    <strong className='text-slate-800 dark:text-white'>
                      Seamless Communication and Collaboration with Clients
                    </strong>
                  </p>
                </div>
                <div className='flex items-start'>
                  <div className='shrink-0 text-red-500 font-extrabold text-2xl mr-4'>
                    08
                  </div>
                  <p className='text-slate-600 dark:text-slate-300'>
                    <strong className='text-slate-800 dark:text-white'>
                      Commitment to Quality &amp; Result-Oriented Approach
                    </strong>
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section className='py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-background-dark text-slate-200'>
            <div className='max-w-7xl mx-auto text-center'>
              <h2 className='text-3xl sm:text-4xl font-extrabold text-white'>
                Excellence Through Certification
              </h2>
              <p className='mt-4 max-w-3xl mx-auto text-lg text-slate-400'>
                Our certifications and partnerships reflect our commitment to
                quality, security, and continuous improvement, ensuring we
                deliver the best solutions for our clients.
              </p>
              <div className='mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>
                <div className='bg-slate-800 p-6 rounded-lg'>
                  <h3 className='font-bold text-white text-lg'>
                    Microsoft Partner Designations
                  </h3>
                </div>
                <div className='bg-slate-800 p-6 rounded-lg'>
                  <h3 className='font-bold text-white text-lg'>
                    Cloud &amp; DevOps Certifications
                  </h3>
                </div>
                <div className='bg-slate-800 p-6 rounded-lg'>
                  <h3 className='font-bold text-white text-lg'>
                    Project Management &amp; Agile
                  </h3>
                </div>
                <div className='bg-slate-800 p-6 rounded-lg'>
                  <h3 className='font-bold text-white text-lg'>
                    Quality Assurance &amp; Compliance
                  </h3>
                </div>
              </div>
              <div className='mt-12'>
                <a
                  className='inline-block bg-red-500 text-white px-8 py-4 rounded-full font-bold hover:opacity-90 transition-opacity'
                  href='#'
                >
                  See projects we have done
                </a>
              </div>
            </div>
          </section>
          <section className='py-16 sm:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden'>
            <div className='max-w-7xl mx-auto'>
              <div className='text-center'>
                <h2 className='text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white'>
                  What Our Clients Say
                </h2>
                <p className='mt-4 max-w-2xl mx-auto text-lg text-slate-600 dark:text-slate-400'>
                  Our clients&apos; success stories are the best testament to
                  our work.
                </p>
              </div>
              <div className='mt-12 relative'>
                <Swiper
                  slidesPerView={1}
                  grabCursor={true}
                  spaceBetween={20}
                  slidesOffsetAfter={60}
                  pagination={{
                    clickable: true,
                  }}
                  breakpoints={{
                    640: {
                      slidesPerView: 1,
                      spaceBetween: 20,
                      slidesOffsetBefore: 80,
                      slidesOffsetAfter: 80,
                    },
                    768: {
                      slidesPerView: 2,
                      spaceBetween: 20,
                      slidesOffsetBefore: 80,
                      slidesOffsetAfter: 80,
                    },
                    1024: {
                      slidesPerView: 3,
                      spaceBetween: 30,
                      slidesOffsetBefore: 80,
                      slidesOffsetAfter: 80,
                    },
                  }}
                  modules={[Pagination]}
                >
                  <SwiperSlide>
                    <div className=''>
                      <div className='bg-white dark:bg-slate-900 p-8 rounded-lg border border-slate-200 dark:border-slate-800 h-full flex flex-col'>
                        <p className='text-slate-600 dark:text-slate-400 grow'>
                          &quot;Orient Software delivered a robust and scalable
                          solution that exceeded our expectations. Their team
                          was professional, responsive, and a pleasure to work
                          with.&quot;
                        </p>
                        <div className='mt-6 flex items-center'>
                          <Image
                            alt='Client photo'
                            className='rounded-full'
                            src='https://lh3.googleusercontent.com/aida-public/AB6AXuBaYGYF5MQMMGSk66ss6-_D8qaIxpH7ayJ-FRBWLBjiWsa5j2XAap8dNvZAnS01yd_kV4CzjIKjkaNf3ZS50m_IEryb0F8RStylX5ydr1a7r1ohBjRATjdzHNQnG5dI6BIaSZ4CU6Cj4EMYH0amc9q55mEkev0Y_mkdziO63GOYMyakQuL0PMMO4qcOMD_mhN-yc5nsqQYFPqY5TEQ8Oc74chuviHIWYfZWlreMpwe5oRBJIszsv8uLbh_MoKJzZfOCI6b3LZ_-VQ'
                            width={48}
                            height={48}
                          />
                          <div className='ml-4'>
                            <p className='font-bold text-slate-900 dark:text-white'>
                              Jane Doe
                            </p>
                            <p className='text-sm text-slate-500 dark:text-slate-400'>
                              CEO, Tech Innovators
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className=''>
                      <div className='bg-white dark:bg-slate-900 p-8 rounded-lg border border-slate-200 dark:border-slate-800 h-full flex flex-col'>
                        <p className='text-slate-600 dark:text-slate-400 grow'>
                          &quot;Orient Software delivered a robust and scalable
                          solution that exceeded our expectations. Their team
                          was professional, responsive, and a pleasure to work
                          with.&quot;
                        </p>
                        <div className='mt-6 flex items-center'>
                          <Image
                            alt='Client photo'
                            className='rounded-full'
                            src='https://lh3.googleusercontent.com/aida-public/AB6AXuBaYGYF5MQMMGSk66ss6-_D8qaIxpH7ayJ-FRBWLBjiWsa5j2XAap8dNvZAnS01yd_kV4CzjIKjkaNf3ZS50m_IEryb0F8RStylX5ydr1a7r1ohBjRATjdzHNQnG5dI6BIaSZ4CU6Cj4EMYH0amc9q55mEkev0Y_mkdziO63GOYMyakQuL0PMMO4qcOMD_mhN-yc5nsqQYFPqY5TEQ8Oc74chuviHIWYfZWlreMpwe5oRBJIszsv8uLbh_MoKJzZfOCI6b3LZ_-VQ'
                            width={48}
                            height={48}
                          />
                          <div className='ml-4'>
                            <p className='font-bold text-slate-900 dark:text-white'>
                              Jane Doe
                            </p>
                            <p className='text-sm text-slate-500 dark:text-slate-400'>
                              CEO, Tech Innovators
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className=''>
                      <div className='bg-white dark:bg-slate-900 p-8 rounded-lg border border-slate-200 dark:border-slate-800 h-full flex flex-col'>
                        <p className='text-slate-600 dark:text-slate-400 grow'>
                          &quot;Orient Software delivered a robust and scalable
                          solution that exceeded our expectations. Their team
                          was professional, responsive, and a pleasure to work
                          with.&quot;
                        </p>
                        <div className='mt-6 flex items-center'>
                          <Image
                            alt='Client photo'
                            className='rounded-full'
                            src='https://lh3.googleusercontent.com/aida-public/AB6AXuBaYGYF5MQMMGSk66ss6-_D8qaIxpH7ayJ-FRBWLBjiWsa5j2XAap8dNvZAnS01yd_kV4CzjIKjkaNf3ZS50m_IEryb0F8RStylX5ydr1a7r1ohBjRATjdzHNQnG5dI6BIaSZ4CU6Cj4EMYH0amc9q55mEkev0Y_mkdziO63GOYMyakQuL0PMMO4qcOMD_mhN-yc5nsqQYFPqY5TEQ8Oc74chuviHIWYfZWlreMpwe5oRBJIszsv8uLbh_MoKJzZfOCI6b3LZ_-VQ'
                            width={48}
                            height={48}
                          />
                          <div className='ml-4'>
                            <p className='font-bold text-slate-900 dark:text-white'>
                              Jane Doe
                            </p>
                            <p className='text-sm text-slate-500 dark:text-slate-400'>
                              CEO, Tech Innovators
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className=''>
                      <div className='bg-white dark:bg-slate-900 p-8 rounded-lg border border-slate-200 dark:border-slate-800 h-full flex flex-col'>
                        <p className='text-slate-600 dark:text-slate-400 grow'>
                          &quot;Orient Software delivered a robust and scalable
                          solution that exceeded our expectations. Their team
                          was professional, responsive, and a pleasure to work
                          with.&quot;
                        </p>
                        <div className='mt-6 flex items-center'>
                          <Image
                            alt='Client photo'
                            className='rounded-full'
                            src='https://lh3.googleusercontent.com/aida-public/AB6AXuBaYGYF5MQMMGSk66ss6-_D8qaIxpH7ayJ-FRBWLBjiWsa5j2XAap8dNvZAnS01yd_kV4CzjIKjkaNf3ZS50m_IEryb0F8RStylX5ydr1a7r1ohBjRATjdzHNQnG5dI6BIaSZ4CU6Cj4EMYH0amc9q55mEkev0Y_mkdziO63GOYMyakQuL0PMMO4qcOMD_mhN-yc5nsqQYFPqY5TEQ8Oc74chuviHIWYfZWlreMpwe5oRBJIszsv8uLbh_MoKJzZfOCI6b3LZ_-VQ'
                            width={48}
                            height={48}
                          />
                          <div className='ml-4'>
                            <p className='font-bold text-slate-900 dark:text-white'>
                              Jane Doe
                            </p>
                            <p className='text-sm text-slate-500 dark:text-slate-400'>
                              CEO, Tech Innovators
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className=''>
                      <div className='bg-white dark:bg-slate-900 p-8 rounded-lg border border-slate-200 dark:border-slate-800 h-full flex flex-col'>
                        <p className='text-slate-600 dark:text-slate-400 grow'>
                          &quot;Orient Software delivered a robust and scalable
                          solution that exceeded our expectations. Their team
                          was professional, responsive, and a pleasure to work
                          with.&quot;
                        </p>
                        <div className='mt-6 flex items-center'>
                          <Image
                            alt='Client photo'
                            className='rounded-full'
                            src='https://lh3.googleusercontent.com/aida-public/AB6AXuBaYGYF5MQMMGSk66ss6-_D8qaIxpH7ayJ-FRBWLBjiWsa5j2XAap8dNvZAnS01yd_kV4CzjIKjkaNf3ZS50m_IEryb0F8RStylX5ydr1a7r1ohBjRATjdzHNQnG5dI6BIaSZ4CU6Cj4EMYH0amc9q55mEkev0Y_mkdziO63GOYMyakQuL0PMMO4qcOMD_mhN-yc5nsqQYFPqY5TEQ8Oc74chuviHIWYfZWlreMpwe5oRBJIszsv8uLbh_MoKJzZfOCI6b3LZ_-VQ'
                            width={48}
                            height={48}
                          />
                          <div className='ml-4'>
                            <p className='font-bold text-slate-900 dark:text-white'>
                              Jane Doe
                            </p>
                            <p className='text-sm text-slate-500 dark:text-slate-400'>
                              CEO, Tech Innovators
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className=''>
                      <div className='bg-white dark:bg-slate-900 p-8 rounded-lg border border-slate-200 dark:border-slate-800 h-full flex flex-col'>
                        <p className='text-slate-600 dark:text-slate-400 grow'>
                          &quot;Orient Software delivered a robust and scalable
                          solution that exceeded our expectations. Their team
                          was professional, responsive, and a pleasure to work
                          with.&quot;
                        </p>
                        <div className='mt-6 flex items-center'>
                          <Image
                            alt='Client photo'
                            className='rounded-full'
                            src='https://lh3.googleusercontent.com/aida-public/AB6AXuBaYGYF5MQMMGSk66ss6-_D8qaIxpH7ayJ-FRBWLBjiWsa5j2XAap8dNvZAnS01yd_kV4CzjIKjkaNf3ZS50m_IEryb0F8RStylX5ydr1a7r1ohBjRATjdzHNQnG5dI6BIaSZ4CU6Cj4EMYH0amc9q55mEkev0Y_mkdziO63GOYMyakQuL0PMMO4qcOMD_mhN-yc5nsqQYFPqY5TEQ8Oc74chuviHIWYfZWlreMpwe5oRBJIszsv8uLbh_MoKJzZfOCI6b3LZ_-VQ'
                            width={48}
                            height={48}
                          />
                          <div className='ml-4'>
                            <p className='font-bold text-slate-900 dark:text-white'>
                              Jane Doe
                            </p>
                            <p className='text-sm text-slate-500 dark:text-slate-400'>
                              CEO, Tech Innovators
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className=''>
                      <div className='bg-white dark:bg-slate-900 p-8 rounded-lg border border-slate-200 dark:border-slate-800 h-full flex flex-col'>
                        <p className='text-slate-600 dark:text-slate-400 grow'>
                          &quot;Orient Software delivered a robust and scalable
                          solution that exceeded our expectations. Their team
                          was professional, responsive, and a pleasure to work
                          with.&quot;
                        </p>
                        <div className='mt-6 flex items-center'>
                          <Image
                            alt='Client photo'
                            className='rounded-full'
                            src='https://lh3.googleusercontent.com/aida-public/AB6AXuBaYGYF5MQMMGSk66ss6-_D8qaIxpH7ayJ-FRBWLBjiWsa5j2XAap8dNvZAnS01yd_kV4CzjIKjkaNf3ZS50m_IEryb0F8RStylX5ydr1a7r1ohBjRATjdzHNQnG5dI6BIaSZ4CU6Cj4EMYH0amc9q55mEkev0Y_mkdziO63GOYMyakQuL0PMMO4qcOMD_mhN-yc5nsqQYFPqY5TEQ8Oc74chuviHIWYfZWlreMpwe5oRBJIszsv8uLbh_MoKJzZfOCI6b3LZ_-VQ'
                            width={48}
                            height={48}
                          />
                          <div className='ml-4'>
                            <p className='font-bold text-slate-900 dark:text-white'>
                              Jane Doe
                            </p>
                            <p className='text-sm text-slate-500 dark:text-slate-400'>
                              CEO, Tech Innovators
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className=''>
                      <div className='bg-white dark:bg-slate-900 p-8 rounded-lg border border-slate-200 dark:border-slate-800 h-full flex flex-col'>
                        <p className='text-slate-600 dark:text-slate-400 grow'>
                          &quot;Orient Software delivered a robust and scalable
                          solution that exceeded our expectations. Their team
                          was professional, responsive, and a pleasure to work
                          with.&quot;
                        </p>
                        <div className='mt-6 flex items-center'>
                          <Image
                            alt='Client photo'
                            className='rounded-full'
                            src='https://lh3.googleusercontent.com/aida-public/AB6AXuBaYGYF5MQMMGSk66ss6-_D8qaIxpH7ayJ-FRBWLBjiWsa5j2XAap8dNvZAnS01yd_kV4CzjIKjkaNf3ZS50m_IEryb0F8RStylX5ydr1a7r1ohBjRATjdzHNQnG5dI6BIaSZ4CU6Cj4EMYH0amc9q55mEkev0Y_mkdziO63GOYMyakQuL0PMMO4qcOMD_mhN-yc5nsqQYFPqY5TEQ8Oc74chuviHIWYfZWlreMpwe5oRBJIszsv8uLbh_MoKJzZfOCI6b3LZ_-VQ'
                            width={48}
                            height={48}
                          />
                          <div className='ml-4'>
                            <p className='font-bold text-slate-900 dark:text-white'>
                              Jane Doe
                            </p>
                            <p className='text-sm text-slate-500 dark:text-slate-400'>
                              CEO, Tech Innovators
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </section>
          <section className='py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-950'>
            <Swiper
              loop={true}
              slidesPerView={3}
              grabCursor={true}
              spaceBetween={20}
              autoplay={{
                delay: 0,
                disableOnInteraction: false,
              }}
              speed={1500}
              breakpoints={{
                768: {
                  slidesPerView: 4,
                },
                1024: {
                  slidesPerView: 7,
                },
              }}
              style={{ transitionTimingFunction: 'linear' }}
              modules={[Autoplay]}
              className='mb-10'
            >
              <SwiperSlide>
                <Image
                  alt='company photo'
                  src='https://www.orientsoftware.com/Themes/Content/Images/home/logo-pumptap.webp'
                  width={100}
                  height={50}
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  alt='company photo'
                  src='https://www.orientsoftware.com/Themes/Content/Images/home/logo-rencore.webp'
                  width={100}
                  height={50}
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  alt='company photo'
                  src='https://www.orientsoftware.com/Themes/Content/Images/home/logo-trustana.webp'
                  width={100}
                  height={50}
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  alt='company photo'
                  src='https://www.orientsoftware.com/Themes/Content/Images/home/logo-fishwell.webp'
                  width={100}
                  height={50}
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  alt='company photo'
                  src='https://www.orientsoftware.com/Themes/Content/Images/home/logo-xeppo.webp'
                  width={100}
                  height={50}
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  alt='company photo'
                  src='https://www.orientsoftware.com/Themes/Content/Images/home/logo-espos.webp'
                  width={100}
                  height={50}
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  alt='company photo'
                  src='https://www.orientsoftware.com/Themes/Content/Images/home/logo-plenti.webp'
                  width={100}
                  height={50}
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  alt='company photo'
                  src='https://www.orientsoftware.com/Themes/Content/Images/home/logo-ntuc.webp'
                  width={100}
                  height={50}
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  alt='company photo'
                  src='https://www.orientsoftware.com/Themes/Content/Images/home/logo-incloud.webp'
                  width={100}
                  height={50}
                />
              </SwiperSlide>
            </Swiper>
            <Swiper
              loop={true}
              slidesPerView={3}
              grabCursor={true}
              spaceBetween={20}
              autoplay={{
                delay: 0,
                disableOnInteraction: false,
                reverseDirection: true,
              }}
              speed={1500}
              breakpoints={{
                768: {
                  slidesPerView: 4,
                },
                1024: {
                  slidesPerView: 7,
                },
              }}
              style={{ transitionTimingFunction: 'linear' }}
              modules={[Autoplay]}
            >
              <SwiperSlide>
                <Image
                  alt='company photo'
                  src='https://www.orientsoftware.com/Themes/Content/Images/home/logo-pumptap.webp'
                  width={100}
                  height={50}
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  alt='company photo'
                  src='https://www.orientsoftware.com/Themes/Content/Images/home/logo-rencore.webp'
                  width={100}
                  height={50}
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  alt='company photo'
                  src='https://www.orientsoftware.com/Themes/Content/Images/home/logo-trustana.webp'
                  width={100}
                  height={50}
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  alt='company photo'
                  src='https://www.orientsoftware.com/Themes/Content/Images/home/logo-fishwell.webp'
                  width={100}
                  height={50}
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  alt='company photo'
                  src='https://www.orientsoftware.com/Themes/Content/Images/home/logo-xeppo.webp'
                  width={100}
                  height={50}
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  alt='company photo'
                  src='https://www.orientsoftware.com/Themes/Content/Images/home/logo-espos.webp'
                  width={100}
                  height={50}
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  alt='company photo'
                  src='https://www.orientsoftware.com/Themes/Content/Images/home/logo-plenti.webp'
                  width={100}
                  height={50}
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  alt='company photo'
                  src='https://www.orientsoftware.com/Themes/Content/Images/home/logo-ntuc.webp'
                  width={100}
                  height={50}
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  alt='company photo'
                  src='https://www.orientsoftware.com/Themes/Content/Images/home/logo-incloud.webp'
                  width={100}
                  height={50}
                />
              </SwiperSlide>
            </Swiper>
          </section>
          <section className='py-16 sm:py-24 px-4 sm:px-6 lg:px-8'>
            <div className='max-w-7xl mx-auto text-center'>
              <h2 className='text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white'>
                Start Your Project with Orient Software Today
              </h2>
              <p className='mt-4 max-w-2xl mx-auto text-lg text-slate-600 dark:text-slate-400'>
                We make the process simple and transparent, ensuring a smooth
                journey from idea to launch. Let&apos;s build something great
                together.
              </p>
              <div className='mt-8'>
                <a
                  className='inline-block bg-red-500 text-white px-8 py-4 rounded-full font-bold hover:opacity-90 transition-opacity'
                  href='#'
                >
                  Schedule a Meeting
                </a>
              </div>
              <div className='mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 items-start text-left'>
                <div className='flex flex-col md:flex-row items-start md:items-center'>
                  <div className='flex items-center'>
                    <div className='shrink-0 w-12 h-12 rounded-full bg-red-500/10 dark:bg-red-500/20 text-red-500 flex items-center justify-center'>
                      <span className='material-symbols-outlined'>call</span>
                    </div>
                    <div className='ml-4'>
                      <p className='font-bold text-slate-900 dark:text-white'>
                        01. Schedule a Consultation Call
                      </p>
                    </div>
                  </div>
                  <span className='material-symbols-outlined text-4xl text-slate-300 dark:text-slate-600 mx-auto mt-4 md:mt-0 md:ml-4 rotate-90 md:rotate-0'>
                    arrow_forward
                  </span>
                </div>
                <div className='flex flex-col md:flex-row items-start md:items-center'>
                  <div className='flex items-center'>
                    <div className='shrink-0 w-12 h-12 rounded-full bg-red-500/10 dark:bg-red-500/20 text-red-500 flex items-center justify-center'>
                      <span className='material-symbols-outlined'>group</span>
                    </div>
                    <div className='ml-4'>
                      <p className='font-bold text-slate-900 dark:text-white'>
                        02. Explore Solutions and Team Setup
                      </p>
                    </div>
                  </div>
                  <span className='material-symbols-outlined text-4xl text-slate-300 dark:text-slate-600 mx-auto mt-4 md:mt-0 md:ml-4 rotate-90 md:rotate-0'>
                    arrow_forward
                  </span>
                </div>
                <div className='flex flex-col md:flex-row items-start md:items-center'>
                  <div className='flex items-center'>
                    <div className='shrink-0 w-12 h-12 rounded-full bg-red-500/10 dark:bg-red-500/20 text-red-500 flex items-center justify-center'>
                      <span className='material-symbols-outlined'>
                        rocket_launch
                      </span>
                    </div>
                    <div className='ml-4'>
                      <p className='font-bold text-slate-900 dark:text-white'>
                        03. Kick Off and Monitor the Project
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className='py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-950'>
            <div className='max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center'>
              <div className='text-white bg-background-dark p-8 sm:p-12 rounded-lg'>
                <h2 className='text-3xl sm:text-4xl font-extrabold'>
                  Let&apos;s Get to Work
                </h2>
                <p className='mt-4 text-slate-400'>
                  Contact us to discuss your project. We&apos;re ready to help
                  you achieve your business goals with our cutting-edge software
                  solutions.
                </p>
                <div className='mt-10 space-y-6'>
                  <div className='flex items-center'>
                    <div className='text-4xl font-extrabold text-red-500'>
                      20
                    </div>
                    <p className='ml-4 text-slate-300'>years in operation</p>
                  </div>
                  <div className='flex items-center'>
                    <div className='text-4xl font-extrabold text-red-500'>
                      100
                    </div>
                    <p className='ml-4 text-slate-300'>Global clients</p>
                  </div>
                  <div className='flex items-center'>
                    <div className='text-4xl font-extrabold text-red-500 flex items-center'>
                      <Image
                        alt='Microsoft logo'
                        className='mr-2'
                        src='https://lh3.googleusercontent.com/aida-public/AB6AXuDx_5Y8Nl5af2KSVvZZzPg_F9C4xRQIdBkGc0JWJg77dP0QuF0ipRHGf_kx5tpGE-vTlRQWinwuYOrd1rJ55YauVeC_NqMRHSmYZrNJCkWKivZnqrHpTtKIGZ0scU_aJhiiF8tBuFZ2o-wUDItzLHk9iGDlEnA6hWTG_V-gFQRfLjAO6mqhpSeVcnzdlegaw0U6fdG9bX4yyvtVGOg6W1q8M2URWQ8YHJtq4rIogtZY9AQoNkpAOIsk5QzUTJq12h0gEysIALL02Q'
                        width={60}
                        height={60}
                      />
                    </div>
                    <p className='ml-4 text-slate-300'>
                      Microsoft Solutions Partner
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <form className='space-y-6'>
                  <div>
                    <label className='sr-only' htmlFor='full-name'>
                      Full Name
                    </label>
                    <input
                      className='w-full bg-slate-100 dark:bg-slate-800 border-slate-200 dark:border-slate-700 rounded-md py-3 px-4 text-slate-800 dark:text-slate-200 placeholder-slate-400 dark:placeholder-slate-500'
                      id='full-name'
                      name='full-name'
                      placeholder='Full Name'
                      type='text'
                    />
                  </div>
                  <div>
                    <label className='sr-only' htmlFor='email'>
                      Email
                    </label>
                    <input
                      className='w-full bg-slate-100 dark:bg-slate-800 border-slate-200 dark:border-slate-700 rounded-md py-3 px-4 text-slate-800 dark:text-slate-200 placeholder-slate-400 dark:placeholder-slate-500'
                      id='email'
                      name='email'
                      placeholder='Email'
                      type='email'
                    />
                  </div>
                  <div>
                    <label className='sr-only' htmlFor='company'>
                      Company
                    </label>
                    <input
                      className='w-full bg-slate-100 dark:bg-slate-800 border-slate-200 dark:border-slate-700 rounded-md py-3 px-4 text-slate-800 dark:text-slate-200 placeholder-slate-400 dark:placeholder-slate-500'
                      id='company'
                      name='company'
                      placeholder='Company'
                      type='text'
                    />
                  </div>
                  <div>
                    <label className='sr-only' htmlFor='project-details'>
                      Tell us about your project
                    </label>
                    <textarea
                      className='w-full bg-slate-100 dark:bg-slate-800 border-slate-200 dark:border-slate-700 rounded-md py-3 px-4 text-slate-800 dark:text-slate-200 placeholder-slate-400 dark:placeholder-slate-500'
                      id='project-details'
                      name='project-details'
                      placeholder='Tell us about your project'
                      rows={4}
                    ></textarea>
                  </div>
                  <div className='bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-md p-4 flex justify-between items-center'>
                    <div className='flex items-center'>
                      <input
                        className='h-6 w-6 rounded border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900'
                        id='recaptcha'
                        name='recaptcha'
                        type='checkbox'
                      />
                      <label
                        className='ml-3 text-sm text-slate-600 dark:text-slate-400'
                        htmlFor='recaptcha'
                      >
                        I&apos;m not a robot
                      </label>
                    </div>
                  </div>
                  <p className='text-xs text-slate-500 dark:text-slate-400'>
                    This site is protected by reCAPTCHA and the Google Privacy
                    Policy and Terms of Service apply.
                  </p>
                  <div>
                    <button
                      className='w-full bg-red-500 text-white px-8 py-4 rounded-full font-bold hover:opacity-90 transition-opacity'
                      type='submit'
                    >
                      Send
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </section>
          <section className='py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-background-light'>
            <div className='max-w-7xl mx-auto'>
              <div className='flex justify-between items-center mb-12'>
                <h2 className='text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white'>
                  Blogs
                </h2>
                <a
                  className='text-red-500 font-semibold hover:underline'
                  href='#'
                >
                  Read more
                </a>
              </div>
              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                <div className='bg-white dark:bg-slate-900 rounded-lg overflow-hidden border border-slate-200 dark:border-slate-800'>
                  <Image
                    alt='Abstract image representing AI and mobile apps'
                    className='w-full h-48 object-cover'
                    src='https://lh3.googleusercontent.com/aida-public/AB6AXuBidoV3aBT22b_Sn_Nlt59Sdvvo6hDagsGyQ0yqeIjrjwwfKMKXAq0PCvKEY18XO5WxkCDtho05c7xBgdw62yueaZHH6AuqAUy56c2sSr8XVIKR8P9U0QuXr3EXVkLAsIwoqWEQgu5ziMGtfY7DTj1VsQUabmG58_U4wb3_lKdWHrTyPrflcM75uVI1zum2E9qrnL5pOftOTGuQB9CGfHGuznpFgSRw1C148JxG6ITKhyTRcAFVpfVY9y8vyQCsmyYkpVMj-2YYKA'
                    width={404}
                    height={192}
                  />
                  <div className='p-6'>
                    <h3 className='text-xl font-bold text-slate-900 dark:text-white'>
                      The Future of Mobile Apps in the AI-First Era: Trends You
                      Cannot Ignore
                    </h3>
                    <p className='mt-4 text-sm text-slate-500 dark:text-slate-400'>
                      10/11/2025
                    </p>
                  </div>
                </div>
                <div className='bg-white dark:bg-slate-900 rounded-lg overflow-hidden border border-slate-200 dark:border-slate-800'>
                  <Image
                    alt='Image showing data analytics dashboard'
                    className='w-full h-48 object-cover'
                    src='https://lh3.googleusercontent.com/aida-public/AB6AXuDZMTyMlT4P7h6TD_pYhC1ikc4eWHzzLxSFhO9zc1rVID2P4dB6YNqN1qnutRgNCXGCHsryttGGH41HxJIOOObXMgZPu2RX3Kw6OoRNM7DQvq72eCnioE8cP4svTa8JaDZcHKoaVnqyJODDJdPODodS3NnDZXMfFxZ7HLSfH-puWGi7_NZRdZ7VRawEKyHdjtMlRyaU006tWZ1u3sJqGRQgYNiAx1pFYWez-27yzCw9QMiwSGi-YHuJCJmBrnWYKW9QoK2a6vYSxQ'
                    width={404}
                    height={192}
                  />
                  <div className='p-6'>
                    <h3 className='text-xl font-bold text-slate-900 dark:text-white'>
                      Data-Driven Decision Making: How to Leverage Big Data for
                      Business Growth
                    </h3>
                    <p className='mt-4 text-sm text-slate-500 dark:text-slate-400'>
                      05/11/2025
                    </p>
                  </div>
                </div>
                <div className='bg-white dark:bg-slate-900 rounded-lg overflow-hidden border border-slate-200 dark:border-slate-800'>
                  <Image
                    alt='Cyber security concept image'
                    className='w-full h-48 object-cover'
                    src='https://lh3.googleusercontent.com/aida-public/AB6AXuBJfFyFiwF9IjA2VBoKqxhVMhZRkR3SOiYjk7LV3W-E-IHkrIU9bXdU43zkzOPCIGypb4u0Fstcx5nZm03cVwKPEjhvPhegR49m4UTB-BHhGiU0b11vCa6YvBp-u43gWBNaqeB7wo1T2PD9sQjCNBu6htXAENV_qCcMPfhzSzwHVd6aILRwnvSc9SL62fIIHoxQKUEBzhWw0rb_4bIEmCXIK0ve04KIOUPLWGA8lHsk75SZBkIJHA-8aJ8HZfsuR-Ed47rQWh-FJg'
                    width={404}
                    height={192}
                  />
                  <div className='p-6'>
                    <h3 className='text-xl font-bold text-slate-900 dark:text-white'>
                      Navigating the Cyber Security Landscape: A Guide for
                      Modern Businesses
                    </h3>
                    <p className='mt-4 text-sm text-slate-500 dark:text-slate-400'>
                      01/11/2025
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
        <footer className='bg-background-dark text-slate-300 pt-16 sm:pt-24 pb-8 px-4 sm:px-6 lg:px-8'>
          <div className='max-w-7xl mx-auto'>
            <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10'>
              <div>
                <h3 className='font-bold text-white text-lg'>Company</h3>
                <ul className='mt-4 space-y-3'>
                  <li>
                    <a
                      className='hover:text-red-500 text-sm transition-colors'
                      href='#'
                    >
                      Company Profile
                    </a>
                  </li>
                  <li>
                    <a
                      className='hover:text-red-500 text-sm transition-colors'
                      href='#'
                    >
                      Management Team
                    </a>
                  </li>
                  <li>
                    <a
                      className='hover:text-red-500 text-sm transition-colors'
                      href='#'
                    >
                      Artificial Intelligence
                    </a>
                  </li>
                  <li>
                    <a
                      className='hover:text-red-500 text-sm transition-colors'
                      href='#'
                    >
                      Corporate Social Responsibility
                    </a>
                  </li>
                  <li>
                    <a
                      className='hover:text-red-500 text-sm transition-colors'
                      href='#'
                    >
                      Partnership program
                    </a>
                  </li>
                  <li>
                    <a
                      className='hover:text-red-500 text-sm transition-colors'
                      href='#'
                    >
                      How we work
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className='font-bold text-white text-lg'>Our Services</h3>
                <ul className='mt-4 space-y-3'>
                  <li>
                    <a
                      className='hover:text-red-500 text-sm transition-colors'
                      href='#'
                    >
                      Dedicated Software Teams
                    </a>
                  </li>
                  <li>
                    <a
                      className='hover:text-red-500 text-sm transition-colors'
                      href='#'
                    >
                      QA and Testing
                    </a>
                  </li>
                  <li>
                    <a
                      className='hover:text-red-500 text-sm transition-colors'
                      href='#'
                    >
                      Custom Software Development
                    </a>
                  </li>
                  <li>
                    <a
                      className='hover:text-red-500 text-sm transition-colors'
                      href='#'
                    >
                      Offshore Development Center
                    </a>
                  </li>
                  <li>
                    <a
                      className='hover:text-red-500 text-sm transition-colors'
                      href='#'
                    >
                      Maintenance and Support
                    </a>
                  </li>
                  <li>
                    <a
                      className='hover:text-red-500 text-sm transition-colors'
                      href='#'
                    >
                      Staff Augmentation
                    </a>
                  </li>
                  <li>
                    <a
                      className='hover:text-red-500 text-sm transition-colors'
                      href='#'
                    >
                      All Services
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className='font-bold text-white text-lg'>Our Expertise</h3>
                <ul className='mt-4 space-y-3'>
                  <li>
                    <a
                      className='hover:text-red-500 text-sm transition-colors'
                      href='#'
                    >
                      UI/UX Design
                    </a>
                  </li>
                  <li>
                    <a
                      className='hover:text-red-500 text-sm transition-colors'
                      href='#'
                    >
                      Web Application Development
                    </a>
                  </li>
                  <li>
                    <a
                      className='hover:text-red-500 text-sm transition-colors'
                      href='#'
                    >
                      Mobile Application Development
                    </a>
                  </li>
                  <li>
                    <a
                      className='hover:text-red-500 text-sm transition-colors'
                      href='#'
                    >
                      Database Development
                    </a>
                  </li>
                  <li>
                    <a
                      className='hover:text-red-500 text-sm transition-colors'
                      href='#'
                    >
                      Internet of Things
                    </a>
                  </li>
                  <li>
                    <a
                      className='hover:text-red-500 text-sm transition-colors'
                      href='#'
                    >
                      Cloud Computing
                    </a>
                  </li>
                  <li>
                    <a
                      className='hover:text-red-500 text-sm transition-colors'
                      href='#'
                    >
                      Software Outsourcing
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className='font-bold text-white text-lg'>Technologies</h3>
                <ul className='mt-4 space-y-3'>
                  <li>
                    <a
                      className='hover:text-red-500 text-sm transition-colors'
                      href='#'
                    >
                      Web Technologies
                    </a>
                  </li>
                  <li>
                    <a
                      className='hover:text-red-500 text-sm transition-colors'
                      href='#'
                    >
                      Mobile Technologies
                    </a>
                  </li>
                  <li>
                    <a
                      className='hover:text-red-500 text-sm transition-colors'
                      href='#'
                    >
                      AI Technologies
                    </a>
                  </li>
                  <li>
                    <a
                      className='hover:text-red-500 text-sm transition-colors'
                      href='#'
                    >
                      Angular Development
                    </a>
                  </li>
                  <li>
                    <a
                      className='hover:text-red-500 text-sm transition-colors'
                      href='#'
                    >
                      .NET Development
                    </a>
                  </li>
                  <li>
                    <a
                      className='hover:text-red-500 text-sm transition-colors'
                      href='#'
                    >
                      Java Development
                    </a>
                  </li>
                  <li>
                    <a
                      className='hover:text-red-500 text-sm transition-colors'
                      href='#'
                    >
                      ASP.NET vs PHP
                    </a>
                  </li>
                  <li>
                    <a
                      className='hover:text-red-500 text-sm transition-colors'
                      href='#'
                    >
                      iOS Development
                    </a>
                  </li>
                  <li>
                    <a
                      className='hover:text-red-500 text-sm transition-colors'
                      href='#'
                    >
                      Android Development
                    </a>
                  </li>
                </ul>
              </div>
              <div className='col-span-2 lg:col-span-1'>
                <h3 className='font-bold text-white text-lg'>Resources</h3>
                <ul className='mt-4 space-y-3'>
                  <li>
                    <a
                      className='hover:text-red-500 text-sm transition-colors'
                      href='#'
                    >
                      Blog
                    </a>
                  </li>
                  <li>
                    <a
                      className='hover:text-red-500 text-sm transition-colors'
                      href='#'
                    >
                      News
                    </a>
                  </li>
                  <li>
                    <a
                      className='hover:text-red-500 text-sm transition-colors'
                      href='#'
                    >
                      Careers
                    </a>
                  </li>
                  <li>
                    <a
                      className='hover:text-red-500 text-sm transition-colors'
                      href='#'
                    >
                      What is software outsourcing?
                    </a>
                  </li>
                  <li>
                    <a
                      className='hover:text-red-500 text-sm transition-colors'
                      href='#'
                    >
                      Why Outsource to Vietnam?
                    </a>
                  </li>
                  <li>
                    <a
                      className='hover:text-red-500 text-sm transition-colors'
                      href='#'
                    >
                      All About Software Testing
                    </a>
                  </li>
                  <li>
                    <a
                      className='hover:text-red-500 text-sm transition-colors'
                      href='#'
                    >
                      Everything you need to know about AI &amp; Data Science
                    </a>
                  </li>
                  <li>
                    <a
                      className='hover:text-red-500 text-sm transition-colors'
                      href='#'
                    >
                      FAQ about Software Outsourcing
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className='mt-16 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-start gap-8'>
              <div className='space-y-2'>
                <h3 className='font-bold text-white text-lg'>Contact Us</h3>
                <p>Head office: Ho Chi Minh City, Vietnam</p>
                <p>Phone: +84 28 3812 0101</p>
                <p>Email: contact@orientsoftware.com</p>
              </div>
              <div className='space-y-6 text-center md:text-right'>
                <div className='flex flex-wrap justify-start md:justify-end gap-4 items-center'>
                  <Image
                    alt='Microsoft Partner logo'
                    width={60}
                    height={60}
                    src='https://lh3.googleusercontent.com/aida-public/AB6AXuCCjWsdgXnVkbnZ3WIGIa50T4PDn9ZnerJztfgmvrzoDPxZN_DJyRyq0fA2sTkPfTE51FkOnmjNkC5gWC3k2rY4pHWclJn6n8Rs0QadyLuPwT_aE4jPZgpcy8b297jnl_awlnPdZotg-m2-eFvQJoFGtDdhOVJ4ZyowAqTB2DfdeqGolyT1m7ovTLMcbOnePMxOd0bRyRA-56UgKdAZ5TbVrPbM2kDTWVnpzUX9EgADEZaTgIk2CamqdWAri_34TtcBLOFediQ4Sg'
                  />
                  <Image
                    alt='ISO certification logo'
                    src='https://lh3.googleusercontent.com/aida-public/AB6AXuB7gRcyJgmuMr82uSiLwRsfpjRlrMgApIAC-r3-KzS-FSGFp5hzor9rv8f5IzZh8pnawAEDHQiWQlQwHJIz7Nlx2Xyp47VGW0qESGCpBdnmf2VbgelsmWjEoaTufDhnZKlPikj713Yx2N0S_irzwGAVMU0Mst6LO8i2hFfBxveLH91Z9JCqTM8N2HpGgqfBISvleTMeV8uYddtl5qubFcHtrk4aV0lPKEfE1JAA4zKKTCt1_NFDq9YY62B1csvFuAz610_IF-umNg'
                    width={60}
                    height={60}
                  />
                  <Image
                    alt='CMMI logo'
                    src='https://lh3.googleusercontent.com/aida-public/AB6AXuA36SkVGamxk1WRjaZF63krkVIecRBpUIkLQuqW0Xh_EU1zBvbrh-jpIEXGwsvQDG_7vRlH85o_2FTOSiIDK_LckQQH3rU4HYgFR_Ds8PKHS2VCeQIIU0hWKBx4mi7LpE7a5J7BJDeEF2XF3OQz1zSr4ualeLaSug7oygjFp0jRKo5DiZM9o2z1lVJxCF3uVMZp11LoeBw1dZxsIWUiD2v4y8kY0l6g55OzO_keV0C4-PxgoIfHVKesDMwJJB3EyQQfoFDJHBKgbQ'
                    width={60}
                    height={60}
                  />
                  <Image
                    alt='PMP logo'
                    src='https://lh3.googleusercontent.com/aida-public/AB6AXuCopwaH9NIN3RU-ZbxGjcUXzgAEtVoeTRO_-4zue9UGHszFBg3ja8rhw7YdVSd1QTPNIEnnXxS4ApgP6YH6TuS229GSzoJF8Wzayc3crPrlfxVb_6yxtPr11eYOXvrWVybOe3FtoxOmpm7oFhVIFsN8Rs7JiQcnftdnPaJkw7vCV40NLKs8mjXX16vWq82Ia8wQkKIgxDGNFQ8caXNkiGTGieNDKIL08C3z5dB3yoEalh7EKMWE7zp6gb0cPSn0gq9to8JRMtm-VA'
                    width={60}
                    height={60}
                  />
                </div>
                <p className='text-sm font-semibold'>
                  Intel Cloud Solution Provider
                </p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
