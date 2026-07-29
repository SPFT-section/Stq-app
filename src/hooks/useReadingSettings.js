import { useLocalStorage } from './useLocalStorage';

const defaultSettings = {
  fontSize: 16,
  fontFamily: 'Inter',
  lineHeight: 1.6,
  letterSpacing: 0.5,
  margin: 20,
  theme: 'light',
};

export const useReadingSettings = () => {
  const [settings, setSettings] = useLocalStorage(
    'stq-reading-settings',
    defaultSettings
  );

  const updateSetting = (key, value) => {
    setSettings((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const resetSettings = () => {
    setSettings(defaultSettings);
  };

  const getFontFamilyClass = () => {
    const fontMap = {
      Inter: 'font-primary',
      Georgia: 'font-secondary',
      'JetBrains Mono': 'font-mono',
    };
    return fontMap[settings.fontFamily] || 'font-primary';
  };

  const getReadingStyles = () => {
    return {
      fontSize: `${settings.fontSize}px`,
      fontFamily: settings.fontFamily,
      lineHeight: settings.lineHeight,
      letterSpacing: `${settings.letterSpacing}px`,
      margin: `${settings.margin}px`,
    };
  };

  return {
    settings,
    updateSetting,
    resetSettings,
    getFontFamilyClass,
    getReadingStyles,
  };
};
