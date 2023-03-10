import puppeteer from "puppeteer-core";

(async () => {
    const browser = await puppeteer.launch({
        // headless: false,
        executablePath:
            "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
        defaultViewport: {
            isMobile: true,
            width: 390,
            height: 6338,
            // deviceScaleFactor: 2,
        },
    });

    const page = await browser.newPage();
    await page.goto("https://localhost/resume", { waitUntil: "networkidle0" });
    // little delay
    // await new Promise((resolve) => setTimeout(resolve, 9500));
    // take the pdf
    await page.pdf({ path: "./resume.pdf", width: 390, height: 6338 });

    await browser.close();
})();
