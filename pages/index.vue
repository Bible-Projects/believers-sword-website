<template>

        <main class="main relative">
            <!-- Hero section -->
            <section id="home"
                class="relative overflow-hidden bg-orange-500 text-primary-color pt-[120px] md:pt-[130px] lg:pt-[160px]">
                <div class="container">
                    <div class="-mx-5 flex flex-wrap items-center">
                        <div class="w-full px-5">
                            <div class="scroll-revealed mx-auto max-w-[780px] text-center">
                                <h1
                                    class="mb-6 text-3xl font-bold leading-snug text-primary-color sm:text-4xl sm:leading-snug lg:text-5xl lg:leading-tight">
                                    Believers Sword
                                </h1>

                                <p
                                    class="mx-auto mb-9 max-w-[600px] text-base text-primary-color sm:text-lg sm:leading-normal">
                                    Welcome to Believers Sword — a powerful yet simple Bible study app designed to deepen your walk with Christ. Whether you're just discovering it or have been using it for a while, Believers Sword equips you with intuitive tools and thoughtful features to help you engage with God’s Word more meaningfully.
                                </p>

                                <ul class="mb-10 flex flex-wrap items-center justify-center gap-4 md:gap-5">
                                    <li>
                                        <a href="javascript:void(0)"
                                            class="inline-flex items-center justify-center rounded-md bg-white !text-orange-500 px-5 py-3 text-center text-base font-medium shadow-md hover:bg-orange-200 md:px-7 md:py-[14px] gap-4"
                                            role="button"
                                        >
                                            <Icon name="ic:baseline-cloud-download" /> Download
                                        </a>
                                    </li>

                                    <li>
                                        <a href="javascript:boid(0)"
                                            class="video-popup flex items-center gap-4 rounded-md bg-primary-color/[0.15] px-5 py-3 text-base font-medium text-primary-color hover:bg-primary-color hover:text-primary md:px-7 md:py-[14px]"
                                            role="button">
                                            <Icon name="ic:baseline-play-circle-filled" /> Watch Intro
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="w-full px-5">
                            <div class="scroll-revealed relative z-10 mx-auto max-w-[845px]">
                                <figure class="mt-16">
                                    <img src="@/assets/img/hero.png" alt="Hero image"
                                        class="mx-auto max-w-full rounded-t-l rounded-tr-md rounded-lt-md" />
                                </figure>

                                <div class="absolute -left-9 bottom-0 z-[-1]">
                                    <img src="@/assets/img/dots.svg" class="w-[120px] opacity-75" />
                                </div>

                                <div class="absolute -right-6 -top-6 z-[-1]">
                                    <img src="@/assets/img/dots.svg" class="w-[120px] opacity-75" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- About section -->
            <section id="about" class="section-area">
                <div class="container">
                    <div class="grid grid-cols-1 gap-14 lg:grid-cols-2">
                        <div class="w-full">
                            <figure class="scroll-revealed max-w-[480px] mx-auto">
                                <img src="@/assets/img/about-img.jpg" alt="About image" class="rounded-xl" />
                            </figure>
                        </div>

                        <div class="w-full">
                            <div class="scroll-revealed">
                                <h6 class="mb-2 block text-lg font-semibold text-primary">
                                    About Us
                                </h6>
                                <h2 class="mb-6">
                                    Why I Created Believers Sword
                                </h2>
                            </div>

                            <div class="tabs scroll-revealed">
                                <div class="tabs-content mt-4" id="tabs-panel-profile" tabindex="-1" role="tabpanel"
                                    aria-labelledby="tabs-list-profile">
                                    <p>
                                        
                                    </p>
                                    <p>
                                        There are many variations of passages of Lorem Ipsum
                                        available, but the majority have in some form, by injected
                                        humour.
                                    </p>
                                </div>

                                <div class="tabs-content mt-4" id="tabs-panel-vision" tabindex="-1" role="tabpanel"
                                    aria-labelledby="tabs-list-vision">
                                    <p>
                                        It is a long established fact that a reader will be
                                        distracted by the readable content of a page when looking at
                                        its layout. The point of using Lorem Ipsum is that it has a
                                        more-or-less normal distribution of letters, look like
                                        readable English.
                                    </p>
                                    <p>
                                        There are many variations of passages of Lorem Ipsum
                                        available, but the majority have in some form, by injected
                                        humour.
                                    </p>
                                </div>

                                <div class="tabs-content mt-4" id="tabs-panel-history" tabindex="-1" role="tabpanel"
                                    aria-labelledby="tabs-list-history">
                                    <p>
                                        It is a long established fact that a reader will be
                                        distracted by the readable content of a page when looking at
                                        its layout. The point of using Lorem Ipsum is that it has a
                                        more-or-less normal distribution of letters, look like
                                        readable English.
                                    </p>
                                    <p>
                                        There are many variations of passages of Lorem Ipsum
                                        available, but the majority have in some form, by injected
                                        humour.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Intro video section -->
            <section id="intro" class="section-area">
                <div class="container">
                    <div class="scroll-revealed text-center max-w-[550px] mx-auto mb-12">
                        <h6 class="mb-2 block text-lg font-semibold text-primary">
                            Intro Video
                        </h6>
                        <h2 class="mb-6">Watch Our Intro Video</h2>
                        <p>
                            There are many variations of passages of Lorem Ipsum available but
                            the majority have suffered alteration in some form.
                        </p>
                    </div>

                    <div class="scroll-revealed relative max-w-[900px] mx-auto">
                        <img src="@/assets/img/intro-video.jpg" alt="Intro video"
                            class="w-full h-full aspect-video rounded-xl object-cover" />
                        <a href="javascript:void(0)"
                            class="video-popup w-[80px] h-[80px] rounded-full inline-flex items-center justify-center bg-primary text-primary-color text-[1.875rem] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 shadow-md hover:bg-primary-color hover:text-primary hover:shadow-xl focus:bg-primary-color focus:text-primary focus:shadow-xl">
                            <Icon name="ic:baseline-play-circle-filled" />
                        </a>
                    </div>
                </div>
            </section>

            <!-- Portfolio section -->
            <section id="portfolio" class="section-area">
                <div class="container">
                    <div class="scroll-revealed text-center max-w-[550px] mx-auto mb-12">
                        <h6 class="mb-2 block text-lg font-semibold text-primary">
                            Features
                        </h6>
                        <h2 class="mb-6">What The App Can Do</h2>
                        <p>
                            There are many variations of passages of Lorem Ipsum available but
                            the majority have suffered alteration in some form.
                        </p>
                    </div>

                    <div class="scroll-revealed portfolio-grid row">
                        <div class="portfolio col-12 sm:col-6 lg:col-4">
                            <article class="group" data-filter="branding">
                                <div class="relative overflow-hidden w-full aspect-[4/3] rounded-xl">
                                    <img src="@/assets/img/portfolio/portfolio-1.jpg" alt="Graphics Design"
                                        class="w-full h-full object-cover" />
                                    <div
                                        class="absolute top-0 left-0 w-full aspect-[4/3] flex items-center justify-center bg-body-light-1/75 scale-[0.15] rounded-xl opacity-0 invisible group-hover:scale-95 group-hover:opacity-100 group-hover:visible">
                                        <div class="flex flex-wrap gap-2 p-4">
                                            <div class="inline-block relative">
                                                <a href="@/assets/img/portfolio/portfolio-1.jpg"
                                                    class="portfolio-box text-[1.75rem] text-primary-color bg-primary z-10 w-[60px] aspect-square rounded-lg text-center inline-flex items-center justify-center hover:bg-primary-light-10 hover:text-primary-color dark:hover:bg-primary-dark-10 dark:hover:text-primary-color focus:bg-primary-light-10 focus:text-primary-color dark:focus:bg-primary-dark-10 dark:focus:text-primary-color">
                                                    <Icon name="ic:baseline-zoom-out-map" />
                                                </a>
                                            </div>
                                            <div class="portfolio-icon">
                                                <a href="javascript:void(0)"
                                                    class="text-[1.75rem] text-primary-color bg-primary z-10 w-[60px] aspect-square rounded-lg text-center inline-flex items-center justify-center hover:bg-primary-light-10 hover:text-primary-color dark:hover:bg-primary-dark-10 dark:hover:text-primary-color focus:bg-primary-light-10 focus:text-primary-color dark:focus:bg-primary-dark-10 dark:focus:text-primary-color">
                                                    <Icon name="ic:twotone-insert-link" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="pt-4">
                                    <h4 class="mb-2">
                                        <a href="javascript:void(0)"
                                            class="text-[1.5rem] leading-tight text-inherit">Graphics Design</a>
                                    </h4>
                                    <p>
                                        Short description for the ones who look for something new.
                                        Awesome!
                                    </p>
                                </div>
                            </article>
                        </div>

                        <div class="portfolio col-12 sm:col-6 lg:col-4">
                            <article class="group" data-filter="research">
                                <div class="relative overflow-hidden w-full aspect-[4/3] rounded-xl">
                                    <img src="@/assets/img/portfolio/portfolio-2.jpg" alt="Web Development"
                                        class="w-full h-full object-cover" />
                                    <div
                                        class="absolute top-0 left-0 w-full aspect-[4/3] flex items-center justify-center bg-body-light-1/75 scale-[0.15] rounded-xl opacity-0 invisible group-hover:scale-95 group-hover:opacity-100 group-hover:visible">
                                        <div class="flex flex-wrap gap-2 p-4">
                                            <div class="inline-block relative">
                                                <a href="@/assets/img/portfolio/portfolio-2.jpg"
                                                    class="portfolio-box text-[1.75rem] text-primary-color bg-primary z-10 w-[60px] aspect-square rounded-lg text-center inline-flex items-center justify-center hover:bg-primary-light-10 hover:text-primary-color dark:hover:bg-primary-dark-10 dark:hover:text-primary-color focus:bg-primary-light-10 focus:text-primary-color dark:focus:bg-primary-dark-10 dark:focus:text-primary-color">
                                                    <Icon name="ic:baseline-zoom-in-map" />
                                                </a>
                                            </div>
                                            <div class="portfolio-icon">
                                                <a href="javascript:void(0)"
                                                    class="text-[1.75rem] text-primary-color bg-primary z-10 w-[60px] aspect-square rounded-lg text-center inline-flex items-center justify-center hover:bg-primary-light-10 hover:text-primary-color dark:hover:bg-primary-dark-10 dark:hover:text-primary-color focus:bg-primary-light-10 focus:text-primary-color dark:focus:bg-primary-dark-10 dark:focus:text-primary-color">
                                                    <Icon name="ic:twotone-link" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="pt-4">
                                    <h4 class="mb-2">
                                        <a href="javascript:void(0)"
                                            class="text-[1.5rem] leading-tight text-inherit">Web Development</a>
                                    </h4>
                                    <p>
                                        Short description for the ones who look for something new.
                                        Awesome!
                                    </p>
                                </div>
                            </article>
                        </div>

                        <div class="portfolio col-12 sm:col-6 lg:col-4">
                            <article class="group" data-filter="marketing">
                                <div class="relative overflow-hidden w-full aspect-[4/3] rounded-xl">
                                    <img src="@/assets/img/portfolio/portfolio-3.jpg" alt="App Development"
                                        class="w-full h-full object-cover" />
                                    <div
                                        class="absolute top-0 left-0 w-full aspect-[4/3] flex items-center justify-center bg-body-light-1/75 scale-[0.15] rounded-xl opacity-0 invisible group-hover:scale-95 group-hover:opacity-100 group-hover:visible">
                                        <div class="flex flex-wrap gap-2 p-4">
                                            <div class="inline-block relative">
                                                <a href="@/assets/img/portfolio/portfolio-3.jpg"
                                                    class="portfolio-box text-[1.75rem] text-primary-color bg-primary z-10 w-[60px] aspect-square rounded-lg text-center inline-flex items-center justify-center hover:bg-primary-light-10 hover:text-primary-color dark:hover:bg-primary-dark-10 dark:hover:text-primary-color focus:bg-primary-light-10 focus:text-primary-color dark:focus:bg-primary-dark-10 dark:focus:text-primary-color">
                                                    <Icon name="ic:baseline-zoom-in-map" />
                                                </a>
                                            </div>
                                            <div class="portfolio-icon">
                                                <a href="javascript:void(0)"
                                                    class="text-[1.75rem] text-primary-color bg-primary z-10 w-[60px] aspect-square rounded-lg text-center inline-flex items-center justify-center hover:bg-primary-light-10 hover:text-primary-color dark:hover:bg-primary-dark-10 dark:hover:text-primary-color focus:bg-primary-light-10 focus:text-primary-color dark:focus:bg-primary-dark-10 dark:focus:text-primary-color">
                                                    <Icon name="ic:twotone-link" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="pt-4">
                                    <h4 class="mb-2">
                                        <a href="javascript:void(0)"
                                            class="text-[1.5rem] leading-tight text-inherit">App Development</a>
                                    </h4>
                                    <p>
                                        Short description for the ones who look for something new.
                                        Awesome!
                                    </p>
                                </div>
                            </article>
                        </div>

                        <div class="portfolio col-12 sm:col-6 lg:col-4">
                            <article class="group" data-filter="planning">
                                <div class="relative overflow-hidden w-full aspect-[4/3] rounded-xl">
                                    <img src="@/assets/img/portfolio/portfolio-4.jpg" alt="Digital Marketing"
                                        class="w-full h-full object-cover" />
                                    <div
                                        class="absolute top-0 left-0 w-full aspect-[4/3] flex items-center justify-center bg-body-light-1/75 scale-[0.15] rounded-xl opacity-0 invisible group-hover:scale-95 group-hover:opacity-100 group-hover:visible">
                                        <div class="flex flex-wrap gap-2 p-4">
                                            <div class="inline-block relative">
                                                <a href="@/assets/img/portfolio/portfolio-4.jpg"
                                                    class="portfolio-box text-[1.75rem] text-primary-color bg-primary z-10 w-[60px] aspect-square rounded-lg text-center inline-flex items-center justify-center hover:bg-primary-light-10 hover:text-primary-color dark:hover:bg-primary-dark-10 dark:hover:text-primary-color focus:bg-primary-light-10 focus:text-primary-color dark:focus:bg-primary-dark-10 dark:focus:text-primary-color">
                                                    <Icon name="ic:baseline-zoom-in-map" />
                                                </a>
                                            </div>
                                            <div class="portfolio-icon">
                                                <a href="javascript:void(0)"
                                                    class="text-[1.75rem] text-primary-color bg-primary z-10 w-[60px] aspect-square rounded-lg text-center inline-flex items-center justify-center hover:bg-primary-light-10 hover:text-primary-color dark:hover:bg-primary-dark-10 dark:hover:text-primary-color focus:bg-primary-light-10 focus:text-primary-color dark:focus:bg-primary-dark-10 dark:focus:text-primary-color">
                                                    <Icon name="ic:twotone-link" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="pt-4">
                                    <h4 class="mb-2">
                                        <a href="javascript:void(0)"
                                            class="text-[1.5rem] leading-tight text-inherit">Digital Marketing</a>
                                    </h4>
                                    <p>
                                        Short description for the ones who look for something new.
                                        Awesome!
                                    </p>
                                </div>
                            </article>
                        </div>

                        <div class="portfolio col-12 sm:col-6 lg:col-4">
                            <article class="group" data-filter="branding">
                                <div class="relative overflow-hidden w-full aspect-[4/3] rounded-xl">
                                    <img src="@/assets/img/portfolio/portfolio-5.jpg" alt="SEO Services"
                                        class="w-full h-full object-cover" />
                                    <div
                                        class="absolute top-0 left-0 w-full aspect-[4/3] flex items-center justify-center bg-body-light-1/75 scale-[0.15] rounded-xl opacity-0 invisible group-hover:scale-95 group-hover:opacity-100 group-hover:visible">
                                        <div class="flex flex-wrap gap-2 p-4">
                                            <div class="inline-block relative">
                                                <a href="@/assets/img/portfolio/portfolio-5.jpg"
                                                    class="portfolio-box text-[1.75rem] text-primary-color bg-primary z-10 w-[60px] aspect-square rounded-lg text-center inline-flex items-center justify-center hover:bg-primary-light-10 hover:text-primary-color dark:hover:bg-primary-dark-10 dark:hover:text-primary-color focus:bg-primary-light-10 focus:text-primary-color dark:focus:bg-primary-dark-10 dark:focus:text-primary-color">
                                                    <Icon name="ic:baseline-zoom-in-map" />
                                                </a>
                                            </div>
                                            <div class="portfolio-icon">
                                                <a href="javascript:void(0)"
                                                    class="text-[1.75rem] text-primary-color bg-primary z-10 w-[60px] aspect-square rounded-lg text-center inline-flex items-center justify-center hover:bg-primary-light-10 hover:text-primary-color dark:hover:bg-primary-dark-10 dark:hover:text-primary-color focus:bg-primary-light-10 focus:text-primary-color dark:focus:bg-primary-dark-10 dark:focus:text-primary-color">
                                                    <Icon name="ic:twotone-link" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="pt-4">
                                    <h4 class="mb-2">
                                        <a href="javascript:void(0)"
                                            class="text-[1.5rem] leading-tight text-inherit">SEO Services</a>
                                    </h4>
                                    <p>
                                        Short description for the ones who look for something new.
                                        Awesome!
                                    </p>
                                </div>
                            </article>
                        </div>

                        <div class="portfolio col-12 sm:col-6 lg:col-4">
                            <article class="group" data-filter="marketing">
                                <div class="relative overflow-hidden w-full aspect-[4/3] rounded-xl">
                                    <img src="@/assets/img/portfolio/portfolio-6.jpg" alt="Product Design"
                                        class="w-full h-full object-cover" />
                                    <div
                                        class="absolute top-0 left-0 w-full aspect-[4/3] flex items-center justify-center bg-body-light-1/75 scale-[0.15] rounded-xl opacity-0 invisible group-hover:scale-95 group-hover:opacity-100 group-hover:visible">
                                        <div class="flex flex-wrap gap-2 p-4">
                                            <div class="inline-block relative">
                                                <a href="@/assets/img/portfolio/portfolio-6.jpg"
                                                    class="portfolio-box text-[1.75rem] text-primary-color bg-primary z-10 w-[60px] aspect-square rounded-lg text-center inline-flex items-center justify-center hover:bg-primary-light-10 hover:text-primary-color dark:hover:bg-primary-dark-10 dark:hover:text-primary-color focus:bg-primary-light-10 focus:text-primary-color dark:focus:bg-primary-dark-10 dark:focus:text-primary-color">
                                                    <Icon name="ic:baseline-zoom-in-map" />
                                                </a>
                                            </div>
                                            <div class="portfolio-icon">
                                                <a href="javascript:void(0)"
                                                    class="text-[1.75rem] text-primary-color bg-primary z-10 w-[60px] aspect-square rounded-lg text-center inline-flex items-center justify-center hover:bg-primary-light-10 hover:text-primary-color dark:hover:bg-primary-dark-10 dark:hover:text-primary-color focus:bg-primary-light-10 focus:text-primary-color dark:focus:bg-primary-dark-10 dark:focus:text-primary-color">
                                                    <Icon name="ic:twotone-link" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="pt-4">
                                    <h4 class="mb-2">
                                        <a href="javascript:void(0)"
                                            class="text-[1.5rem] leading-tight text-inherit">Product Design</a>
                                    </h4>
                                    <p>
                                        Short description for the ones who look for something new.
                                        Awesome!
                                    </p>
                                </div>
                            </article>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Blog section -->
            <section id="blog" class="section-area">
                <div class="container">
                    <div class="scroll-revealed text-center max-w-[550px] mx-auto mb-12">
                        <h6 class="mb-2 block text-lg font-semibold text-primary">Blog</h6>
                        <h2 class="mb-6">Latest News & Blog</h2>
                        <p>
                            There are many variations of passages of Lorem Ipsum available but
                            the majority have suffered alteration in some form.
                        </p>
                    </div>

                    <div class="row">
                        <div class="scroll-revealed col-12 sm:col-6 lg:col-4">
                            <article class="group">
                                <div class="relative">
                                    <a href="javascript:void(0)"
                                        class="w-full aspect-[3/2] rounded-xl overflow-hidden block">
                                        <img src="@/assets/img/thumbnail/thumbnail-1.jpg" alt="Thumbnail"
                                            class="w-full h-full object-cover group-hover:scale-[1.05] group-hover:rotate-[2deg]" />
                                    </a>
                                </div>
                                <span class="block mt-6 w-full text-sm text-body-light-10 dark:text-body-dark-10">Joe
                                    Russell - 17 Agt 2024</span>
                                <h4 class="mb-6 mt-3 font-semibold text-[1.5rem]">
                                    <a href="javascript:void(0)" class="text-body-light-12 dark:text-body-dark-12">Make
                                        your team a Design driven company</a>
                                </h4>
                                <p>
                                    Lorem Ipsum is simply dummy text of the printing and
                                    typesetting industry. Lorem Ipsum has been the industry's
                                    standard.
                                </p>
                            </article>
                        </div>

                        <div class="scroll-revealed col-12 sm:col-6 lg:col-4">
                            <article class="group">
                                <div class="relative">
                                    <a href="javascript:void(0)"
                                        class="w-full aspect-[3/2] rounded-xl overflow-hidden block">
                                        <img src="@/assets/img/thumbnail/thumbnail-2.jpg" alt="Thumbnail"
                                            class="w-full h-full object-cover group-hover:scale-[1.05] group-hover:rotate-[2deg]" />
                                    </a>
                                </div>
                                <span class="block mt-6 w-full text-sm text-body-light-10 dark:text-body-dark-10">Joe
                                    Russell - 17 Agt 2024</span>
                                <h4 class="mb-6 mt-3 font-semibold text-[1.5rem]">
                                    <a href="javascript:void(0)" class="text-body-light-12 dark:text-body-dark-12">The
                                        newest web framework that changed the world</a>
                                </h4>
                                <p>
                                    Lorem Ipsum is simply dummy text of the printing and
                                    typesetting industry. Lorem Ipsum has been the industry's
                                    standard.
                                </p>
                            </article>
                        </div>

                        <div class="scroll-revealed col-12 sm:col-6 lg:col-4">
                            <article class="group">
                                <div class="relative">
                                    <a href="javascript:void(0)"
                                        class="w-full aspect-[3/2] rounded-xl overflow-hidden block">
                                        <img src="@/assets/img/thumbnail/thumbnail-3.jpg" alt="Thumbnail"
                                            class="w-full h-full object-cover group-hover:scale-[1.05] group-hover:rotate-[2deg]" />
                                    </a>
                                </div>
                                <span class="block mt-6 w-full text-sm text-body-light-10 dark:text-body-dark-10">Joe
                                    Russell - 17 Agt 2024</span>
                                <h4 class="mb-6 mt-3 font-semibold text-[1.5rem]">
                                    <a href="javascript:void(0)" class="text-body-light-12 dark:text-body-dark-12">5
                                        ways to improve user retention for your startup</a>
                                </h4>
                                <p>
                                    Lorem Ipsum is simply dummy text of the printing and
                                    typesetting industry. Lorem Ipsum has been the industry's
                                    standard.
                                </p>
                            </article>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Clients section -->
            <!-- <section id="clients" class="section-area">
                <div class="container">
                    <div class="scroll-revealed text-center max-w-[550px] mx-auto mb-12">
                        <h6 class="mb-2 block text-lg font-semibold text-primary">
                            Sponsors
                        </h6>
                        <h2 class="mb-6">Our Awesome Sponsor</h2>
                        <p>
                            There are many variations of passages of Lorem Ipsum available but
                            the majority have suffered alteration in some form.
                        </p>
                    </div>

                    <div class="">
                        <div class="row">
                            <div class="scroll-revealed text-center p-4 col-12 sm:col-6 md:col-4 lg:col-3">
                                <img src="@/assets/img/brand/airbnb.svg" alt="Brand Logo Image"
                                    class="h-[40px] inline-block grayscale dark:invert hover:grayscale-0 hover:invert-0" />
                            </div>
                            <div class="scroll-revealed text-center p-4 col-12 sm:col-6 md:col-4 lg:col-3">
                                <img src="@/assets/img/brand/coca-cola.svg" alt="Brand Logo Image"
                                    class="h-[40px] inline-block grayscale dark:invert hover:grayscale-0 hover:invert-0" />
                            </div>
                            <div class="scroll-revealed text-center p-4 col-12 sm:col-6 md:col-4 lg:col-3">
                                <img src="@/assets/img/brand/facebook.svg" alt="Brand Logo Image"
                                    class="h-[40px] inline-block grayscale dark:invert hover:grayscale-0 hover:invert-0" />
                            </div>
                            <div class="scroll-revealed text-center p-4 col-12 sm:col-6 md:col-4 lg:col-3">
                                <img src="@/assets/img/brand/mandiri.svg" alt="Brand Logo Image"
                                    class="h-[40px] inline-block grayscale dark:invert hover:grayscale-0 hover:invert-0" />
                            </div>
                            <div class="scroll-revealed text-center p-4 col-12 sm:col-6 md:col-4 lg:col-3">
                                <img src="@/assets/img/brand/shopware.svg" alt="Brand Logo Image"
                                    class="h-[40px] inline-block grayscale dark:invert hover:grayscale-0 hover:invert-0" />
                            </div>
                            <div class="scroll-revealed text-center p-4 col-12 sm:col-6 md:col-4 lg:col-3">
                                <img src="@/assets/img/brand/spotify.svg" alt="Brand Logo Image"
                                    class="h-[40px] inline-block grayscale dark:invert hover:grayscale-0 hover:invert-0" />
                            </div>
                            <div class="scroll-revealed text-center p-4 col-12 sm:col-6 md:col-4 lg:col-3">
                                <img src="@/assets/img/brand/tunnel-id.svg" alt="Brand Logo Image"
                                    class="h-[40px] inline-block grayscale dark:invert hover:grayscale-0 hover:invert-0" />
                            </div>
                            <div class="scroll-revealed text-center p-4 col-12 sm:col-6 md:col-4 lg:col-3">
                                <img src="@/assets/img/brand/walmart.svg" alt="Brand Logo Image"
                                    class="h-[40px] inline-block grayscale dark:invert hover:grayscale-0 hover:invert-0" />
                            </div>
                        </div>
                    </div>
                </div>
            </section> -->
        </main>

        <!-- Footer -->
        <footer class="bg-primary-dark-2 text-white">
            <div class="container py-20 lg:py-[100px]">
                <div class="row">
                    <div class="col-12 order-first lg:col-4">
                        <div class="w-full">
                            <a href="." class="inline-block mb-5">
                                <svg id="FooterBrand" class="h-[40px]" data-name="FooterBrand"
                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 118.11">
                                    <path
                                        d="M272.26,29.77h14.86V58q0,8.24,1.13,11.44a10,10,0,0,0,3.64,5,10.44,10.44,0,0,0,6.18,1.77,10.75,10.75,0,0,0,6.23-1.75,10.26,10.26,0,0,0,3.81-5.14q.92-2.52.91-10.82V29.77h14.7V54.59q0,15.33-2.42,21a23,23,0,0,1-8.72,10.58q-5.76,3.68-14.64,3.68-9.65,0-15.59-4.3a22.79,22.79,0,0,1-8.37-12q-1.73-5.32-1.72-19.37Z"
                                        style="fill: #eeeef0" />
                                    <path
                                        d="M338.36,29.77h14.69V36.5a25.29,25.29,0,0,1,8.38-6.19,24.53,24.53,0,0,1,10.05-2A18.63,18.63,0,0,1,381.39,31a19.46,19.46,0,0,1,7.11,7.86A23.64,23.64,0,0,1,397.09,31a23.34,23.34,0,0,1,11.12-2.69,20.65,20.65,0,0,1,11,2.9A16.79,16.79,0,0,1,426,38.76q2.08,4.68,2.08,15.24V88.34h-14.8V58.62q0-9.94-2.48-13.48t-7.43-3.52a11.22,11.22,0,0,0-6.75,2.15,12.66,12.66,0,0,0-4.44,5.95q-1.45,3.8-1.46,12.19V88.34h-14.8V60q0-7.86-1.16-11.38a10.27,10.27,0,0,0-3.48-5.25,9.15,9.15,0,0,0-5.61-1.72A11,11,0,0,0,359,43.8a13,13,0,0,0-4.48,6.1q-1.49,3.93-1.49,12.38V88.34H338.36Z"
                                        style="fill: #eeeef0" />
                                    <path
                                        d="M485.31,29.77H500V88.34H485.31V82.15A29,29,0,0,1,476.68,88a24.24,24.24,0,0,1-9.39,1.8q-11.34,0-19.62-8.8t-8.28-21.88q0-13.56,8-22.23a25.55,25.55,0,0,1,19.47-8.66,24.72,24.72,0,0,1,9.89,2,27.17,27.17,0,0,1,8.55,6ZM469.86,41.83a14.85,14.85,0,0,0-11.32,4.82A17.33,17.33,0,0,0,454,59a17.55,17.55,0,0,0,4.59,12.49,14.85,14.85,0,0,0,11.29,4.9,15.15,15.15,0,0,0,11.48-4.82Q486,66.76,486,59q0-7.65-4.56-12.38A15.31,15.31,0,0,0,469.86,41.83Z"
                                        style="fill: #eeeef0" />
                                    <path
                                        d="M28,29.77h14.7v6a35.37,35.37,0,0,1,9-5.87,22.09,22.09,0,0,1,8.31-1.64,20.09,20.09,0,0,1,14.78,6.08Q80,39.51,80,49.64v38.7H65.45V62.69q0-10.48-.94-13.92a9.57,9.57,0,0,0-3.27-5.25,9.18,9.18,0,0,0-5.78-1.8,10.82,10.82,0,0,0-7.65,3A16,16,0,0,0,43.38,53q-.65,2.74-.64,11.88v23.5H28Z"
                                        style="fill: #eeeef0" />
                                    <path
                                        d="M137.42,29.77h14.69V88.34H137.42V82.15A29,29,0,0,1,128.79,88a24.19,24.19,0,0,1-9.38,1.8q-11.34,0-19.63-8.8T91.5,59.16q0-13.56,8-22.23A25.53,25.53,0,0,1,119,28.27a24.69,24.69,0,0,1,9.89,2,27.17,27.17,0,0,1,8.55,6ZM122,41.83a14.87,14.87,0,0,0-11.32,4.82A17.37,17.37,0,0,0,106.15,59a17.54,17.54,0,0,0,4.58,12.49A14.85,14.85,0,0,0,122,76.39a15.12,15.12,0,0,0,11.48-4.82q4.56-4.81,4.56-12.62,0-7.65-4.56-12.38A15.3,15.3,0,0,0,122,41.83Z"
                                        style="fill: #eeeef0" />
                                    <rect y="29.77" width="14.69" height="58.56" style="fill: #eeeef0" />
                                    <polygon
                                        points="226.39 62.27 232.8 68.67 282.23 118.11 163.48 89.2 196.84 55.84 190.43 49.44 140.99 0 259.75 28.91 226.39 62.27"
                                        style="fill: #3d63dd" />
                                </svg>
                            </a>

                            <p class="mb-8 text-body-dark-11">
                                We create digital experiences for brands and companies by using
                                technology.
                            </p>

                            <div class="-mx-3 flex items-center">
                                <a href="javascript:void(0)"
                                    class="px-3 text-body-dark-11 hover:text-primary text-[22px] leading-none">
                                    <i class="lni lni-facebook-fill"></i>
                                </a>

                                <a href="javascript:void(0)"
                                    class="px-3 text-body-dark-11 hover:text-primary text-[22px] leading-none">
                                    <i class="lni lni-twitter-original"></i>
                                </a>

                                <a href="javascript:void(0)"
                                    class="px-3 text-body-dark-11 hover:text-primary text-[22px] leading-none">
                                    <i class="lni lni-instagram-original"></i>
                                </a>

                                <a href="javascript:void(0)"
                                    class="px-3 text-body-dark-11 hover:text-primary text-[22px] leading-none">
                                    <i class="lni lni-linkedin-original"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="col-6 lg:col-2">
                        <div class="w-full">
                            <h4 class="mb-9 text-lg font-semibold text-inherit">Solutions</h4>
                            <ul>
                                <li>
                                    <a href="javascript:void(0)"
                                        class="mb-3 inline-block text-body-dark-11 hover:text-primary">Marketing</a>
                                </li>
                                <li>
                                    <a href="javascript:void(0)"
                                        class="mb-3 inline-block text-body-dark-11 hover:text-primary">Analytics</a>
                                </li>
                                <li>
                                    <a href="javascript:void(0)"
                                        class="mb-3 inline-block text-body-dark-11 hover:text-primary">Commerce</a>
                                </li>
                                <li>
                                    <a href="javascript:void(0)"
                                        class="mb-3 inline-block text-body-dark-11 hover:text-primary">Insights</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-6 lg:col-2">
                        <div class="w-full">
                            <h4 class="mb-9 text-lg font-semibold text-inherit">Support</h4>
                            <ul>
                                <li>
                                    <a href="javascript:void(0)"
                                        class="mb-3 inline-block text-body-dark-11 hover:text-primary">Pricing</a>
                                </li>
                                <li>
                                    <a href="javascript:void(0)"
                                        class="mb-3 inline-block text-body-dark-11 hover:text-primary">Documentation</a>
                                </li>
                                <li>
                                    <a href="javascript:void(0)"
                                        class="mb-3 inline-block text-body-dark-11 hover:text-primary">Guides</a>
                                </li>
                                <li>
                                    <a href="javascript:void(0)"
                                        class="mb-3 inline-block text-body-dark-11 hover:text-primary">API Status</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-12 -order-3 lg:col-4 lg:order-1">
                        <div class="w-full">
                            <h4 class="mb-9 text-lg font-semibold text-inherit">Subscribe</h4>

                            <p class="text-body-dark-11">
                                Subscribe to our newsletter for the latest updates
                            </p>

                            <form action="#" method="POST" target="_blank" class="mt-8 flex">
                                <input type="email" name="email"
                                    class="inline-block flex-grow px-5 py-3 rounded-md rounded-e-none border border-solid border-alpha-dark text-inherit text-base focus:border-primary"
                                    placeholder="Email address" required />

                                <button type="submit"
                                    class="inline-block py-3 w-[50px] rounded-md rounded-s-none text-center text-lg/none bg-primary text-primary-color hover:bg-primary-light-10 dark:hover:bg-primary-dark-10 focus:bg-primary-light-10 dark:focus:bg-primary-dark-10">
                                    <i class="lni lni-envelope"></i>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div class="w-full border-t border-solid border-alpha-dark"></div>
            <div class="container py-8">
                <div class="flex flex-wrap">
                    <div class="w-full md:w-1/2">
                        <div class="my-1">
                            <div class="flex flex-wrap justify-center gap-x-3 md:justify-start">
                                <a href="javascript:void(0)" class="text-body-dark-11 hover:text-body-dark-12">Privacy
                                    Policy</a>
                                <a href="javascript:void(0)" class="text-body-dark-11 hover:text-body-dark-12">Legal
                                    Notice</a>
                                <a href="javascript:void(0)" class="text-body-dark-11 hover:text-body-dark-12">Terms of
                                    Service</a>
                            </div>
                        </div>
                    </div>

                    <div class="w-full md:w-1/2">
                        <div class="my-1 flex justify-center md:justify-end">
                            <p class="text-body-dark-11">
                                &#169; 2024 Inazuma Inc. All rights reserved. Distributed by <a
                                    href="https://themewagon.com" target="_blank">ThemeWagon</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>

        <button type="button"
            class="inline-flex w-12 h-12 rounded-md items-center justify-center text-lg/none bg-primary text-primary-color hover:bg-primary-light-10 dark:hover:bg-primary-dark-10 focus:bg-primary-light-10 dark:focus:bg-primary-dark-10 fixed bottom-[117px] right-[20px] hover:-translate-y-1 opacity-100 visible z-50 is-hided"
            data-web-trigger="scroll-top" aria-label="Scroll to top">
            <i class="lni lni-chevron-up"></i>
        </button>
