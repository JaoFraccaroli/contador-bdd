import { After, AfterAll, Before, BeforeAll, setDefaultTimeout } from "@cucumber/cucumber"
import { chromium } from "playwright"

setDefaultTimeout(30 * 1000)

let browser

BeforeAll(async function () {
    browser = await chromium.launch()
})

Before(async function () {
    this.context = await browser.newContext()
    this.page = await this.context.newPage()
    this.baseUrl = process.env.BASE_URL || "http://localhost:3000"
})

After(async function () {
    await this.context.close()
})

AfterAll(async function () {
    await browser.close()
})
