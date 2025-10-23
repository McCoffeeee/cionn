import ChatMessage from '../ChatMessage';

export default function ChatMessageExample() {
  return (
    <div className="max-w-2xl mx-auto p-4 bg-card rounded-lg">
      <ChatMessage
        content="Hi! Is the camera still available for rent this weekend?"
        timestamp="10:32 AM"
        senderName="John Murphy"
        isOwn={false}
      />
      <ChatMessage
        content="Yes, it's available! The rental is €45 per day."
        timestamp="10:35 AM"
        isOwn={true}
      />
      <ChatMessage
        content="Perfect! I'd like to rent it from Friday to Sunday. Can we arrange pickup?"
        timestamp="10:37 AM"
        senderName="John Murphy"
        isOwn={false}
      />
      <ChatMessage
        content="Absolutely! I'm in Dublin 2. We can meet at Temple Bar on Friday afternoon if that works?"
        timestamp="10:40 AM"
        isOwn={true}
      />
    </div>
  );
}
