'use client';
import { useChat } from 'ai/react';
import Markdown from 'react-markdown';

export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();

  return (
    <div className="flex flex-col w-full mx-2 stretch">
      {messages.map((m) => (
        <div key={m.id} className="whitespace-pre-wrap">
          {m.role === 'user' ? 'User: ' : 'AI: '}
          <Markdown>{m.content}</Markdown>
        </div>
      ))}
      <form onSubmit={handleSubmit}>
        <input
          className="fixed bottom-0 w-full max-w-md p-2 mb-8 text-gray-900"
          value={input}
          placeholder="Type a message..."
          onChange={handleInputChange}
        />
      </form>
    </div>
  );
}
