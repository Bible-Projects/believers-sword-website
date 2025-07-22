<script setup lang="ts">
const { data } = await useFetch(
    "https://api.github.com/repos/Bible-Projects/believers-sword-next/releases/latest"
);

const installerAsset = (data.value as any).assets[0];
const portableVersion = (data.value as any).assets[2];
const tagName = (data.value as any).tag_name;

useSeoMeta({
    title: "Believers Sword",
    description:
        "Believers Sword is a modern design software  for reading and studying the bible.",
});

defineOgImageComponent("BelieverSwordOg");
</script>
<template>
    <main class="main relative">
        <!-- Hero section -->
        <section
            id="home"
            class="relative overflow-hidden bg-orange-500 !text-orange-500-color pt-[50px]"
        >
            <div class="container">
                <div class="-mx-5 flex flex-wrap items-center">
                    <div class="w-full px-5">
                        <div
                            class="scroll-revealed mx-auto max-w-[780px] text-center"
                        >
                            <h1
                                class="mb-6 text-3xl font-bold leading-snug !text-white sm:text-4xl sm:leading-snug lg:text-5xl lg:leading-tight"
                            >
                                Believers Sword
                            </h1>

                            <p
                                class="mx-auto mb-9 max-w-[600px] text-base !text-white sm:text-lg sm:leading-normal"
                            >
                                Welcome to Believers Sword — a powerful yet
                                simple Bible study app designed to deepen your
                                walk with Christ. Whether you're just
                                discovering it or have been using it for a
                                while, Believers Sword equips you with intuitive
                                tools and thoughtful features to help you engage
                                with God’s Word more meaningfully.
                            </p>

                            <ul
                                class="mb-10 flex flex-wrap items-center justify-center gap-4 md:gap-5"
                            >
                                <li>
                                    <a
                                        v-if="installerAsset"
                                        :href="
                                            installerAsset.browser_download_url
                                        "
                                        class="video-popup flex items-center gap-4 rounded-md bg-primary-color/[0.15] px-5 py-3 text-base font-medium text-white hover:bg-primary-color !hover:text-orange-500 md:px-7 md:py-[14px]"
                                        role="button"
                                    >
                                        <Icon
                                            name="ic:baseline-cloud-download"
                                            size="30"
                                        />
                                        Installer ({{ tagName }})
                                    </a>
                                </li>

                                <li>
                                    <a
                                        v-if="portableVersion"
                                        :href="
                                            portableVersion.browser_download_url
                                        "
                                        class="video-popup flex items-center gap-4 rounded-md bg-primary-color/[0.15] px-5 py-3 text-base font-medium text-white hover:bg-primary-color !hover:text-orange-500 md:px-7 md:py-[14px]"
                                        role="button"
                                    >
                                        <Icon
                                            name="material-symbols:app-badging"
                                            size="30"
                                        />
                                        Portable ({{ tagName }})
                                    </a>
                                </li>
                            </ul>

                            <div class="max-w-[300px] mx-auto text-white">
                                <small>
                                    This is only available for
                                    <b>Windows OS</b>, Coming soon for MAC and
                                    Linux.
                                </small>
                            </div>
                        </div>
                    </div>
                    <div class="w-full px-5">
                        <div
                            class="scroll-revealed relative z-10 mx-auto max-w-[845px]"
                        >
                            <figure class="mt-16">
                                <img
                                    src="@/assets/img/hero.png"
                                    alt="Hero image"
                                    class="mx-auto max-w-full rounded-t-l rounded-tr-md rounded-lt-md"
                                />
                            </figure>

                            <div class="absolute -left-9 bottom-0 z-[-1]">
                                <img
                                    src="@/assets/img/dots.svg"
                                    class="w-[120px] opacity-75"
                                />
                            </div>

                            <div class="absolute -right-6 -top-6 z-[-1]">
                                <img
                                    src="@/assets/img/dots.svg"
                                    class="w-[120px] opacity-75"
                                />
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
                            <NuxtImg
                                format="webp"
                                src="https://i.imgur.com/yIajRNN.jpeg"
                                alt="About image"
                                quality="80"
                                class="rounded-xl"
                            />
                        </figure>
                    </div>

                    <div class="w-full">
                        <div class="scroll-revealed">
                            <h6
                                class="mb-2 block text-lg font-semibold !text-orange-500"
                            >
                                About Us
                            </h6>
                            <h2 class="mb-6">Why I Created Believers Sword</h2>
                        </div>

                        <div class="tabs scroll-revealed">
                            <div
                                class="tabs-content mt-4"
                                id="tabs-panel-profile"
                                tabindex="-1"
                                role="tabpanel"
                                aria-labelledby="tabs-list-profile"
                            >
                                <p></p>
                                <p>
                                    What started as a simple personal project
                                    for my portfolio eventually became something
                                    more meaningful. I initially built the app
                                    to showcase my development skills, gradually
                                    improving it over time by adding features
                                    like highlighting, dictionary support, and
                                    search functionality.
                                </p>
                            </div>

                            <div
                                class="tabs-content mt-4"
                                id="tabs-panel-vision"
                                tabindex="-1"
                                role="tabpanel"
                                aria-labelledby="tabs-list-vision"
                            >
                                <p>
                                    As I was preparing to include it in my
                                    portfolio, a small group of users began to
                                    discover and use the app. While the number
                                    wasn't large, their presence encouraged me
                                    to keep improving it. Their interest showed
                                    me that even a small tool could make a
                                    difference.
                                </p>
                                <p>
                                    Today, Believers Sword is not just a
                                    project—it's something I use personally to
                                    study the Bible. And as I grow in both faith
                                    and skill, I continue to develop the app,
                                    little by little, with the hope that it can
                                    help others too.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Intro video section -->
        <section id="intro" class="section-area" v-if="false">
            <div class="container">
                <div
                    class="scroll-revealed text-center max-w-[550px] mx-auto mb-12"
                >
                    <h6
                        class="mb-2 block text-lg font-semibold !text-orange-500"
                    >
                        Intro Video
                    </h6>
                    <h2 class="mb-6">Watch Our Intro Video</h2>
                    <p>
                        There are many variations of passages of Lorem Ipsum
                        available but the majority have suffered alteration in
                        some form.
                    </p>
                </div>

                <div class="scroll-revealed relative max-w-[900px] mx-auto">
                    <img
                        src="@/assets/img/intro-video.jpg"
                        alt="Intro video"
                        class="w-full h-full aspect-video rounded-xl object-cover"
                    />
                    <a
                        href="javascript:void(0)"
                        class="video-popup w-[80px] h-[80px] rounded-full inline-flex items-center justify-center bg-primary !text-orange-500-color text-[1.875rem] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 shadow-md hover:bg-primary-color hover:text-primary hover:shadow-xl focus:bg-primary-color focus:text-primary focus:shadow-xl"
                    >
                        <Icon name="ic:baseline-play-circle-filled" />
                    </a>
                </div>
            </div>
        </section>

        <!-- Portfolio section -->
        <section id="portfolio" class="section-area" v-if="false">
            <div class="container">
                <div
                    class="scroll-revealed text-center max-w-[550px] mx-auto mb-12"
                >
                    <h6
                        class="mb-2 block text-lg font-semibold !text-orange-500"
                    >
                        Features
                    </h6>
                    <h2 class="mb-6">What The App Can Do</h2>
                    <p>
                        There are many variations of passages of Lorem Ipsum
                        available but the majority have suffered alteration in
                        some form.
                    </p>
                </div>

                <div class="scroll-revealed portfolio-grid row">
                    <div class="portfolio col-12 sm:col-6 lg:col-4">
                        <article class="group" data-filter="branding">
                            <div
                                class="relative overflow-hidden w-full aspect-[4/3] rounded-xl"
                            >
                                <img
                                    src="@/assets/img/portfolio/portfolio-1.jpg"
                                    alt="Graphics Design"
                                    class="w-full h-full object-cover"
                                />
                            </div>
                            <div class="pt-4">
                                <h4 class="mb-2">
                                    <a
                                        href="javascript:void(0)"
                                        class="text-[1.5rem] leading-tight text-inherit"
                                        >Graphics Design</a
                                    >
                                </h4>
                                <p>
                                    Short description for the ones who look for
                                    something new. Awesome!
                                </p>
                            </div>
                        </article>
                    </div>

                    <div class="portfolio col-12 sm:col-6 lg:col-4">
                        <article class="group" data-filter="research">
                            <div
                                class="relative overflow-hidden w-full aspect-[4/3] rounded-xl"
                            >
                                <img
                                    src="@/assets/img/portfolio/portfolio-2.jpg"
                                    alt="Web Development"
                                    class="w-full h-full object-cover"
                                />
                            </div>
                            <div class="pt-4">
                                <h4 class="mb-2">
                                    <a
                                        href="javascript:void(0)"
                                        class="text-[1.5rem] leading-tight text-inherit"
                                        >Web Development</a
                                    >
                                </h4>
                                <p>
                                    Short description for the ones who look for
                                    something new. Awesome!
                                </p>
                            </div>
                        </article>
                    </div>

                    <div class="portfolio col-12 sm:col-6 lg:col-4">
                        <article class="group" data-filter="marketing">
                            <div
                                class="relative overflow-hidden w-full aspect-[4/3] rounded-xl"
                            >
                                <img
                                    src="@/assets/img/portfolio/portfolio-3.jpg"
                                    alt="App Development"
                                    class="w-full h-full object-cover"
                                />
                            </div>
                            <div class="pt-4">
                                <h4 class="mb-2">
                                    <a
                                        href="javascript:void(0)"
                                        class="text-[1.5rem] leading-tight text-inherit"
                                        >App Development</a
                                    >
                                </h4>
                                <p>
                                    Short description for the ones who look for
                                    something new. Awesome!
                                </p>
                            </div>
                        </article>
                    </div>

                    <div class="portfolio col-12 sm:col-6 lg:col-4">
                        <article class="group" data-filter="planning">
                            <div
                                class="relative overflow-hidden w-full aspect-[4/3] rounded-xl"
                            >
                                <img
                                    src="@/assets/img/portfolio/portfolio-4.jpg"
                                    alt="Digital Marketing"
                                    class="w-full h-full object-cover"
                                />
                            </div>
                            <div class="pt-4">
                                <h4 class="mb-2">
                                    <a
                                        href="javascript:void(0)"
                                        class="text-[1.5rem] leading-tight text-inherit"
                                        >Digital Marketing</a
                                    >
                                </h4>
                                <p>
                                    Short description for the ones who look for
                                    something new. Awesome!
                                </p>
                            </div>
                        </article>
                    </div>

                    <div class="portfolio col-12 sm:col-6 lg:col-4">
                        <article class="group" data-filter="branding">
                            <div
                                class="relative overflow-hidden w-full aspect-[4/3] rounded-xl"
                            >
                                <img
                                    src="@/assets/img/portfolio/portfolio-5.jpg"
                                    alt="SEO Services"
                                    class="w-full h-full object-cover"
                                />
                            </div>
                            <div class="pt-4">
                                <h4 class="mb-2">
                                    <a
                                        href="javascript:void(0)"
                                        class="text-[1.5rem] leading-tight text-inherit"
                                        >SEO Services</a
                                    >
                                </h4>
                                <p>
                                    Short description for the ones who look for
                                    something new. Awesome!
                                </p>
                            </div>
                        </article>
                    </div>

                    <div class="portfolio col-12 sm:col-6 lg:col-4">
                        <article class="group" data-filter="marketing">
                            <div
                                class="relative overflow-hidden w-full aspect-[4/3] rounded-xl"
                            >
                                <img
                                    src="@/assets/img/portfolio/portfolio-6.jpg"
                                    alt="Product Design"
                                    class="w-full h-full object-cover"
                                />
                            </div>
                            <div class="pt-4">
                                <h4 class="mb-2">
                                    <a
                                        href="javascript:void(0)"
                                        class="text-[1.5rem] leading-tight text-inherit"
                                        >Product Design</a
                                    >
                                </h4>
                                <p>
                                    Short description for the ones who look for
                                    something new. Awesome!
                                </p>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        </section>

        <!-- Blog section -->
        <section id="blog" class="section-area" v-if="false">
            <div class="container">
                <div
                    class="scroll-revealed text-center max-w-[550px] mx-auto mb-12"
                >
                    <h6
                        class="mb-2 block text-lg font-semibold !text-orange-500"
                    >
                        Blog
                    </h6>
                    <h2 class="mb-6">Latest Sermons & Blog</h2>
                    <p>
                        There are many variations of passages of Lorem Ipsum
                        available but the majority have suffered alteration in
                        some form.
                    </p>
                </div>

                <div class="row">
                    <div class="scroll-revealed col-12 sm:col-6 lg:col-4">
                        <article class="group">
                            <div class="relative">
                                <a
                                    href="javascript:void(0)"
                                    class="w-full aspect-[3/2] rounded-xl overflow-hidden block"
                                >
                                    <img
                                        src="@/assets/img/thumbnail/thumbnail-1.jpg"
                                        alt="Thumbnail"
                                        class="w-full h-full object-cover group-hover:scale-[1.05] group-hover:rotate-[2deg]"
                                    />
                                </a>
                            </div>
                            <span
                                class="block mt-6 w-full text-sm text-body-light-10 dark:text-body-dark-10"
                                >Joe Russell - 17 Agt 2024</span
                            >
                            <h4 class="mb-6 mt-3 font-semibold text-[1.5rem]">
                                <a
                                    href="javascript:void(0)"
                                    class="text-body-light-12 dark:text-body-dark-12"
                                    >Make your team a Design driven company</a
                                >
                            </h4>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry. Lorem Ipsum has been
                                the industry's standard.
                            </p>
                        </article>
                    </div>

                    <div class="scroll-revealed col-12 sm:col-6 lg:col-4">
                        <article class="group">
                            <div class="relative">
                                <a
                                    href="javascript:void(0)"
                                    class="w-full aspect-[3/2] rounded-xl overflow-hidden block"
                                >
                                    <img
                                        src="@/assets/img/thumbnail/thumbnail-2.jpg"
                                        alt="Thumbnail"
                                        class="w-full h-full object-cover group-hover:scale-[1.05] group-hover:rotate-[2deg]"
                                    />
                                </a>
                            </div>
                            <span
                                class="block mt-6 w-full text-sm text-body-light-10 dark:text-body-dark-10"
                                >Joe Russell - 17 Agt 2024</span
                            >
                            <h4 class="mb-6 mt-3 font-semibold text-[1.5rem]">
                                <a
                                    href="javascript:void(0)"
                                    class="text-body-light-12 dark:text-body-dark-12"
                                    >The newest web framework that changed the
                                    world</a
                                >
                            </h4>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry. Lorem Ipsum has been
                                the industry's standard.
                            </p>
                        </article>
                    </div>

                    <div class="scroll-revealed col-12 sm:col-6 lg:col-4">
                        <article class="group">
                            <div class="relative">
                                <a
                                    href="javascript:void(0)"
                                    class="w-full aspect-[3/2] rounded-xl overflow-hidden block"
                                >
                                    <img
                                        src="@/assets/img/thumbnail/thumbnail-3.jpg"
                                        alt="Thumbnail"
                                        class="w-full h-full object-cover group-hover:scale-[1.05] group-hover:rotate-[2deg]"
                                    />
                                </a>
                            </div>
                            <span
                                class="block mt-6 w-full text-sm text-body-light-10 dark:text-body-dark-10"
                                >Joe Russell - 17 Agt 2024</span
                            >
                            <h4 class="mb-6 mt-3 font-semibold text-[1.5rem]">
                                <a
                                    href="javascript:void(0)"
                                    class="text-body-light-12 dark:text-body-dark-12"
                                    >5 ways to improve user retention for your
                                    startup</a
                                >
                            </h4>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry. Lorem Ipsum has been
                                the industry's standard.
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
                        <h6 class="mb-2 block text-lg font-semibold !text-orange-500">
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
    <SiteFooter />

    <button
        type="button"
        class="inline-flex w-12 h-12 rounded-md items-center justify-center text-lg/none bg-primary !text-orange-500-color hover:bg-primary-light-10 dark:hover:bg-primary-dark-10 focus:bg-primary-light-10 dark:focus:bg-primary-dark-10 fixed bottom-[117px] right-[20px] hover:-translate-y-1 opacity-100 visible z-50 is-hided"
        data-web-trigger="scroll-top"
        aria-label="Scroll to top"
    >
        <i class="lni lni-chevron-up"></i>
    </button>
</template>
