import puppeteer from "puppeteer";

const APP = "http://localhost:3000/"

let page
let browser
const width  = 1920
const height = 1080

beforeAll(async () => {
  browser = await puppeteer.launch({
    headless: false,
    slowMo: 10,
    args: [`--window-size=${width},${height}`]
  })
  page = await browser.newPage()
  await page.setViewport({ width, height })
})
afterAll(() => {
  browser.close()
})

describe("Successful Form Submission", () => {
  test("Email is empty", async () => {
    await page.goto(APP)
    await page.waitForSelector("[data-test=email]")
    const email = await page.$eval("[data-test=email]", el => el.value)
    expect(email.length).toBe(0)
  }, 16000)
  test("Can enter email", async () => {
    await page.type("[data-test=email]", "test@test.com")
    const email = await page.$eval("[data-test=email]", el => el.value)
    expect(email).toEqual("test@test.com")
  }, 16000)
  test("Can click TOC", async () => {
    await page.click("[data-test=toc]")
    const toc = await page.$eval("[data-test=toc]", el => el.checked)
    expect(toc).toBe(true)
  }, 16000)
  test("Can click NEXT", async () => {
    await page.click("[data-test=next]")
    const firstName = await page.$eval("[data-test=firstName]", el => el.value)
    expect(firstName.length).toBe(0)
  }, 16000)
  test("Can enter first name", async () => {
    await page.type("[data-test=firstName]", "first name")
    const name = await page.$eval("[data-test=firstName]", el => el.value)
    expect(name).toEqual("first name")
  }, 16000)
  test("Can enter last name", async () => {
    await page.type("[data-test=lastName]", "last name")
    const name = await page.$eval("[data-test=lastName]", el => el.value)
    expect(name).toEqual("last name")
  }, 16000)
  test("Can click NEXT", async () => {
    await page.click("[data-test=next]")
    await page.waitForSelector("[data-test=text]")
    const text = await page.$eval("[data-test=text]", el => el.textContent)
    expect(text).toEqual("Look out for the latest news on your favorite shows.")
  }, 16000)
})

describe("Did not enter anything", () => {
  test("Warning on email field", async () => {
    await page.goto(APP)
    await page.click("[data-test=next]")
    const border = await page.$eval("[data-test=email]", el => el.style.boxShadow)
    expect(border.length).toBeGreaterThan(0)
  })
  test("Warning on toc field", async () => {
    const border = await page.$eval("[data-test=toc]", el => el.style.boxShadow)
    expect(border.length).toBeGreaterThan(0)
  })
})

describe("Entered email", () => {
  test("Warning on toc field", async () => {
    await page.goto(APP)
    await page.type("[data-test=email]", "test@test.com")
    await page.click("[data-test=next]")
    const border = await page.$eval("[data-test=email]", el => el.style.boxShadow)
    expect(border.length).toBe(0)
  })
})

describe("Entered toc", () => {
  test("Warning on email field", async () => {
    await page.goto(APP)
    await page.click("[data-test=toc]")
    await page.click("[data-test=next]")
    const border = await page.$eval("[data-test=toc]", el => el.style.boxShadow)
    expect(border.length).toBe(0)
  })
})

describe("Entered First Name", () => {
  test("Can enter email", async () => {
    await page.goto(APP)
    await page.type("[data-test=email]", "test@test.com")
    const email = await page.$eval("[data-test=email]", el => el.value)
    expect(email).toEqual("test@test.com")
  }, 16000)
  test("Can click TOC", async () => {
    await page.click("[data-test=toc]")
    const toc = await page.$eval("[data-test=toc]", el => el.checked)
    expect(toc).toBe(true)
  }, 16000)
  test("Can click NEXT", async () => {
    await page.click("[data-test=next]")
    const firstName = await page.$eval("[data-test=firstName]", el => el.value)
    expect(firstName.length).toBe(0)
  }, 16000)
  test("Can enter first name", async () => {
    await page.type("[data-test=firstName]", "first name")
    const name = await page.$eval("[data-test=firstName]", el => el.value)
    expect(name).toEqual("first name")
  }, 16000)
  test("Warning on last name field", async () => {
    await page.click("[data-test=next]")
    const border = await page.$eval("[data-test=lastName]", el => el.style.boxShadow)
    expect(border.length).toBeGreaterThan(0)
  })
})

describe("Entered Last Name", () => {
  test("Can enter email", async () => {
    await page.goto(APP)
    await page.type("[data-test=email]", "test@test.com")
    const email = await page.$eval("[data-test=email]", el => el.value)
    expect(email).toEqual("test@test.com")
  }, 16000)
  test("Can click TOC", async () => {
    await page.click("[data-test=toc]")
    const toc = await page.$eval("[data-test=toc]", el => el.checked)
    expect(toc).toBe(true)
  }, 16000)
  test("Can click NEXT", async () => {
    await page.click("[data-test=next]")
    const firstName = await page.$eval("[data-test=firstName]", el => el.value)
    expect(firstName.length).toBe(0)
  }, 16000)
  test("Can enter last name", async () => {
    await page.type("[data-test=lastName]", "last name")
    const name = await page.$eval("[data-test=lastName]", el => el.value)
    expect(name).toEqual("last name")
  }, 16000)
  test("Warning on first name field", async () => {
    await page.click("[data-test=next]")
    const border = await page.$eval("[data-test=firstName]", el => el.style.boxShadow)
    expect(border.length).toBeGreaterThan(0)
  })
})
