import { config } from 'dotenv-safe';
import { Client } from 'discord.js';
import { loadCommands, bindEvents } from './managers/fileLoader';

config({
  path: `.env.${process.env.NODE_ENV}`,
});

const client = new Client();

const bootstrap = async () => {
  await bindEvents(client);

  await loadCommands();

  await client.login();
};

bootstrap();
