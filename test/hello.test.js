import WebSocket from "ws"
import { waitForSocketState } from "../utils/webSocketUtils";

describe("Connect to server", () => {
  beforeAll(() => {
  })

  afterAll(() => {
  })

  test("send Hello to client", async () => {
    // create test client
    const client = new WebSocket('ws://51.141.52.52:1234')
    await waitForSocketState(client, client.OPEN);
    // send message
    const testMessage = {
      "Name": "Diego"}

    let responseMessage

    client.on("message", (data) => {
      responseMessage = data
      client.close
    })

    client.send(JSON.stringify(testMessage))
    console.log(testMessage)
    expect(responseMessage).toContain('Please answer your first question when all players have joined the room')
  })
})
