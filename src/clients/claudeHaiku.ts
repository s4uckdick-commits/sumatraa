import { ENABLE_CLAUDE_HAIKU_4_5 } from "../../config/features";

export function isClaudeHaiku45Enabled(clientId: string): boolean {
  // Enable for all clients
  return ENABLE_CLAUDE_HAIKU_4_5;
}
