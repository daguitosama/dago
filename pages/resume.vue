<script setup>
    definePageMeta({ layout: "resume" });
    const { BASE_URL } = useRuntimeConfig().public;
    // console.log(BASE_URL);
    useHead({
        title: "Dago AC",
        meta: [
            // description
            {
                hid: "description",
                name: "description",
                content: "Web design & Web development",
            },
            // OG / Facebook
            {
                hid: "og:type",
                property: "og:type",
                content: "website",
            },
            {
                hid: "og:url",
                property: "og:url",
                content: `${BASE_URL}`,
            },
            {
                hid: "og:title",
                property: "og:title",
                content: "Dago AC",
            },
            {
                hid: "og:description",
                property: "og:description",
                content: "Web design & Web development",
            },
            {
                hid: "og:image",
                property: "og:image",
                content: `${BASE_URL}/img/global/og.jpg`,
            },
            // Twitter
            {
                hid: "twitter:card",
                property: "twitter:card",
                content: "summary_large_image",
            },
            {
                hid: "twitter:url",
                property: "twitter:url",
                content: `${BASE_URL}`,
            },
            {
                hid: "twitter:title",
                property: "twitter:title",
                content: "Dago AC",
            },
            {
                hid: "twitter:description",
                property: "twitter:description",
                content: "Web design & Web development",
            },
            {
                hid: "twitter:image",
                property: "twitter:image",
                content: `${BASE_URL}/img/global/og.jpg`,
            },
        ],
    });
</script>

