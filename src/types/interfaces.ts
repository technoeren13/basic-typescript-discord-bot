import { CommandCategories, CommandSubCategories } from './enums';

export interface ICommand {
  id: string
  category: CommandCategories
  subCategory: CommandSubCategories

  load: () => void
}