</template>
<style lang="css" scoped>
*,
::before,
::after {
    box-sizing: border-box;
    /* 1 */
    border-width: 0;
    /* 2 */
    border-style: solid;
    /* 2 */
    border-color: #e5e7eb;
    /* 2 */
}

::before,
::after {
    --tw-content: '';
}

/*
1. Use a consistent sensible line-height in all browsers.
2. Prevent adjustments of font size after orientation changes in iOS.
3. Use a more readable tab size.
4. Use the user's configured `sans` font-family by default.
5. Use the user's configured `sans` font-feature-settings by default.
6. Use the user's configured `sans` font-variation-settings by default.
7. Disable tap highlights on iOS
*/

html,
:host {
    line-height: 1.5;
    /* 1 */
    -webkit-text-size-adjust: 100%;
    /* 2 */
    -moz-tab-size: 4;
    /* 3 */
    -o-tab-size: 4;
    tab-size: 4;
    /* 3 */
    font-family: Inter, sans-serif;
    /* 4 */
    font-feature-settings: normal;
    /* 5 */
    font-variation-settings: normal;
    /* 6 */
    -webkit-tap-highlight-color: transparent;
    /* 7 */
}

/*
1. Remove the margin in all browsers.
2. Inherit line-height from `html` so users can set them as a class directly on the `html` element.
*/

