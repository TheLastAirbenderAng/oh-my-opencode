import type { AgentConfig } from "@opencode-ai/sdk"
import { sisyphusAgent } from "./sisyphus"
import { oracleAgent } from "./oracle"
import { librarianAgent } from "./librarian"
import { exploreAgent } from "./explore"
import { frontendUiUxEngineerAgent } from "./frontend-ui-ux-engineer"
import { documentWriterAgent } from "./document-writer"
import { multimodalLookerAgent } from "./multimodal-looker"
import { metisAgent } from "./metis"
import { orchestratorSisyphusAgent } from "./orchestrator-sisyphus"
import { momusAgent } from "./momus"
// Custom agents
import { backendEngineerAgent } from "./backend-engineer"
import { databaseEngineerAgent } from "./database-engineer"
import { codeReviewerAgent } from "./code-reviewer"
import { browserTestingAgentAgent } from "./browser-testing-agent"
import { testCreatorAgent } from "./test-creator"

export const builtinAgents: Record<string, AgentConfig> = {
  Sisyphus: sisyphusAgent,
  oracle: oracleAgent,
  librarian: librarianAgent,
  explore: exploreAgent,
  "frontend-ui-ux-engineer": frontendUiUxEngineerAgent,
  "document-writer": documentWriterAgent,
  "multimodal-looker": multimodalLookerAgent,
  "Metis (Plan Consultant)": metisAgent,
  "Momus (Plan Reviewer)": momusAgent,
  "orchestrator-sisyphus": orchestratorSisyphusAgent,
  // Custom agents for extended pipeline
  "backend-engineer": backendEngineerAgent,
  "database-engineer": databaseEngineerAgent,
  "code-reviewer": codeReviewerAgent,
  "browser-tester": browserTestingAgentAgent,
  "test-creator": testCreatorAgent,
}

export * from "./types"
export { createBuiltinAgents } from "./utils"
export type { AvailableAgent } from "./sisyphus-prompt-builder"
