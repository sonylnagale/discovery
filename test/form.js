import puppeteer from "puppeteer"

const APP = "http://localhost:3000/"

let page
let browser
const width  = 1920
const height = 1080

beforeAll(async () => {
  browser = await puppeteer.launch({
    headless: false,
    slowMo: 80,
    args: [`--window-size=${width},${height}`]
  })
  page = await browser.newPage()
  await page.setViewport({ width, height })
})
afterAll(() => {
  browser.close()
})

describe("Enter Email", () => {
  test("Email is empty", async () => {
    await page.goto(APP)
    await page.waitForSelector("[data-test=email]")
    const email = await page.$eval("[data-test=email]", el => el.textContent)
    expect(email.length).to.be(0)
  }, 16000)
})