body {
    margin: 0;
    /* 1 */
    line-height: inherit;
    /* 2 */
}

/*
1. Add the correct height in Firefox.
2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)
3. Ensure horizontal rules are visible by default.
*/

hr {
    height: 0;
    /* 1 */
    color: inherit;
    /* 2 */
    border-top-width: 1px;
    /* 3 */
}

/*
Add the correct text decoration in Chrome, Edge, and Safari.
*/

abbr:where([title]) {
    -webkit-text-decoration: underline dotted;
    text-decoration: underline dotted;
}

/*
Remove the default font size and weight for headings.
*/

h1,
h2,
h3,
h4,
h5,
h6 {
    font-size: inherit;
    font-weight: inherit;
}

/*
Reset links to optimize for opt-in styling instead of opt-out.
*/

a {
    color: inherit;
    text-decoration: inherit;
}

/*
Add the correct font weight in Edge and Safari.
*/

b,
strong {
    font-weight: bolder;
}

/*
1. Use the user's configured `mono` font-family by default.
2. Use the user's configured `mono` font-feature-settings by default.
3. Use the user's configured `mono` font-variation-settings by default.
4. Correct the odd `em` font sizing in all browsers.
*/

code,
kbd,
samp,
pre {
    font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
    /* 1 */
    font-feature-settings: normal;
    /* 2 */
    font-variation-settings: normal;
    /* 3 */
    font-size: 1em;
    /* 4 */
}

