---
title: Aristides Inn
description: A site and a booking management system for the Aristides Inn Hotel 

head : {
    meta : [
        
        {
            property: "og:type",
            content: "website",
        },
        {
            property: "og:title",
            content: "Aristides Inn"
        },
        {
            property: "og:description",
            content:  "A site and a booking management system for the Aristides Inn Hotel "
        },
        {
            property: "og:image",
            content: "https://dago.pages.dev/img/og/arisitdes-og.jpg"
        },
        {
            property: "twitter:card",
            content: "summary_large_image"
        },
        {
            property: "twitter:title",
            content: "Aristides Inn"
        },
        {
            property: "twitter:description",
            content: "A site and a booking management system for the Aristides Inn Hotel"
        },
        {
            property: "twitter:image",
            content: "https://dago.pages.dev/img/og/arisitdes-og.jpg"
        }
    ]
}

card_title: "aristides inn"
img: "/img/work/work-card-pic-aristides.jpg"
img_alt: "Aristides Inn Logo over a beach"
descriptionItems: [
    'Development',
    'Headless Booking Management System'
]
---
<div class="max-w-xl  mx-auto "> 

::MainHeading{text="Arisites Inn" id="aristides"}
::

<div class="mt-[30px] font-medium text-xl">


Aristides Inn is a Hotel located in 
Harmuey, Peru. They needed a site
for the Hotel, and to provide a booking experience directly on the site.

<p class="mt-[30px]">
I worked closely with the client and his designer to deliver the piece matching exactly his expectations, just modifying little details here and there to enhance the site performance and usability in different viewports.
</p>

<p class="mt-[30px]">
For the bookings I developed a custom Management System for the
Hotel administrators, allowing to integrate to the site via an API and off course manage all booking related affairs.
</p>
</div>

<div class="">

::frame{url="https://aristides-inn.com" class="mt-[50px] "}
::

</div>

</div>


::little-heading{text="Technical Details" class="m-70"}
::

This site was developed with 
- Nuxt 2, 
- TailwindCSS  


The Booking [engine](https://github.com/daguitosama/tiny-bookings/tree/main) was developed using 
- Express js
- GraphQL
- PostgreSQL
  - started to use Prisma for ORM, but quit it, and fallback to Postgres.js, bare metal SQL
  - used super cool PostgreSQL features like like the `tsrange` data type and `plpsql functions`
- Nuxt for the admin portal
- basic JWT for auth portal/api clients
- Basic File storage for hosting room listings images

It was deployed on a Linux VPS, with Nginx as proxy, configured with Acme.sh and Let's Encrypt for certs handling.


::gallery{class="m-70"}
---
images: 
  - src: '/img/work/sites-galleries/aristides/hotel-1.webp'
    alt: "A capture of the site's home page"
  - src: '/img/work/sites-galleries/aristides/reservas-0.0.webp'
    alt: "Booking engine"
  - src: '/img/work/sites-galleries/aristides/reservas-0.1.webp'
    alt: "Admin Login"
  - src: '/img/work/sites-galleries/aristides/reservas-2.webp'
    alt: "Bookings calendar"
  - src: '/img/work/sites-galleries/aristides/reservas-3.webp'
    alt: "Rooms listings"
  - src: '/img/work/sites-galleries/aristides/reservas-1.webp'
    alt: "Room editing "

---
::
