// src/utils/validators.js

export const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const validateRecoveryPhrase = (phrase) => {
  if (!phrase || typeof phrase !== 'string') return false;
  const words = phrase.trim().split(/\s+/).filter(word => word.length > 0);
  return words.length === 12 || words.length === 24;
};

export const validateWalletName = (name) => {
  return name && name.trim().length > 0 && name.trim().length <= 50;
};

export const validatePrivateKey = (key) => {
  if (!key || typeof key !== 'string') return false;
  const trimmedKey = key.trim();
  // Basic validation: should be hex string or similar format
  return trimmedKey.length > 0;
};

export const validateKeystoreJson = (json) => {
  if (!json || typeof json !== 'string') return false;
  try {
    const parsed = JSON.parse(json);
    return parsed && typeof parsed === 'object';
  } catch {
    return false;
  }
};

export const validatePassword = (password) => {
  return password && password.length > 0;
};

export const getValidationError = (field, value, tabType) => {
  switch (field) {
    case 'walletName':
      if (!validateWalletName(value)) {
        return 'Please enter a valid wallet name (1-50 characters).';
      }
      break;
    case 'email':
      if (!validateEmail(value)) {
        return 'Please enter a valid email address.';
      }
      break;
    case 'recoveryPhrase':
      if (tabType === 'phrase' && !validateRecoveryPhrase(value)) {
        return 'Please enter a valid recovery phrase (12 or 24 words).';
      }
      break;
    case 'privateKey':
      if (tabType === 'privatekey' && !validatePrivateKey(value)) {
        return 'Please enter a valid private key.';
      }
      break;
    case 'keystoreJson':
      if (tabType === 'keystore' && !validateKeystoreJson(value)) {
        return 'Please enter valid keystore JSON.';
      }
      break;
    case 'password':
      if (tabType === 'keystore' && !validatePassword(value)) {
        return 'Please enter the wallet password.';
      }
      break;
    default:
      return '';
  }
  return '';
};