/*
Add the correct font size in all browsers.
*/

small {
    font-size: 80%;
}

/*
Prevent `sub` and `sup` elements from affecting the line height in all browsers.
*/

sub,
sup {
    font-size: 75%;
    line-height: 0;
    position: relative;
    vertical-align: baseline;
}

sub {
    bottom: -0.25em;
}

sup {
    top: -0.5em;
}

/*
1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)
2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)
3. Remove gaps between table borders by default.
*/

table {
    text-indent: 0;
    /* 1 */
    border-color: inherit;
    /* 2 */
    border-collapse: collapse;
    /* 3 */
}

/*
1. Change the font styles in all browsers.
2. Remove the margin in Firefox and Safari.
3. Remove default padding in all browsers.
*/

button,
input,
optgroup,
select,
textarea {
    font-family: inherit;
    /* 1 */
    font-feature-settings: inherit;
    /* 1 */
    font-variation-settings: inherit;
    /* 1 */
    font-size: 100%;
    /* 1 */
    font-weight: inherit;
    /* 1 */
    line-height: inherit;
    /* 1 */
    letter-spacing: inherit;
    /* 1 */
    color: inherit;
    /* 1 */
    margin: 0;
    /* 2 */
    padding: 0;
    /* 3 */
}

/*
Remove the inheritance of text transform in Edge and Firefox.
*/

button,
select {
    text-transform: none;
}

/*
1. Correct the inability to style clickable types in iOS and Safari.
2. Remove default button styles.
*/

button,
input:where([type='button']),
input:where([type='reset']),
input:where([type='submit']) {
    -webkit-appearance: button;
    appearance: button;
    /* 1 */
    background-color: transparent;
    /* 2 */
    background-image: none;
    /* 2 */
}

/*
Use the modern Firefox focus style for all focusable elements.
*/

:-moz-focusring {
    outline: auto;
}

/*
Remove the additional `:invalid` styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)
*/

:-moz-ui-invalid {
    box-shadow: none;
}

/*
Add the correct vertical alignment in Chrome and Firefox.
*/

progress {
    vertical-align: baseline;
}

/*
Correct the cursor style of increment and decrement buttons in Safari.
*/

::-webkit-inner-spin-button,
::-webkit-outer-spin-button {
    height: auto;
}

/*
1. Correct the odd appearance in Chrome and Safari.
2. Correct the outline style in Safari.
*/

[type='search'] {
    -webkit-appearance: textfield;
    appearance: textfield;
    /* 1 */
    outline-offset: -2px;
    /* 2 */
}

/*
Remove the inner padding in Chrome and Safari on macOS.
*/

::-webkit-search-decoration {
    -webkit-appearance: none;
}

/*
1. Correct the inability to style clickable types in iOS and Safari.
2. Change font properties to `inherit` in Safari.
*/

::-webkit-file-upload-button {
    -webkit-appearance: button;
    /* 1 */
    font: inherit;
    /* 2 */
}

/*
Add the correct display in Chrome and Safari.
*/

summary {
    display: list-item;
}

/*
Removes the default spacing and border for appropriate elements.
*/

blockquote,
dl,
dd,
h1,
h2,
h3,
h4,
h5,
h6,
hr,
figure,
p,
pre {
    margin: 0;
}

fieldset {
    margin: 0;
    padding: 0;
}

legend {
    padding: 0;
}

ol,
ul,
menu {
    list-style: none;
    margin: 0;
    padding: 0;
}

/*
Reset default styling for dialogs.
*/

dialog {
    padding: 0;
}

/*
Prevent resizing textareas horizontally by default.
*/

textarea {
    resize: vertical;
}

/*
1. Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)
2. Set the default placeholder color to the user's configured gray 400 color.
*/

input::-moz-placeholder,
textarea::-moz-placeholder {
    opacity: 1;
    /* 1 */
    color: #9ca3af;
    /* 2 */
}

input::placeholder,
textarea::placeholder {
    opacity: 1;
    /* 1 */
    color: #9ca3af;
    /* 2 */
}

/*
Set the default cursor for buttons.
*/

button,
[role="button"] {
    cursor: pointer;
}

/*
Make sure disabled buttons don't get the pointer cursor.
*/

:disabled {
    cursor: default;
}

/*
1. Make replaced elements `display: block` by default. (https://github.com/mozdevs/cssremedy/issues/14)
2. Add `vertical-align: middle` to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)
   This can trigger a poorly considered lint error in some tools but is included by design.
*/

img,
svg,
video,
canvas,
audio,
iframe,
embed,
object {
    display: block;
}

/*
Constrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)
*/

img,
video {
    max-width: 100%;
    height: auto;
}

/* Make elements with the HTML hidden attribute stay hidden by default */

[hidden] {
    display: none;
}

::-webkit-scrollbar {
    height: 0.75rem;
    width: 0.75rem;
}

::-webkit-scrollbar-track {
    --tw-bg-opacity: 1;
    background-color: rgb(253 253 254 / var(--tw-bg-opacity));
}

:where([data-web-theme=dark], [data-web-theme=dark] *)::-webkit-scrollbar-track {
    --tw-bg-opacity: 1;
    background-color: rgb(29 34 46 / var(--tw-bg-opacity));
}

::-webkit-scrollbar-thumb {
    border-radius: 0.25rem;
    border-width: 2px;
    border-style: solid;
    --tw-border-opacity: 1;
    border-color: rgb(253 253 254 / var(--tw-border-opacity));
    --tw-bg-opacity: 1;
    background-color: rgb(139 141 152 / var(--tw-bg-opacity));
}

:where([data-web-theme=dark], [data-web-theme=dark] *)::-webkit-scrollbar-thumb {
    --tw-border-opacity: 1;
    border-color: rgb(29 34 46 / var(--tw-border-opacity));
    --tw-bg-opacity: 1;
    background-color: rgb(114 116 127 / var(--tw-bg-opacity));
}

::-webkit-scrollbar-corner {
    background-color: transparent;
}

*,
*::before,
*::after {
    transition-property: all;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 400ms;
}

html {
    scroll-behavior: smooth;
    color-scheme: light;
    font-family: "Inter", sans-serif;
}

[data-web-theme="dark"] {
    color-scheme: dark;
}

body {
    --tw-bg-opacity: 1;
    background-color: rgb(253 253 254 / var(--tw-bg-opacity));
    font-family: Inter, sans-serif;
    font-size: 14px;
    line-height: 1.5;
}

@media (min-width: 1024px) {
    body {
        font-size: 1rem;
        line-height: 1.5rem;
    }
}

body:where([data-web-theme=dark], [data-web-theme=dark] *) {
    --tw-bg-opacity: 1;
    background-color: rgb(29 34 46 / var(--tw-bg-opacity));
}

