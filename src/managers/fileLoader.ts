import { Client } from 'discord.js';
import fs from 'fs';
import path from 'path';
import { i18next, supportedLngs } from './i18nManager';
import { ICommand } from '../types/interfaces';

const loadCommands = async () => {
  const languagesMap = new Map([
    [
      'en',
      new Map(),
    ],
    [
      'tr',
      new Map(),
    ],
  ]);
  const commandIds = [];
  const basePath = path.join(__dirname, '..', 'commands');
  const commandFolders = fs.readdirSync(basePath);
  for await (const commandFolder of commandFolders) {
    const commandFile = path.join(basePath, commandFolder, 'entry');
    const rawCommandModule = await import(commandFile);
    const commandModule = rawCommandModule.default;
    const commandInstance = new commandModule();
    commandInstance.load();
    commandIds.push({
      id: commandInstance.id,
      instance: commandInstance,
    });
  }
  for (const language of supportedLngs) {
    i18next.changeLanguage(language);
    const commandsMap = languagesMap.get(language);
    if (commandsMap) {
      for (const commandObj of commandIds) {
        const aliasString = i18next.t(`${commandObj.id}:aliases`);
        for (const alias of aliasString.split(',')) {
          commandsMap.set(alias, commandObj.instance);
        }
      }
    }
  }
  return languagesMap;
};

const bindEvents = async (client: Client) => {
  const basePath = path.join(__dirname, '..', 'events');
  const eventsFiles = fs.readdirSync(basePath);
  for await (const eventFileName of eventsFiles) {
    const on = eventFileName.split('.')[0];
    const eventFile = path.join(basePath, eventFileName);
    const rawEventModule = await import(eventFile);
    const eventFunction = rawEventModule.default;
    client.on(on, (...args) => eventFunction(client, ...args));
  }
};

export {
  loadCommands,
  bindEvents,
};
