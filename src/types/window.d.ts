interface Window {
  gtag: (
    command: 'config' | 'event' | 'set' | 'consent',
    targetId: string,
    config?: Record<string, unknown>,
  ) => void;
}