[tabindex] {
    outline: 2px solid transparent;
    outline-offset: 2px;
}

img {
    max-width: 100%;
}

a {
    text-wrap: balance;
    overflow-wrap: break-word;
    --tw-text-opacity: 1;
    color: rgb(57 91 199 / var(--tw-text-opacity));
    text-decoration-line: none;
}

a:hover {
    --tw-text-opacity: 1;
    color: rgb(54 87 195 / var(--tw-text-opacity));
}

a:where([data-web-theme=dark], [data-web-theme=dark] *) {
    --tw-text-opacity: 1;
    color: rgb(148 181 255 / var(--tw-text-opacity));
}

a:hover:where([data-web-theme=dark], [data-web-theme=dark] *) {
    --tw-text-opacity: 1;
    color: rgb(49 84 205 / var(--tw-text-opacity));
}

a,
button {
    cursor: pointer;
}

button,
input,
select,
textarea {
    border-width: 0px;
    background-color: inherit;
    color: inherit;
    outline: 2px solid transparent;
    outline-offset: 2px;
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
}

ul,
ol {
    list-style-type: none;
}

strong {
    font-weight: 700;
    --tw-text-opacity: 1;
    color: rgb(30 31 36 / var(--tw-text-opacity));
}

strong:where([data-web-theme=dark], [data-web-theme=dark] *) {
    --tw-text-opacity: 1;
    color: rgb(238 238 240 / var(--tw-text-opacity));
}

h1,
h2,
h3,
h4,
h5,
h6 {
    margin: 0px;
    text-wrap: pretty;
    font-weight: 700;
    --tw-text-opacity: 1;
    color: rgb(30 31 36 / var(--tw-text-opacity));
}

h1:where([data-web-theme=dark], [data-web-theme=dark] *),
h2:where([data-web-theme=dark], [data-web-theme=dark] *),
h3:where([data-web-theme=dark], [data-web-theme=dark] *),
h4:where([data-web-theme=dark], [data-web-theme=dark] *),
h5:where([data-web-theme=dark], [data-web-theme=dark] *),
h6:where([data-web-theme=dark], [data-web-theme=dark] *) {
    --tw-text-opacity: 1;
    color: rgb(238 238 240 / var(--tw-text-opacity));
}

h1 {
    font-size: 3rem;
    line-height: 1.25;
}

h2 {
    font-size: 2.25rem;
    line-height: 1.25;
}

h3 {
    font-size: 1.875rem;
    line-height: 1.25;
}

h4 {
    font-size: 1.5rem;
    line-height: 1.25;
}

h5 {
    font-size: 1.25rem;
    line-height: 1.25;
}

h6 {
    font-size: 0.875rem;
    line-height: 1.25;
}

p {
    margin: 0px;
    font-size: 1em;
    line-height: 1.5;
}

p+p {
    margin-top: 1.25rem;
}

*,
::before,
::after {
    --tw-border-spacing-x: 0;
    --tw-border-spacing-y: 0;
    --tw-translate-x: 0;
    --tw-translate-y: 0;
    --tw-rotate: 0;
    --tw-skew-x: 0;
    --tw-skew-y: 0;
    --tw-scale-x: 1;
    --tw-scale-y: 1;
    --tw-pan-x: ;
    --tw-pan-y: ;
    --tw-pinch-zoom: ;
    --tw-scroll-snap-strictness: proximity;
    --tw-gradient-from-position: ;
    --tw-gradient-via-position: ;
    --tw-gradient-to-position: ;
    --tw-ordinal: ;
    --tw-slashed-zero: ;
    --tw-numeric-figure: ;
    --tw-numeric-spacing: ;
    --tw-numeric-fraction: ;
    --tw-ring-inset: ;
    --tw-ring-offset-width: 0px;
    --tw-ring-offset-color: #fff;
    --tw-ring-color: rgb(59 130 246 / 0.5);
    --tw-ring-offset-shadow: 0 0 #0000;
    --tw-ring-shadow: 0 0 #0000;
    --tw-shadow: 0 0 #0000;
    --tw-shadow-colored: 0 0 #0000;
    --tw-blur: ;
    --tw-brightness: ;
    --tw-contrast: ;
    --tw-grayscale: ;
    --tw-hue-rotate: ;
    --tw-invert: ;
    --tw-saturate: ;
    --tw-sepia: ;
    --tw-drop-shadow: ;
    --tw-backdrop-blur: ;
    --tw-backdrop-brightness: ;
    --tw-backdrop-contrast: ;
    --tw-backdrop-grayscale: ;
    --tw-backdrop-hue-rotate: ;
    --tw-backdrop-invert: ;
    --tw-backdrop-opacity: ;
    --tw-backdrop-saturate: ;
    --tw-backdrop-sepia: ;
    --tw-contain-size: ;
    --tw-contain-layout: ;
    --tw-contain-paint: ;
    --tw-contain-style: ;
}

::backdrop {
    --tw-border-spacing-x: 0;
    --tw-border-spacing-y: 0;
    --tw-translate-x: 0;
    --tw-translate-y: 0;
    --tw-rotate: 0;
    --tw-skew-x: 0;
    --tw-skew-y: 0;
    --tw-scale-x: 1;
    --tw-scale-y: 1;
    --tw-pan-x: ;
    --tw-pan-y: ;
    --tw-pinch-zoom: ;
    --tw-scroll-snap-strictness: proximity;
    --tw-gradient-from-position: ;
    --tw-gradient-via-position: ;
    --tw-gradient-to-position: ;
    --tw-ordinal: ;
    --tw-slashed-zero: ;
    --tw-numeric-figure: ;
    --tw-numeric-spacing: ;
    --tw-numeric-fraction: ;
    --tw-ring-inset: ;
    --tw-ring-offset-width: 0px;
    --tw-ring-offset-color: #fff;
    --tw-ring-color: rgb(59 130 246 / 0.5);
    --tw-ring-offset-shadow: 0 0 #0000;
    --tw-ring-shadow: 0 0 #0000;
    --tw-shadow: 0 0 #0000;
    --tw-shadow-colored: 0 0 #0000;
    --tw-blur: ;
    --tw-brightness: ;
    --tw-contrast: ;
    --tw-grayscale: ;
    --tw-hue-rotate: ;
    --tw-invert: ;
    --tw-saturate: ;
    --tw-sepia: ;
    --tw-drop-shadow: ;
    --tw-backdrop-blur: ;
    --tw-backdrop-brightness: ;
    --tw-backdrop-contrast: ;
    --tw-backdrop-grayscale: ;
    --tw-backdrop-hue-rotate: ;
    --tw-backdrop-invert: ;
    --tw-backdrop-opacity: ;
    --tw-backdrop-saturate: ;
    --tw-backdrop-sepia: ;
    --tw-contain-size: ;
    --tw-contain-layout: ;
    --tw-contain-paint: ;
    --tw-contain-style: ;
}

.container {
    width: 100%;
    margin-right: auto;
    margin-left: auto;
    padding-right: 1.25rem;
    padding-left: 1.25rem;
}

@media (min-width: 640px) {
    .container {
        max-width: 640px;
    }
}

@media (min-width: 768px) {
    .container {
        max-width: 768px;
    }
}

@media (min-width: 1024px) {
    .container {
        max-width: 1024px;
    }
}

@media (min-width: 1280px) {
    .container {
        max-width: 1280px;
    }
}

@media (min-width: 1536px) {
    .container {
        max-width: 1536px;
    }
}

.disabled,
:disabled {
    pointer-events: none !important;
    -webkit-user-select: none !important;
    -moz-user-select: none !important;
    user-select: none !important;
    opacity: 0.6 !important;
}

.page-loading {
    background-image: radial-gradient(circle at top right,
            rgba(61, 99, 221, 0.1) 0%,
            rgba(61, 99, 221, 0.1) 28%,
            rgba(61, 99, 221, 0.075) 28%,
            rgba(61, 99, 221, 0.075) 45%,
            rgba(61, 99, 221, 0.05) 45%,
            rgba(61, 99, 221, 0.05) 63%,
            rgba(61, 99, 221, 0.025) 63%,
            rgba(61, 99, 221, 0.025) 100%);
}

.page-loading.hide {
    pointer-events: none;
    visibility: hidden;
    opacity: 0;
}

.grid-loader,
.grid-loader div {
    box-sizing: border-box;
}

.grid-loader {
    position: relative;
    display: inline-block;
    height: 80px;
    width: 80px;
}

.grid-loader div {
    position: absolute;
    height: 1rem;
    width: 1rem;
    border-radius: 9999px;
    --tw-bg-opacity: 1;
    background-color: rgb(61 99 221 / var(--tw-bg-opacity));
    animation: grid-loader 1.2s linear infinite;
}

.grid-loader div:nth-child(1) {
    top: 0.5rem;
    left: 0.5rem;
    animation-delay: 0s;
}

.grid-loader div:nth-child(2) {
    top: 0.5rem;
    left: 2rem;
    animation-delay: -0.4s;
}

.grid-loader div:nth-child(3) {
    top: 0.5rem;
    left: 3.5rem;
    animation-delay: -0.8s;
}

.grid-loader div:nth-child(4) {
    top: 2rem;
    left: 0.5rem;
    animation-delay: -0.4s;
}

.grid-loader div:nth-child(5) {
    top: 2rem;
    left: 2rem;
    animation-delay: -0.8s;
}

.grid-loader div:nth-child(6) {
    top: 2rem;
    left: 3.5rem;
    animation-delay: -1.2s;
}

.grid-loader div:nth-child(7) {
    top: 3.5rem;
    left: 0.5rem;
    animation-delay: -0.8s;
}

.grid-loader div:nth-child(8) {
    top: 3.5rem;
    left: 2rem;
    animation-delay: -1.2s;
}

.grid-loader div:nth-child(9) {
    top: 3.5rem;
    left: 3.5rem;
    animation-delay: -1.6s;
}

@keyframes grid-loader {

    0%,
    100% {
        opacity: 1;
    }

    50% {
        opacity: 0.5;
    }
}

.ic-navbar {
    border-width: 0px;
    border-bottom-width: 1px;
    border-color: transparent;
}

.ic-navbar.sticky {
    position: fixed;
    z-index: 9999;
    border-color: #00073527;
    background-color: rgb(253 253 254 / var(--tw-bg-opacity));
    --tw-bg-opacity: 0.75;
    --tw-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
    --tw-shadow-colored: 0 4px 6px -1px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color);
    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
    --tw-backdrop-blur: blur(8px);
    -webkit-backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);
    backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);
}

.ic-navbar.sticky:where([data-web-theme=dark], [data-web-theme=dark] *) {
    border-color: #d6dbfc2f;
    background-color: rgb(29 34 46 / var(--tw-bg-opacity));
    --tw-bg-opacity: 0.7;
}

.ic-navbar.sticky .ic-navbar-logo {
    --tw-text-opacity: 1;
    color: rgb(30 31 36 / var(--tw-text-opacity));
}

.ic-navbar.sticky .ic-navbar-logo:where([data-web-theme=dark], [data-web-theme=dark] *) {
    --tw-text-opacity: 1;
    color: rgb(238 238 240 / var(--tw-text-opacity));
}

.ic-navbar.sticky .ic-navbar-logo #NavbarBrandIcon {
    fill: #3d63dd;
}

.ic-navbar.sticky .ic-navbar-toggler {
    --tw-text-opacity: 1;
    color: rgb(30 31 36 / var(--tw-text-opacity));
}

