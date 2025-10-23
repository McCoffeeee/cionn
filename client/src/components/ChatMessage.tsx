import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

interface ChatMessageProps {
  content: string;
  timestamp: string;
  isOwn?: boolean;
  senderName?: string;
  senderAvatar?: string;
}

export default function ChatMessage({
  content,
  timestamp,
  isOwn = false,
  senderName,
  senderAvatar,
}: ChatMessageProps) {
  return (
    <div className={cn("flex gap-3 mb-4", isOwn && "flex-row-reverse")} data-testid="chat-message">
      <Avatar className="w-8 h-8">
        <AvatarImage src={senderAvatar} alt={senderName} />
        <AvatarFallback>{senderName?.slice(0, 2).toUpperCase()}</AvatarFallback>
      </Avatar>
      
      <div className={cn("flex flex-col", isOwn ? "items-end" : "items-start")}>
        {!isOwn && senderName && (
          <span className="text-xs text-muted-foreground mb-1" data-testid="text-sender-name">{senderName}</span>
        )}
        <div
          className={cn(
            "rounded-lg px-4 py-2 max-w-sm",
            isOwn
              ? "bg-primary text-primary-foreground"
              : "bg-muted text-foreground"
          )}
          data-testid="text-message-content"
        >
          {content}
        </div>
        <span className="text-xs text-muted-foreground mt-1" data-testid="text-timestamp">{timestamp}</span>
      </div>
    </div>
  );
}
