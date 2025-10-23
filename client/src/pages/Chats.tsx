import Header from "@/components/Header";
import ChatMessage from "@/components/ChatMessage";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";
import { useState } from "react";

const conversations = [
  { id: 1, name: "John Murphy", lastMessage: "Is the camera still available?", time: "10:32 AM", unread: 2 },
  { id: 2, name: "Sarah O'Connor", lastMessage: "Thanks for the quick delivery!", time: "Yesterday", unread: 0 },
  { id: 3, name: "Michael Ryan", lastMessage: "What's the pickup location?", time: "2 days ago", unread: 1 },
];

export default function Chats() {
  const [selectedChat, setSelectedChat] = useState(1);
  const [message, setMessage] = useState("");

  const handleSend = () => {
    console.log("Sending message:", message);
    setMessage("");
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8" data-testid="text-page-title">Messages</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-[600px]">
          <Card className="lg:col-span-1">
            <CardHeader className="border-b border-card-border">
              <h2 className="font-semibold" data-testid="text-conversations-title">Conversations</h2>
            </CardHeader>
            <CardContent className="p-0">
              <div className="divide-y divide-card-border">
                {conversations.map((conv) => (
                  <div
                    key={conv.id}
                    onClick={() => setSelectedChat(conv.id)}
                    className={`p-4 cursor-pointer hover-elevate active-elevate-2 ${
                      selectedChat === conv.id ? "bg-muted" : ""
                    }`}
                    data-testid={`conversation-${conv.id}`}
                  >
                    <div className="flex items-start gap-3">
                      <Avatar>
                        <AvatarFallback>{conv.name.slice(0, 2).toUpperCase()}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-1">
                          <p className="font-medium" data-testid="text-contact-name">{conv.name}</p>
                          <span className="text-xs text-muted-foreground" data-testid="text-time">{conv.time}</span>
                        </div>
                        <p className="text-sm text-muted-foreground truncate" data-testid="text-last-message">
                          {conv.lastMessage}
                        </p>
                      </div>
                      {conv.unread > 0 && (
                        <div className="bg-primary text-primary-foreground rounded-full w-5 h-5 flex items-center justify-center text-xs" data-testid="badge-unread">
                          {conv.unread}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="lg:col-span-2 flex flex-col">
            <CardHeader className="border-b border-card-border">
              <div className="flex items-center gap-3">
                <Avatar>
                  <AvatarFallback>JM</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-semibold" data-testid="text-active-chat-name">John Murphy</p>
                  <p className="text-sm text-muted-foreground" data-testid="text-active-status">Active now</p>
                </div>
              </div>
            </CardHeader>
            
            <CardContent className="flex-1 overflow-y-auto p-6">
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
            </CardContent>
            
            <div className="p-4 border-t border-card-border">
              <div className="flex gap-2">
                <Input
                  placeholder="Type a message..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                  data-testid="input-message"
                />
                <Button onClick={handleSend} data-testid="button-send">
                  <Send className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
