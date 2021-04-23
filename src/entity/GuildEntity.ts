import { Entity, getRepository } from 'typeorm'

@Entity()
class GuildEntity {
}

const GuildRepository = getRepository(GuildEntity)

export {
  GuildEntity
}