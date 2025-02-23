import { useState } from "react";
import Image from 'next/image';

export default function Home() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  // Array of random fun responses
  const randomResponses = [
    "Annyeong! Do you want a K-drama recommendation? 😉",
    "Did someone say shopping? Check out Sarangshop for cool merch! 🛍️",
    "If life were a K-drama, this would be our meet-cute moment!",
    "As a bridal consultant, I'd say go for lace—it's timeless!",
    "React, Next.js, Tailwind... You speak my love language! ❤️",
    "I can answer questions, chat about K-dramas, or give fashion advice. Your choice!"
  ];

  // Keyword-based responses
  const keywordResponses = {
    "hi": "Hi there! Ready for some K-drama or coding talk ? 😊",
    "hey": "Hi there! Ready for some K-drama or coding talk ? 😊",
    "hello": "Hey! How's your day going?",
    "Annyeong": "Annyeong! How's your day going?",
    "what can you do": "I can chat about K-dramas, coding or just keep you company!",
    "help": "Sure! I can suggest K-drama picks, or even coding tips. What do you need?",
    "bye": "Goodbye! Hope to chat with you again soon! 👋",
    "good night": "Sleep tight! Dream of beautiful hanboks and K-drama scenes! 🌙",
    "how are you": "I'm an AI, but if I could feel, I'd be super excited to chat with you!",
    "k-drama": "Have you watched 'Mr Queen'? It's a must-see! 🎬",
    "k-dramas": "Have you watched 'Crash Landing on You'? It's a must-see! 🎬",
    "kdrama": "Have you watched 'Mr Queen'? It's a must-see! 🎬",
    "k-dramas": "Have you watched 'Captivating the King'? It's a must-see! 🎬",
    "no": "You should check out @thedramadiary9ja on instagram, she has some great suggestions on K-dramas to watch",
    "tell me about k-dramas": "K-dramas are fantastic pieces of cinema made in Korea! 🎬",
    "react": "React is awesome! Hooks, components, and all that good stuff! 💻",
    "how's your day": "Every day is a good day when I get to chat with you! 😊",
    "who created you": "Her name is Kevwe, shes's pretty awesome isn't she! 😊",
    "who wrote your code": "Her name is Kevwe, shes's pretty awesome isn't she! 😊",
    "coding": "My creator Kevwe has a coding course that would be great for you! You should reach out to her.",
    "coding tips": "HTML and CSS are extremely easy!",
    "yes": "Ok thats great!",
  };

  const fallbackResponses = [
    "Whoops! I don't know much about that yet, but I'm always learning!",
    "Hmm... That one's a bit outside my comfort zone. Want to chat about K-dramas or coding instead?",
    "Oops! I’m not sure about that. But hey, ask me anything about Sarangshop!",
    "Hmm... I'm not quite sure. Do you want to talk about coding or K-dramas instead?"
  ];

  const sendMessage = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const newMessages = [...messages, { text: input, sender: "user" }];
    setMessages(newMessages);
    setInput("");

    setIsTyping(true);

    setTimeout(() => {
      let response = fallbackResponses[Math.floor(Math.random() * fallbackResponses.length)];

      // Check for keyword-based responses first
      Object.keys(keywordResponses).forEach((keyword) => {
        if (input.toLowerCase().includes(keyword)) {
          response = keywordResponses[keyword];
        }
      });

      // If no keyword match, give a fallback response
      setMessages([...newMessages, { text: response, sender: "ai" }]);
      setIsTyping(false);
    }, 1500);
  };

  return (
    <div className="container">
      <div className="cont">
        <div  className="logo-cont ">
          <Image
            src="/images/logo.png"
            alt="Logo"
            width={45}
            height={20}
            priority
           className="mylogo"
          />
          <h2 className="mimi">Mimi</h2>
        </div>

        <div className="space-y-4 h-80 overflow-y-auto mb-6 texting">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"} msg`}
            >
              <div
                className={`max-w-xs p-3 rounded-lg ${msg.sender === "user" ? "bg-pink-500 text-black" : "bg-pink-200"
                  }`}
              >
                {msg.text}
              </div>
            </div>
          ))}
          {isTyping && (
            <div className="flex justify-start">
              <div className="animate-pulse max-w-xs p-3 bg-gray-200 rounded-lg">
                Typing...
              </div>
            </div>
          )}
        </div>
        <form onSubmit={sendMessage} className="flex myform">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-grow p-3 rounded-l-lg border border-gray-300 focus:outline-none input"
            placeholder="Ask me anything..."
          />
          <button
            type="submit"
            className="p-3  text-white rounded-r-lg  mybutton"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
}
