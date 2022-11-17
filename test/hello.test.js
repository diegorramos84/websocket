import WebSocket from "ws"

describe("Connect to server", () => {
  beforeAll(() => {
  })

  afterAll(() => {
  })

  test("send Hello to client", async () => {
    // create test client
    const client = new WebSocket('ws://51.141.52.52:1234');
    // send message
    const testMessage = {
      "Name": "Diego"}

    let responseMessage

    client.on("message", (data) => {
      responseMessage = data
    })

    client.send(JSON.stringify(testMessage))
    console.log(testMessage)
    expect(responseMessage).toBe(testMessage)
  })
})
