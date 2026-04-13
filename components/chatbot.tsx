"use client"

export function Chatbot() {
  return (
    <>
      {/* @ts-expect-error - ElevenLabs custom element */}
      <elevenlabs-convai agent-id="agent_5401k7jh0pxmfva8saxfc1mstqxt" />
    </>
  )
}