.ic-navbar.sticky .ic-navbar-toggler:where([data-web-theme=dark], [data-web-theme=dark] *) {
    --tw-text-opacity: 1;
    color: rgb(238 238 240 / var(--tw-text-opacity));
}

.ic-navbar.menu-show .ic-navbar-collapse {
    z-index: -1;
    display: block;
}

@media (min-width: 1024px) {
    .ic-navbar.sticky .ic-page-scroll {
        --tw-text-opacity: 1;
        color: rgb(30 31 36 / var(--tw-text-opacity));
    }

    .ic-navbar.sticky .ic-page-scroll:hover {
        --tw-text-opacity: 1;
        color: rgb(61 99 221 / var(--tw-text-opacity));
        opacity: 1;
    }

    .ic-navbar.sticky .ic-page-scroll:where([data-web-theme=dark], [data-web-theme=dark] *) {
        --tw-text-opacity: 1;
        color: rgb(238 238 240 / var(--tw-text-opacity));
    }
}

.ic-page-scroll.active {
    --tw-text-opacity: 1;
    color: rgb(61 99 221 / var(--tw-text-opacity));
}

@media (min-width: 1024px) {
    .ic-page-scroll.active {
        --tw-text-opacity: 1;
        color: rgb(255 255 255 / var(--tw-text-opacity));
        opacity: 0.7;
    }

    .ic-navbar.sticky .ic-page-scroll.active {
        --tw-text-opacity: 1;
        color: rgb(61 99 221 / var(--tw-text-opacity));
        opacity: 1;
    }
}

.ic-navbar.sticky [data-web-trigger="web-theme"] {
    --tw-text-opacity: 1;
    color: rgb(30 31 36 / var(--tw-text-opacity));
}

.ic-navbar.sticky [data-web-trigger="web-theme"]:where([data-web-theme=dark], [data-web-theme=dark] *) {
    --tw-text-opacity: 1;
    color: rgb(238 238 240 / var(--tw-text-opacity));
}

.ic-navbar.sticky .btn-navbar {
    --tw-bg-opacity: 1;
    background-color: rgb(61 99 221 / var(--tw-bg-opacity));
}

.ic-navbar.sticky .btn-navbar:hover {
    --tw-bg-opacity: 1;
    background-color: rgb(54 87 195 / var(--tw-bg-opacity));
    --tw-text-opacity: 1;
    color: rgb(255 255 255 / var(--tw-text-opacity));
}

.ic-navbar.sticky .btn-navbar:hover:where([data-web-theme=dark], [data-web-theme=dark] *) {
    --tw-bg-opacity: 1;
    background-color: rgb(49 84 205 / var(--tw-bg-opacity));
}

#home {
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-image: radial-gradient(circle at top right,
            rgba(255, 255, 255, 0.1) 0%,
            rgba(255, 255, 255, 0.1) 28%,
            rgba(255, 255, 255, 0.075) 28%,
            rgba(255, 255, 255, 0.075) 45%,
            rgba(255, 255, 255, 0.05) 45%,
            rgba(255, 255, 255, 0.05) 63%,
            rgba(255, 255, 255, 0.025) 63%,
            rgba(255, 255, 255, 0.025) 100%);
}

.section-area {
    position: relative;
    padding-top: 6rem;
    padding-bottom: 6rem;
    --tw-text-opacity: 1;
    color: rgb(98 99 108 / var(--tw-text-opacity));
}

.section-area:where([data-web-theme=dark], [data-web-theme=dark] *) {
    --tw-text-opacity: 1;
    color: rgb(180 182 191 / var(--tw-text-opacity));
}

.section-area:nth-child(odd) {
    background-color: #00005506;
}

.section-area:nth-child(odd):where([data-web-theme=dark], [data-web-theme=dark] *) {
    background-color: #adc5f30f;
}

.tabs-nav .tabs-link.active {
    --tw-bg-opacity: 1;
    background-color: rgb(61 99 221 / var(--tw-bg-opacity));
    --tw-text-opacity: 1;
    color: rgb(255 255 255 / var(--tw-text-opacity));
}

.tabs .tabs-content {
    display: block;
}

.tabs .tabs-content.hide {
    display: none;
}

.portfolio-menu button.active {
    --tw-bg-opacity: 1;
    background-color: rgb(61 99 221 / var(--tw-bg-opacity));
    --tw-text-opacity: 1;
    color: rgb(255 255 255 / var(--tw-text-opacity));
}

.portfolio.show {
    display: block;
}

.portfolio.hide {
    display: none;
}

#call-action {
    background-image: radial-gradient(circle at top left,
            rgba(255, 255, 255, 0.1) 0%,
            rgba(255, 255, 255, 0.1) 28%,
            rgba(255, 255, 255, 0.075) 28%,
            rgba(255, 255, 255, 0.075) 45%,
            rgba(255, 255, 255, 0.05) 45%,
            rgba(255, 255, 255, 0.05) 63%,
            rgba(255, 255, 255, 0.025) 63%,
            rgba(255, 255, 255, 0.025) 100%);
}

.common-carousel .swiper-button-prev,
.common-carousel .swiper-button-next {
    position: static !important;
    margin: 0px;
    height: 3rem;
    width: 3rem;
    border-radius: 0.5rem;
    --tw-bg-opacity: 1;
    background-color: rgb(252 252 253 / var(--tw-bg-opacity));
    font-size: 22px;
    --tw-text-opacity: 1;
    color: rgb(30 31 36 / var(--tw-text-opacity));
    --tw-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
    --tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);
    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}

.common-carousel .swiper-button-prev::after,
.common-carousel .swiper-button-next::after {
    content: var(--tw-content);
    display: none;
}

.common-carousel .swiper-button-prev:hover,
.common-carousel .swiper-button-next:hover {
    --tw-bg-opacity: 1;
    background-color: rgb(61 99 221 / var(--tw-bg-opacity));
    --tw-text-opacity: 1;
    color: rgb(255 255 255 / var(--tw-text-opacity));
}

.common-carousel .swiper-button-prev:focus,
.common-carousel .swiper-button-next:focus {
    --tw-bg-opacity: 1;
    background-color: rgb(61 99 221 / var(--tw-bg-opacity));
    --tw-text-opacity: 1;
    color: rgb(255 255 255 / var(--tw-text-opacity));
}

.common-carousel .swiper-button-prev:where([data-web-theme=dark], [data-web-theme=dark] *),
.common-carousel .swiper-button-next:where([data-web-theme=dark], [data-web-theme=dark] *) {
    background-color: rgb(238 238 240 / 0.1);
    --tw-text-opacity: 1;
    color: rgb(238 238 240 / var(--tw-text-opacity));
}

[data-web-trigger="scroll-top"].is-hided {
    visibility: hidden;
    opacity: 0;
}

.pointer-events-auto {
    pointer-events: auto;
}

.visible {
    visibility: visible;
}

.invisible {
    visibility: hidden;
}

.fixed {
    position: fixed;
}

.absolute {
    position: absolute;
}

.relative {
    position: relative;
}

.-left-9 {
    left: -2.25rem;
}

.-right-6 {
    right: -1.5rem;
}

.-top-6 {
    top: -1.5rem;
}

.bottom-0 {
    bottom: 0px;
}

.bottom-5 {
    bottom: 1.25rem;
}

.bottom-\[117px\] {
    bottom: 117px;
}

.left-0 {
    left: 0px;
}

.left-1\/2 {
    left: 50%;
}

.left-5 {
    left: 1.25rem;
}

.right-0 {
    right: 0px;
}

.right-4 {
    right: 1rem;
}

.right-5 {
    right: 1.25rem;
}

.right-\[20px\] {
    right: 20px;
}

.top-0 {
    top: 0px;
}

.top-1\.5 {
    top: 0.375rem;
}

.top-1\/2 {
    top: 50%;
}

.top-5 {
    top: 1.25rem;
}

.top-\[80px\] {
    top: 80px;
}

.-z-10 {
    z-index: -10;
}

.-z-\[1\] {
    z-index: -1;
}

.z-10 {
    z-index: 10;
}

.z-40 {
    z-index: 40;
}

.z-50 {
    z-index: 50;
}

.z-\[-1\] {
    z-index: -1;
}

.z-\[99999\] {
    z-index: 99999;
}

.-order-3 {
    order: -3;
}

.order-first {
    order: -9999;
}

.m-0 {
    margin: 0px;
}

.-mx-3 {
    margin-left: -0.75rem;
    margin-right: -0.75rem;
}

.-mx-5 {
    margin-left: -1.25rem;
    margin-right: -1.25rem;
}

.mx-8 {
    margin-left: 2rem;
    margin-right: 2rem;
}

.mx-auto {
    margin-left: auto;
    margin-right: auto;
}

.my-1 {
    margin-top: 0.25rem;
    margin-bottom: 0.25rem;
}

.my-8 {
    margin-top: 2rem;
    margin-bottom: 2rem;
}

.-mt-\[12rem\] {
    margin-top: -12rem;
}

.mb-1 {
    margin-bottom: 0.25rem;
}

.mb-10 {
    margin-bottom: 2.5rem;
}

.mb-12 {
    margin-bottom: 3rem;
}

.mb-2 {
    margin-bottom: 0.5rem;
}

.mb-3 {
    margin-bottom: 0.75rem;
}

.mb-4 {
    margin-bottom: 1rem;
}

.mb-5 {
    margin-bottom: 1.25rem;
}

.mb-6 {
    margin-bottom: 1.5rem;
}

.mb-8 {
    margin-bottom: 2rem;
}

.mb-9 {
    margin-bottom: 2.25rem;
}

.mb-\[3\.750rem\] {
    margin-bottom: 3.750rem;
}

.ml-5 {
    margin-left: 1.25rem;
}

.mr-4 {
    margin-right: 1rem;
}

.mt-11 {
    margin-top: 2.75rem;
}

.mt-16 {
    margin-top: 4rem;
}

.mt-3 {
    margin-top: 0.75rem;
}

.mt-4 {
    margin-top: 1rem;
}

.mt-6 {
    margin-top: 1.5rem;
}

.mt-8 {
    margin-top: 2rem;
}

.mt-\[60px\] {
    margin-top: 60px;
}

.block {
    display: block;
}

.inline-block {
    display: inline-block;
}

.flex {
    display: flex;
}

.inline-flex {
    display: inline-flex;
}

.grid {
    display: grid;
}

.hidden {
    display: none;
}

.aspect-\[3\/2\] {
    aspect-ratio: 3/2;
}

.aspect-\[4\/3\] {
    aspect-ratio: 4/3;
}

.aspect-square {
    aspect-ratio: 1 / 1;
}

.aspect-video {
    aspect-ratio: 16 / 9;
}

.h-10 {
    height: 2.5rem;
}

.h-12 {
    height: 3rem;
}

.h-\[120px\] {
    height: 120px;
}

.h-\[40px\] {
    height: 40px;
}

.h-\[500px\] {
    height: 500px;
}

.h-\[50px\] {
    height: 50px;
}

.h-\[70px\] {
    height: 70px;
}

.h-\[80px\] {
    height: 80px;
}

.h-auto {
    height: auto;
}

.h-full {
    height: 100%;
}

.w-10 {
    width: 2.5rem;
}

.w-12 {
    width: 3rem;
}

.w-20 {
    width: 5rem;
}

.w-60 {
    width: 15rem;
}

.w-\[120px\] {
    width: 120px;
}

.w-\[50px\] {
    width: 50px;
}

.w-\[60px\] {
    width: 60px;
}

.w-\[70px\] {
    width: 70px;
}

