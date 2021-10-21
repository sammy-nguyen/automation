// In your terminal, cd into the movieList folder, this page should look familiar!

// Run npm i

// You’ll need to make and write your test file from scratch

// Don’t forget your imports from selenium, the chromedriver, and driver

// Open the HTML file with live server (install it in the extensions tab of VS Code if you don’t have it already)

// The URL you’ll go to will be the one from Live Server
// it’ll look like this: http://localhost:5500/exercises/automation/movieList/index.html

// it might have 127.0.0.1 in the URL, which is the same as localhost, so you can replace the IP so it looks like the one above




const { Builder, Capabilities, By } = require("selenium-webdriver")

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

//Write a beforeAll that connects to that URL

beforeAll(async () => {
    await (await driver).get('http://127.0.0.1:5500/movieList/index.html')
})

//Write an afterAll that quits the driver

afterAll(async () => {
    await (await driver).quit()
})

//Write a test that adds a movie to the page

test('I can add movies', async () => {


//You’ll need to select the input field and button



    let addMovie = await driver.findElement(By.xpath("//input[@placeholder = 'Add Movie']"))

//You’ll need to type in the input field

    await addMovie.sendKeys('Squid Game\n')
    await addMovie.sendKeys('Hometown cha cha cha\n')
    await driver.sleep(3000)



//You’ll need to click the button

    await driver.findElement(By.xpath("//span[text() = 'Squid Game']")).click()
    await driver.findElement(By.xpath("//span[text() = 'Hometown cha cha cha']")).click()
    await driver.sleep(3000)


//Write tests for the rest of the functionality of the Movie List
//Consider crossing a movie off or deleting a movie

    await driver.findElement(By.xpath("//button[text() = 'x'][1]")).click()
    await driver.findElement(By.xpath("//button[text() = 'x'][1]")).click()
    await driver.sleep(4000)




    
//Maybe a test that confirms that the messages say the right thing

    // //let messageIsDeleted =
    // let messageIsDeleted = await driver.findElement(By.id("message"))
    // // console.log (messageIsDeleted)
    // expect(messageIsDeleted).toContain("deleted")
    // await driver.sleep(3000)



})
