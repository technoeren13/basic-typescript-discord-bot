import { Client, ClientEvents } from 'discord.js'

type CommandInfo = {
  exampleUsage: string
  summary: string
  description: string
}

export type EventHandler<T extends keyof ClientEvents> = (client: Client, ...args: ClientEvents[T]) => void