<template>
    <div
        class="min-h-screen w-full px-[30px] py-[60px] max-w-[400px] md:max-w-[500px] mx-auto flex flex-col gap-[30px]"
    >
        <div class="h-[61.52px] w-[56.8px] relative">
            <img
                src="/img/Dago.jpg"
                alt="Dago smiling"
                class="absolute inset-0 w-full h-full object-cover rounded-full overflow-hidden"
            />
        </div>
        <h1 class="font-bold text-2xl">Dagoberto A Carralero</h1>
        <ul class="flex flex-col gap-[10px] font-medium">
            <li class="flex items-baseline justify-between">
                <span class="text-gray-600 dark:text-gray-300">Email</span>
                <span>
                    <a
                        href="mailto:tocarralero@gmail.com"
                        class="text-teal-600 dark:text-teal-400 font-medium border-b border-teal-600"
                        >tocarralero@gmail.com</a
                    >
                </span>
            </li>
            <li class="flex items-baseline justify-between">
                <span class="text-gray-600 dark:text-gray-300">GitHub</span>
                <span>
                    <a
                        href="https://github.com/daguitosama"
                        class="text-teal-600 dark:text-teal-400 font-medium border-b border-teal-600"
                        >@daguitosama</a
                    >
                </span>
            </li>
            <li class="flex items-baseline justify-between">
                <span class="text-gray-600 dark:text-gray-300">Twitter</span>
                <span>
                    <a
                        href="https://twitter.com/daguitosama"
                        class="text-teal-600 dark:text-teal-400 font-medium border-b border-teal-600"
                        >@daguitosama</a
                    >
                </span>
            </li>
            <li class="flex items-baseline justify-between">
                <span class="text-gray-600 dark:text-gray-300">Web</span>
                <span>
                    <a
                        href="https://dago.pages.dev"
                        class="text-teal-600 dark:text-teal-400 border-b border-teal-600"
                        >dago.pages.dev</a
                    >
                </span>
            </li>
        </ul>
        <p class="text-lg font-medium">
            Im a self taught web developer. I have been building websites and
            numerous side projects over the last 3 years, learning by doing,
            hacking things out and always trying new things.
        </p>
        <p class="text-lg font-medium">
            Working with clients has resulted as a tremendous personal grow, not
            just for monetary reasons, I have been “forced” to wear several
            hats, like information architect, story developer, designer, web
            developer, vps magician and a few more.
        </p>
        <p class="text-lg font-medium">
            Most of my experience has been working with Vue.js, specifically
            doing Nuxt.js sites, paired with several modules to cover different
            use cases like internationalization and others. Although I have done
            several REST services, even a headless TinyBookings API, powered by
            GraphQL & PostgreSQL, with a Nuxt Dashboard.
        </p>
        <p class="text-lg font-medium">
            The following are some of the best projects I have crafted.
        </p>
        <section class="flex flex-col gap-[30px]">
            <h2 class="font-bold text-xl pt-[30px]">
                <a
                    href="https://aa-meals.com"
                    class="text-teal-600 dark:text-teal-400 font-medium border-b border-teal-600"
                >
                    aa-meals.com
                </a>
            </h2>
            <p class="text-lg font-medium">
                AA Meals is a healthy food delivery service based on Miami, they
                needed a site for the brand, to showcase their service and get
                new costumers, and allow them sign up for the service.
            </p>
            <ul class="text-lg font-medium list-disc pl-[20px]">
                <li>I help them to develop their story,</li>
                <li>designed the logo and the site,</li>
                <li>
                    crated the web, and a REST service that handle the SignUps,
                </li>
                <li>
                    deployed the web and the service on a VPS with automated
                    certs rotation,
                </li>
                <li>
                    used Figma, Nuxt, TailwindCSS, Express, Nginx, PM2 and
                    others.
                </li>
            </ul>
            <div>
                <img
                    src="/img/work_captures_optimized/aameals-mobile.jpg"
                    alt="aa meals intro section"
                    class="img-shadow rounded-[14px] md:max-h-[600px] md:w-auto"
                />
            </div>
        </section>
        <section class="flex flex-col gap-[30px]">
            <h2 class="font-bold text-xl pt-[30px]">
                <a
                    href="https://aristides-inn.com"
                    class="text-teal-600 dark:text-teal-400 font-medium border-b border-teal-600"
                >
                    aristides-inn.com
                </a>
            </h2>
            <p class="text-lg font-medium">
                Aristides Inn is a Hotel located in Harmuey, Peru. They needed a
                site for the Hotel, and a booking experience directly on site.
            </p>
            <ul class="text-lg font-medium list-disc pl-[20px]">
                <li>
                    I worked closely with the designer to deliver as designed,
                    just making small recommendations,
                </li>
                <li>
                    developed the site and a headless
                    <a
                        href="https://github.com/daguitosama/tiny-bookings"
                        class="text-teal-600 dark:text-teal-400 border-b border-teal-600"
                    >
                        bookings api
                    </a>
                    with an
                    <a
                        href="https://github.com/daguitosama/aristiedes-inn-tiny-bookings-web"
                        class="text-teal-600 dark:text-teal-400 border-b border-teal-600"
                        >admin dashboard</a
                    >, integrated in the site with the booking experience,
                </li>
                <li>deployed the the services on a VPS,</li>
                <li>
                    used Nuxt, TailwindCSS, Express, Apollo, PostgreSQL, Nginx,
                    PM2 and others.
                </li>
            </ul>
            <div>
                <img
                    src="/img/work_captures_optimized/aristides-mobile.jpg"
                    alt="aristides-inn intro section"
                    class="img-shadow rounded-[14px] md:max-h-[600px] md:w-auto"
                />
            </div>
            <div>
                <img
                    src="/img/work_captures_optimized/aristides-bookings-mobile.jpg"
                    alt="aristides-inn intro section"
                    class="img-shadow rounded-[14px] md:max-h-[600px] md:w-auto"
                />
            </div>
        </section>
        <section class="flex flex-col gap-[30px]">
            <h2 class="font-bold text-xl pt-[30px]">
                <a
                    href="https://pozoseneldesierto.com"
                    class="text-teal-600 dark:text-teal-400 font-medium border-b border-teal-600"
                >
                    pozoseneldesierto.com
                </a>
            </h2>
            <p class="text-lg font-medium">
                Pozos en el desierto is a trans-media piece elaborated for a
                Peruvian Film Studio called Hiperactiva Comunicaciones. The
                website compose a myriad of stories, wish the visitor can choose
                how and in what order to consume, the stories unfold a big
                social and environmental problem of the region, and it win some
                prices in several events.
            </p>
            <ul class="text-lg font-medium list-disc pl-[20px]">
                <li>
                    I worked closely with the Designer and the Editors to
                    delivered as designed and Approved,
                </li>
                <li>
                    help with the concept and design of some interactive
                    widgets,
                </li>
                <li>
                    developed the site, using heavily the latest Vue composition
                    patterns to make a more approachable codebase with so much
                    nested and complex interactive pieces,
                </li>
                <li>
                    in addition to the main site i deployed a self-hosted
                    NextCloud instance to make easy media collaboration with
                    editors, and a Plausible Analytics,
                </li>
                <li>
                    deployed the web and the other services on a VPS with
                    automated certs rotation,
                </li>
                <li>
                    used, Nuxt, TailwindCSS, NextCloud, Plausible Analytics,
                    Nginx and others.
                </li>
            </ul>
            <div>
                <img
                    src="/img/work_captures_optimized/pozos-1.jpg"
                    alt="pozoseneldesierto intro section"
                    class="img-shadow rounded-[14px] md:max-h-[200px] md:w-auto"
                />
            </div>
            <div>
                <img
                    src="/img/work_captures_optimized/pozos-2.jpg"
                    alt="pozoseneldesierto menu"
                    class="img-shadow rounded-[14px] md:max-h-[200px] md:w-auto"
                />
            </div>
            <div>
                <img
                    src="/img/work_captures_optimized/pozos-3.jpg"
                    alt="pozoseneldesierto chapter section"
                    class="img-shadow rounded-[14px] md:max-h-[200px] md:w-auto"
                />
            </div>
        </section>
    </div>
</template>

<style scoped>
    .img-shadow {
        box-shadow: 0px 4px 32px 14px rgba(0, 0, 0, 0.15);
    }
</style>