.w-\[80px\] {
    width: 80px;
}

.w-full {
    width: 100%;
}

.max-w-\[250px\] {
    max-width: 250px;
}

.max-w-\[480px\] {
    max-width: 480px;
}

.max-w-\[50px\] {
    max-width: 50px;
}

.max-w-\[550px\] {
    max-width: 550px;
}

.max-w-\[600px\] {
    max-width: 600px;
}

.max-w-\[780px\] {
    max-width: 780px;
}

.max-w-\[845px\] {
    max-width: 845px;
}

.max-w-\[900px\] {
    max-width: 900px;
}

.max-w-full {
    max-width: 100%;
}

.flex-grow {
    flex-grow: 1;
}

.-translate-x-1\/2 {
    --tw-translate-x: -50%;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.-translate-y-1\/2 {
    --tw-translate-y: -50%;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.scale-\[0\.15\] {
    --tw-scale-x: 0.15;
    --tw-scale-y: 0.15;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.transform {
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.grid-cols-1 {
    grid-template-columns: repeat(1, minmax(0, 1fr));
}

.flex-col {
    flex-direction: column;
}

.flex-wrap {
    flex-wrap: wrap;
}

.items-center {
    align-items: center;
}

.justify-end {
    justify-content: flex-end;
}

.justify-center {
    justify-content: center;
}

.justify-between {
    justify-content: space-between;
}

.gap-1 {
    gap: 0.25rem;
}

.gap-14 {
    gap: 3.5rem;
}

.gap-2 {
    gap: 0.5rem;
}

.gap-3 {
    gap: 0.75rem;
}

.gap-4 {
    gap: 1rem;
}

.gap-5 {
    gap: 1.25rem;
}

.gap-6 {
    gap: 1.5rem;
}

.gap-x-3 {
    -moz-column-gap: 0.75rem;
    column-gap: 0.75rem;
}

.gap-x-8 {
    -moz-column-gap: 2rem;
    column-gap: 2rem;
}

.gap-y-12 {
    row-gap: 3rem;
}

.overflow-hidden {
    overflow: hidden;
}

.rounded-2xl {
    border-radius: 1rem;
}

.rounded-full {
    border-radius: 9999px;
}

.rounded-lg {
    border-radius: 0.5rem;
}

.rounded-md {
    border-radius: 0.375rem;
}

.rounded-xl {
    border-radius: 0.75rem;
}

.rounded-e-none {
    border-start-end-radius: 0px;
    border-end-end-radius: 0px;
}

.rounded-s-none {
    border-start-start-radius: 0px;
    border-end-start-radius: 0px;
}

.rounded-t-xl {
    border-top-left-radius: 0.75rem;
    border-top-right-radius: 0.75rem;
}

.rounded-tr-xl {
    border-top-right-radius: 0.75rem;
}

.border {
    border-width: 1px;
}

.border-0 {
    border-width: 0px;
}

.border-t {
    border-top-width: 1px;
}

.border-solid {
    border-style: solid;
}

.border-alpha-dark {
    border-color: #d6dbfc2f;
}

.border-alpha-light {
    border-color: #00073527;
}

.\!bg-primary {
    --tw-bg-opacity: 1 !important;
    background-color: rgb(61 99 221 / var(--tw-bg-opacity)) !important;
}

.bg-blue-500 {
    --tw-bg-opacity: 1;
    background-color: rgb(59 130 246 / var(--tw-bg-opacity));
}

.bg-body-light-1 {
    --tw-bg-opacity: 1;
    background-color: rgb(252 252 253 / var(--tw-bg-opacity));
}

.bg-body-light-1\/75 {
    background-color: rgb(252 252 253 / 0.75);
}

.bg-body-light-12\/10 {
    background-color: rgb(30 31 36 / 0.1);
}

.bg-green-400 {
    --tw-bg-opacity: 1;
    background-color: rgb(74 222 128 / var(--tw-bg-opacity));
}

.bg-primary {
    --tw-bg-opacity: 1;
    background-color: rgb(61 99 221 / var(--tw-bg-opacity));
}

.bg-primary-color {
    --tw-bg-opacity: 1;
    background-color: rgb(255 255 255 / var(--tw-bg-opacity));
}

.bg-primary-color\/\[0\.15\] {
    background-color: rgb(255 255 255 / 0.15);
}

.bg-primary-dark-2 {
    --tw-bg-opacity: 1;
    background-color: rgb(30 37 52 / var(--tw-bg-opacity));
}

.bg-primary-light-1 {
    --tw-bg-opacity: 1;
    background-color: rgb(253 253 254 / var(--tw-bg-opacity));
}

.bg-primary\/10 {
    background-color: rgb(61 99 221 / 0.1);
}

.bg-red-500 {
    --tw-bg-opacity: 1;
    background-color: rgb(239 68 68 / var(--tw-bg-opacity));
}

.bg-transparent {
    background-color: transparent;
}

.bg-opacity-20 {
    --tw-bg-opacity: 0.2;
}

.fill-current {
    fill: currentColor;
}

.fill-indigo-500 {
    fill: #6366f1;
}

.fill-teal-500 {
    fill: #14b8a6;
}

.object-cover {
    -o-object-fit: cover;
    object-fit: cover;
}

.p-4 {
    padding: 1rem;
}

.px-3 {
    padding-left: 0.75rem;
    padding-right: 0.75rem;
}

.px-4 {
    padding-left: 1rem;
    padding-right: 1rem;
}

.px-5 {
    padding-left: 1.25rem;
    padding-right: 1.25rem;
}

.px-6 {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
}

.px-8 {
    padding-left: 2rem;
    padding-right: 2rem;
}

.px-9 {
    padding-left: 2.25rem;
    padding-right: 2.25rem;
}

.py-12 {
    padding-top: 3rem;
    padding-bottom: 3rem;
}

.py-2 {
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
}

.py-20 {
    padding-top: 5rem;
    padding-bottom: 5rem;
}

.py-3 {
    padding-top: 0.75rem;
    padding-bottom: 0.75rem;
}

.py-5 {
    padding-top: 1.25rem;
    padding-bottom: 1.25rem;
}

.py-8 {
    padding-top: 2rem;
    padding-bottom: 2rem;
}

.py-\[6px\] {
    padding-top: 6px;
    padding-bottom: 6px;
}

.pb-10 {
    padding-bottom: 2.5rem;
}

.pl-4 {
    padding-left: 1rem;
}

.pr-\[52px\] {
    padding-right: 52px;
}

.pt-12 {
    padding-top: 3rem;
}

.pt-4 {
    padding-top: 1rem;
}

.pt-8 {
    padding-top: 2rem;
}

.pt-\[120px\] {
    padding-top: 120px;
}

.text-left {
    text-align: left;
}

.text-center {
    text-align: center;
}

.text-3xl {
    font-size: 1.875rem;
    line-height: 2.25rem;
}

.text-\[1\.125rem\] {
    font-size: 1.125rem;
}

.text-\[1\.25rem\] {
    font-size: 1.25rem;
}

.text-\[1\.25rem\]\/tight {
    font-size: 1.25rem;
    line-height: 1.25;
}

.text-\[1\.5rem\] {
    font-size: 1.5rem;
}

.text-\[1\.75rem\] {
    font-size: 1.75rem;
}

.text-\[1\.875rem\] {
    font-size: 1.875rem;
}

.text-\[22px\] {
    font-size: 22px;
}

.text-\[22px\]\/none {
    font-size: 22px;
    line-height: 1;
}

.text-\[24px\]\/none {
    font-size: 24px;
    line-height: 1;
}

.text-\[28px\] {
    font-size: 28px;
}

.text-\[37px\]\/none {
    font-size: 37px;
    line-height: 1;
}

.text-\[55px\] {
    font-size: 55px;
}

.text-base {
    font-size: 1rem;
    line-height: 1.5rem;
}

.text-lg {
    font-size: 1.125rem;
    line-height: 1.75rem;
}

.text-lg\/none {
    font-size: 1.125rem;
    line-height: 1;
}

.text-sm {
    font-size: 0.875rem;
    line-height: 1.25rem;
}

.text-xl {
    font-size: 1.25rem;
    line-height: 1.75rem;
}

.text-xs {
    font-size: 0.75rem;
    line-height: 1rem;
}

.font-bold {
    font-weight: 700;
}

.font-medium {
    font-weight: 500;
}

.font-normal {
    font-weight: 400;
}

.font-semibold {
    font-weight: 600;
}

.leading-\[24px\] {
    line-height: 24px;
}

.leading-none {
    line-height: 1;
}

.leading-snug {
    line-height: 1.375;
}

.leading-tight {
    line-height: 1.25;
}

.\!text-primary-color {
    --tw-text-opacity: 1 !important;
    color: rgb(255 255 255 / var(--tw-text-opacity)) !important;
}

.text-body-dark-11 {
    --tw-text-opacity: 1;
    color: rgb(180 182 191 / var(--tw-text-opacity));
}

.text-body-light-10 {
    --tw-text-opacity: 1;
    color: rgb(128 130 141 / var(--tw-text-opacity));
}

.text-body-light-11 {
    --tw-text-opacity: 1;
    color: rgb(98 99 108 / var(--tw-text-opacity));
}

.text-body-light-12 {
    --tw-text-opacity: 1;
    color: rgb(30 31 36 / var(--tw-text-opacity));
}

.text-inherit {
    color: inherit;
}

.text-primary {
    --tw-text-opacity: 1;
    color: rgb(61 99 221 / var(--tw-text-opacity));
}

.text-primary-color {
    --tw-text-opacity: 1;
    color: rgb(255 255 255 / var(--tw-text-opacity));
}

.text-primary-color\/60 {
    color: rgb(255 255 255 / 0.6);
}

.text-white {
    --tw-text-opacity: 1;
    color: rgb(255 255 255 / var(--tw-text-opacity));
}

.opacity-0 {
    opacity: 0;
}

.opacity-100 {
    opacity: 1;
}

.opacity-75 {
    opacity: 0.75;
}

.shadow-card-1 {
    --tw-shadow: 0px 0px 40px 0px rgba(0, 0, 0, 0.08);
    --tw-shadow-colored: 0px 0px 40px 0px var(--tw-shadow-color);
    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}

.shadow-card-2 {
    --tw-shadow: 0px 10px 20px 0 rgba(0, 0, 0, 0.08);
    --tw-shadow-colored: 0px 10px 20px 0 var(--tw-shadow-color);
    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}

.shadow-lg {
    --tw-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
    --tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);
    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}

.shadow-md {
    --tw-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
    --tw-shadow-colored: 0 4px 6px -1px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color);
    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}

.ring-primary {
    --tw-ring-opacity: 1;
    --tw-ring-color: rgb(61 99 221 / var(--tw-ring-opacity));
}

.grayscale {
    --tw-grayscale: grayscale(100%);
    filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);
}

.filter {
    filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);
}

.row {
    margin-left: -0.75rem;
    margin-right: -0.75rem;
    margin-top: -2rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}

.row>* {
    margin-top: 2rem;
    box-sizing: border-box;
    width: 100%;
    max-width: 100%;
    padding-left: 0.75rem;
    padding-right: 0.75rem;
}

.col-6 {
    width: 50%;
}

.col-12 {
    width: 100%;
}

