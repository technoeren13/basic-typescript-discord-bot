import { EventHandler } from '../types/types'

const handler: EventHandler<'ready'> = (client) => {
  console.log(`${client.user!.username} aktif!`);
  client.user!.setActivity("import { TechnoCanary } from 'technobot'");
};

export default handler
