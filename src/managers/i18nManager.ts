import i18next from 'i18next';

export const supportedLngs = ['en', 'tr'];

i18next.init({
  lng: 'en',
  supportedLngs,
  defaultNS: 'common',
  resources: {},
});

export const loadCommandTranslations = (id: string, jsons: Record<string, Record<string, string>>) => {
  for (const lng of supportedLngs) {
    const json = jsons[lng];
    if (json) {
      i18next.addResourceBundle(lng, id, json);
    }
  }
};

export { i18next };