.hover\:-translate-y-1:hover {
    --tw-translate-y: -0.25rem;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.hover\:bg-green-500:hover {
    --tw-bg-opacity: 1;
    background-color: rgb(34 197 94 / var(--tw-bg-opacity));
}

.hover\:bg-primary:hover {
    --tw-bg-opacity: 1;
    background-color: rgb(61 99 221 / var(--tw-bg-opacity));
}

.hover\:bg-primary-color:hover {
    --tw-bg-opacity: 1;
    background-color: rgb(255 255 255 / var(--tw-bg-opacity));
}

.hover\:bg-primary-light-10:hover {
    --tw-bg-opacity: 1;
    background-color: rgb(54 87 195 / var(--tw-bg-opacity));
}

.hover\:bg-primary-light-5:hover {
    --tw-bg-opacity: 1;
    background-color: rgb(208 223 255 / var(--tw-bg-opacity));
}

.hover\:bg-opacity-100:hover {
    --tw-bg-opacity: 1;
}

.hover\:text-body-dark-12:hover {
    --tw-text-opacity: 1;
    color: rgb(238 238 240 / var(--tw-text-opacity));
}

.hover\:text-primary:hover {
    --tw-text-opacity: 1;
    color: rgb(61 99 221 / var(--tw-text-opacity));
}

.hover\:text-primary-color:hover {
    --tw-text-opacity: 1;
    color: rgb(255 255 255 / var(--tw-text-opacity));
}

.hover\:text-white:hover {
    --tw-text-opacity: 1;
    color: rgb(255 255 255 / var(--tw-text-opacity));
}

.hover\:shadow-lg:hover {
    --tw-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
    --tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);
    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}

.hover\:shadow-xl:hover {
    --tw-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
    --tw-shadow-colored: 0 20px 25px -5px var(--tw-shadow-color), 0 8px 10px -6px var(--tw-shadow-color);
    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}

.hover\:grayscale-0:hover {
    --tw-grayscale: grayscale(0);
    filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);
}

.hover\:invert-0:hover {
    --tw-invert: invert(0);
    filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);
}

.focus\:border-primary:focus {
    --tw-border-opacity: 1;
    border-color: rgb(61 99 221 / var(--tw-border-opacity));
}

.focus\:bg-green-500:focus {
    --tw-bg-opacity: 1;
    background-color: rgb(34 197 94 / var(--tw-bg-opacity));
}

.focus\:bg-primary:focus {
    --tw-bg-opacity: 1;
    background-color: rgb(61 99 221 / var(--tw-bg-opacity));
}

.focus\:bg-primary-color:focus {
    --tw-bg-opacity: 1;
    background-color: rgb(255 255 255 / var(--tw-bg-opacity));
}

.focus\:bg-primary-light-10:focus {
    --tw-bg-opacity: 1;
    background-color: rgb(54 87 195 / var(--tw-bg-opacity));
}

.focus\:text-primary:focus {
    --tw-text-opacity: 1;
    color: rgb(61 99 221 / var(--tw-text-opacity));
}

.focus\:text-primary-color:focus {
    --tw-text-opacity: 1;
    color: rgb(255 255 255 / var(--tw-text-opacity));
}

.focus\:text-white:focus {
    --tw-text-opacity: 1;
    color: rgb(255 255 255 / var(--tw-text-opacity));
}

.focus\:shadow-xl:focus {
    --tw-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
    --tw-shadow-colored: 0 20px 25px -5px var(--tw-shadow-color), 0 8px 10px -6px var(--tw-shadow-color);
    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}

.focus\:ring-2:focus {
    --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
    --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);
    box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
}

.group:hover .group-hover\:visible {
    visibility: visible;
}

.group:hover .group-hover\:rotate-\[2deg\] {
    --tw-rotate: 2deg;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.group:hover .group-hover\:scale-95 {
    --tw-scale-x: .95;
    --tw-scale-y: .95;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.group:hover .group-hover\:scale-\[1\.05\] {
    --tw-scale-x: 1.05;
    --tw-scale-y: 1.05;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.group:hover .group-hover\:text-primary {
    --tw-text-opacity: 1;
    color: rgb(61 99 221 / var(--tw-text-opacity));
}

.group:hover .group-hover\:opacity-100 {
    opacity: 1;
}

@media (min-width: 640px) {
    .sm\:mr-6 {
        margin-right: 1.5rem;
    }

    .sm\:flex {
        display: flex;
    }

    .sm\:h-\[60px\] {
        height: 60px;
    }

    .sm\:max-w-\[60px\] {
        max-width: 60px;
    }

    .sm\:px-10 {
        padding-left: 2.5rem;
        padding-right: 2.5rem;
    }

    .sm\:px-8 {
        padding-left: 2rem;
        padding-right: 2rem;
    }

    .sm\:py-12 {
        padding-top: 3rem;
        padding-bottom: 3rem;
    }

    .sm\:text-2xl {
        font-size: 1.5rem;
        line-height: 2rem;
    }

    .sm\:text-4xl {
        font-size: 2.25rem;
        line-height: 2.5rem;
    }

    .sm\:text-\[32px\] {
        font-size: 32px;
    }

    .sm\:text-lg {
        font-size: 1.125rem;
        line-height: 1.75rem;
    }

    .sm\:leading-normal {
        line-height: 1.5;
    }

    .sm\:leading-snug {
        line-height: 1.375;
    }

    .sm\:col-6 {
        width: 50%;
    }
}

@media (min-width: 768px) {
    .md\:w-1\/2 {
        width: 50%;
    }

    .md\:justify-start {
        justify-content: flex-start;
    }

    .md\:justify-end {
        justify-content: flex-end;
    }

    .md\:gap-5 {
        gap: 1.25rem;
    }

    .md\:px-7 {
        padding-left: 1.75rem;
        padding-right: 1.75rem;
    }

    .md\:py-\[14px\] {
        padding-top: 14px;
        padding-bottom: 14px;
    }

    .md\:pt-\[130px\] {
        padding-top: 130px;
    }

    .md\:col-4 {
        width: 33.333333%;
    }

    .md\:col-6 {
        width: 50%;
    }
}

@media (min-width: 1024px) {
    .lg\:static {
        position: static;
    }

    .lg\:order-1 {
        order: 1;
    }

    .lg\:mx-0 {
        margin-left: 0px;
        margin-right: 0px;
    }

    .lg\:mr-0 {
        margin-right: 0px;
    }

    .lg\:block {
        display: block;
    }

    .lg\:flex {
        display: flex;
    }

    .lg\:inline-flex {
        display: inline-flex;
    }

    .lg\:hidden {
        display: none;
    }

    .lg\:w-56 {
        width: 14rem;
    }

    .lg\:w-full {
        width: 100%;
    }

    .lg\:max-w-full {
        max-width: 100%;
    }

    .lg\:grid-cols-2 {
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    .lg\:bg-transparent {
        background-color: transparent;
    }

    .lg\:px-0 {
        padding-left: 0px;
        padding-right: 0px;
    }

    .lg\:py-0 {
        padding-top: 0px;
        padding-bottom: 0px;
    }

    .lg\:py-6 {
        padding-top: 1.5rem;
        padding-bottom: 1.5rem;
    }

    .lg\:py-\[100px\] {
        padding-top: 100px;
        padding-bottom: 100px;
    }

    .lg\:pr-0 {
        padding-right: 0px;
    }

    .lg\:pt-\[160px\] {
        padding-top: 160px;
    }

    .lg\:text-5xl {
        font-size: 3rem;
        line-height: 1;
    }

    .lg\:text-xl {
        font-size: 1.25rem;
        line-height: 1.75rem;
    }

    .lg\:leading-tight {
        line-height: 1.25;
    }

    .lg\:text-primary-color {
        --tw-text-opacity: 1;
        color: rgb(255 255 255 / var(--tw-text-opacity));
    }

    .lg\:shadow-none {
        --tw-shadow: 0 0 #0000;
        --tw-shadow-colored: 0 0 #0000;
        box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
    }

    .lg\:col-2 {
        width: 16.666667%;
    }

    .lg\:col-3 {
        width: 25%;
    }

    .lg\:col-4 {
        width: 33.333333%;
    }

    .group:hover .lg\:group-hover\:text-primary-color {
        --tw-text-opacity: 1;
        color: rgb(255 255 255 / var(--tw-text-opacity));
    }

    .group:hover .lg\:group-hover\:opacity-70 {
        opacity: 0.7;
    }
}

@media (min-width: 1280px) {
    .xl\:px-6 {
        padding-left: 1.5rem;
        padding-right: 1.5rem;
    }

    .xl\:text-2xl {
        font-size: 1.5rem;
        line-height: 2rem;
    }

    .xl\:col-4 {
        width: 33.333333%;
    }

    .xl\:col-8 {
        width: 66.666667%;
    }

    .xl\:col-12 {
        width: 100%;
    }
}

.dark\:border-alpha-dark:where([data-web-theme=dark], [data-web-theme=dark] *) {
    border-color: #d6dbfc2f;
}

.dark\:bg-body-dark-12\/10:where([data-web-theme=dark], [data-web-theme=dark] *) {
    background-color: rgb(238 238 240 / 0.1);
}

.dark\:bg-primary-dark-1:where([data-web-theme=dark], [data-web-theme=dark] *) {
    --tw-bg-opacity: 1;
    background-color: rgb(29 34 46 / var(--tw-bg-opacity));
}

.dark\:bg-primary-dark-2:where([data-web-theme=dark], [data-web-theme=dark] *) {
    --tw-bg-opacity: 1;
    background-color: rgb(30 37 52 / var(--tw-bg-opacity));
}

.dark\:text-body-dark-10:where([data-web-theme=dark], [data-web-theme=dark] *) {
    --tw-text-opacity: 1;
    color: rgb(125 127 138 / var(--tw-text-opacity));
}

.dark\:text-body-dark-11:where([data-web-theme=dark], [data-web-theme=dark] *) {
    --tw-text-opacity: 1;
    color: rgb(180 182 191 / var(--tw-text-opacity));
}

.dark\:text-body-dark-12:where([data-web-theme=dark], [data-web-theme=dark] *) {
    --tw-text-opacity: 1;
    color: rgb(238 238 240 / var(--tw-text-opacity));
}

.dark\:invert:where([data-web-theme=dark], [data-web-theme=dark] *) {
    --tw-invert: invert(100%);
    filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);
}

.dark\:hover\:bg-primary-dark-10:hover:where([data-web-theme=dark], [data-web-theme=dark] *) {
    --tw-bg-opacity: 1;
    background-color: rgb(49 84 205 / var(--tw-bg-opacity));
}

.dark\:hover\:text-primary-color:hover:where([data-web-theme=dark], [data-web-theme=dark] *) {
    --tw-text-opacity: 1;
    color: rgb(255 255 255 / var(--tw-text-opacity));
}

.dark\:focus\:bg-primary-dark-10:focus:where([data-web-theme=dark], [data-web-theme=dark] *) {
    --tw-bg-opacity: 1;
    background-color: rgb(49 84 205 / var(--tw-bg-opacity));
}

.dark\:focus\:text-primary-color:focus:where([data-web-theme=dark], [data-web-theme=dark] *) {
    --tw-text-opacity: 1;
    color: rgb(255 255 255 / var(--tw-text-opacity));
}

@media (min-width: 1024px) {
    .dark\:lg\:bg-transparent:where([data-web-theme=dark], [data-web-theme=dark] *) {
        background-color: transparent;
    }

    .lg\:dark\:text-primary-color:where([data-web-theme=dark], [data-web-theme=dark] *) {
        --tw-text-opacity: 1;
        color: rgb(255 255 255 / var(--tw-text-opacity));
    }
}
</style>