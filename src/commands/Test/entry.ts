import { ICommand } from '../../types/interfaces';
import { CommandCategories, CommandSubCategories } from '../../types/enums';
import { loadCommandTranslations } from '../../managers/i18nManager';
import tr from './translations/tr.json';
import en from './translations/en.json';

class TestCommand implements ICommand {
  id = 'test'

  category = CommandCategories.GUILD

  subCategory = CommandSubCategories.MODERATION

  load = () => {
    loadCommandTranslations(this.id, {
      en,
      tr,
    });
  }
}

export default TestCommand;
