<script setup></script>

<template>
    <section
        class="mx-auto max-w-screen-lg w-full px-[30px] pt-[120px] flex flex-col justify-center"
    >
        <div class="w-full">
            <MainHeading text="Work" class="mx-auto max-w-xl w-full" />

            <div class="mt-[45px] font-medium text-xl mx-auto max-w-xl w-full">
                <p>
                    I have been building websites since 2020. Some times my
                    clients have a design, some times they don’t even have a
                    Logo, is ok; I like every stage of the work, from planing &
                    design to development & deployment. Im here to make that
                    idea happen!
                </p>
                <p class="mt-[30px]">
                    I see websites as the mere vehicle for the intent or the
                    message that the people behind are actually trying to
                    convey. In that sense, I craft to achieve this primary
                    function, with performance, good practices and accessibility
                    in mind. And off course a unique touch, we deserve simpler
                    and nicer software for our everyday.
                </p>
            </div>
        </div>

        <div class="mt-[70px] pb-[200px] mx-auto max-w-xl w-full">
            <SubHeading text="Recent Projects" class="mx-auto" />
            <!-- aa meals -->
            <div class="mt-[50px]">
                <ThirdLevelHeading
                    :link="{
                        href: 'https://aa-meals.com',
                        label: 'aa-meals.com',
                    }"
                    class="mx-auto"
                />
                <p class="mt-[30px] font-medium text-xl">
                    AA Meals is a healthy food delivery service based on Miami,
                    they needed a site for the brand, to showcase their service
                    and get new costumers.
                </p>
                <p class="mt-[30px] font-medium text-xl">
                    They also needed a way to allow their costumers sign up from
                    the website with out needing to call directly.
                </p>
                <p class="mt-[30px] font-medium text-xl">
                    I help them to develop their story, designed the site and
                    the logo, with a clean and fresh visual language. Builded
                    the web, and a automation that forwards the costumer request
                    with all relevant details from the site to the managers
                    phone.
                </p>

                <div class="mx-auto">
                    <div class="h-[520px] w-[232px] relative mt-[30px] p-1">
                        <img
                            src="/img/work/aameals-mobile.jpg"
                            loading="lazy"
                            alt="aa-meals.com home screen shot"
                            class="w-full h-full absolute inset-0 object-cover img_shadow rounded-xl"
                        />
                    </div>
                </div>
            </div>
            <!-- aristides -->
            <div class="mt-[50px]">
                <ThirdLevelHeading
                    :link="{
                        href: 'http://aristides-inn.com',
                        label: 'aristides-inn.com',
                    }"
                />
                <p class="mt-[30px] font-medium text-xl">
                    Aristides Inn is a Hotel located in Harmuey, Peru. They
                    needed a site for the Hotel, and to provide a booking
                    experience directly on the site.
                </p>
                <p class="mt-[30px] font-medium text-xl">
                    I worked closely with the client and his designer to deliver
                    the piece matching exactly his expectations, just modifying
                    little details here and there to enhance the site
                    performance and usability in different viewports.
                </p>
                <p class="mt-[30px] font-medium text-xl">
                    For the bookings I developed a custom Management System for
                    the Hotel administrators, allowing to integrate to the site
                    via an API and off course manage all booking related
                    affairs.
                </p>

                <div
                    class="mt-[30px] flex flex-col gap-[30px] md:flex-row overflow-visible md:overflow-x-auto md:p-[45px]"
                >
                    <div class="h-[520px] w-[232px] relative md:shrink-0">
                        <img
                            src="/img/work/aristides-mobile.jpg"
                            loading="lazy"
                            alt="aa-meals.com home screen shot"
                            class="w-full h-full absolute inset-0 object-cover img_shadow_mile rounded-xl"
                        />
                    </div>

                    <div class="h-[520px] w-[232px] relative md:shrink-0">
                        <img
                            src="/img/work/aristides-bookings-mobile-1.jpg"
                            loading="lazy"
                            alt="aa-meals.com home screen shot"
                            class="w-full h-full absolute inset-0 object-cover img_shadow_mile rounded-xl"
                        />
                    </div>

                    <div
                        class="h-[200px] max-w-[340px] md:h-[520px] md:max-w-[1300px] md:shrink-0 w-full relative"
                    >
                        <img
                            src="/img/work/aristides-bookings-large.jpg"
                            loading="lazy"
                            alt="aa-meals.com home screen shot"
                            class="w-full h-full absolute inset-0 object-cover img_shadow_mile rounded-xl"
                        />
                    </div>
                </div>
            </div>

            <!-- pozos -->
            <div class="mt-[50px]">
                <ThirdLevelHeading
                    :link="{
                        href: 'https://pozoseneldesierto.com',
                        label: 'pozoseneldesierto.com',
                    }"
                />
                <p class="mt-[30px] font-medium text-xl">
                    Pozos en el desierto is a trans-media piece elaborated for a
                    Peruvian Film Studio called Hiperactiva Comunicaciones. The
                    website compose a myriad of stories, wish the visitor can
                    choose how and in what order to consume, the stories unfold
                    a big social and environmental problem of the region, and it
                    win some prices in several events.
                </p>
                <p class="mt-[30px] font-medium text-xl">
                    The project was challenging, interactivity was a core value,
                    and there where lot’s of content, and numerous formats,
                    audio, pictures, diagrams, timelines, documental pieces; all
                    of them where planted in a dessert like setting, with
                    several areas, for the different chapters. This site was
                    achieved with numerous iterations working closely with the
                    Designer and the Client.
                </p>

                <div
                    class="mt-[30px] flex flex-col gap-[30px] md:flex-row overflow-visible md:overflow-x-auto md:p-[45px]"
                >
                    <div
                        class="h-[200px] max-w-[340px] md:h-[520px] md:max-w-[1300px] md:shrink-0 w-full relative"
                    >
                        <img
                            src="/img/work/pozos-1.jpg"
                            loading="lazy"
                            alt="pozoseneldesierto home screen shot"
                            class="w-full h-full absolute inset-0 object-cover img_shadow_mile rounded-xl"
                        />
                    </div>
                    <div
                        class="h-[200px] max-w-[340px] md:h-[520px] md:max-w-[1300px] md:shrink-0 w-full relative"
                    >
                        <img
                            src="/img/work/pozos-2.jpg"
                            loading="lazy"
                            alt="pozoseneldesierto home screen shot"
                            class="w-full h-full absolute inset-0 object-cover img_shadow_mile rounded-xl"
                        />
                    </div>
                    <div
                        class="h-[200px] max-w-[340px] md:h-[520px] md:max-w-[1300px] md:shrink-0 w-full relative"
                    >
                        <img
                            src="/img/work/pozos-3.jpg"
                            loading="lazy"
                            alt="pozoseneldesierto home screen shot"
                            class="w-full h-full absolute inset-0 object-cover img_shadow_mile rounded-xl"
                        />
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
