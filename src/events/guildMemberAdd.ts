import { EventHandler } from '../types/types'

const handler: EventHandler<'guildMemberAdd'> = (client, member) => {
  console.log(`${member.user.username} join from ${member.guild}`);
};

export default handler;
