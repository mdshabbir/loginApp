export const getPasswordStrength = (password: string): string => {
    if (!password) return '';
    const strength = [
      /[a-z]/.test(password),
      /[A-Z]/.test(password),
      /[0-9]/.test(password),
      /[@$!%*?&#]/.test(password),
    ].filter(Boolean).length;
  
    if (strength <= 2) return 'Weak';
    if (strength === 3) return 'Moderate';
    return 'Strong';
  };
  