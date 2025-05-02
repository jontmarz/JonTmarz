/**
 * Returns a random variation of a translation key.
 * @param t - Translation function from useTranslation
 * @param baseKey - The base translation key without variation number (e.g., 'cta.title')
 * @param variations - Number of available variations (default: 3)
 * @returns The translated string from a randomly selected variation
 */
export const getRandomVariation = (
  t: (key: string) => string, 
  baseKey: string, 
  variations: number = 3
): string => {
  // Generate a random number between 1 and the number of variations
  const randomVariation = Math.floor(Math.random() * variations) + 1;
  // Return the translated string for the selected variation
  return t(`${baseKey}${randomVariation}`);
};
