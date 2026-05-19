import { useCallback, useMemo, useState } from 'react';
import { MOCK_HOSTNAME } from '../../content/siteCopy';

export interface DemoState {
  globalEnabled: boolean;
  siteEnabled: boolean;
  brightness: number;
  contrast: number;
  blacklist: string[];
  hostname: string;
}

export interface DemoDerived {
  isDarkActive: boolean;
  siteStatusEnabled: boolean;
}

const DEFAULT_STATE: DemoState = {
  globalEnabled: true,
  siteEnabled: true,
  brightness: 100,
  contrast: 100,
  blacklist: [],
  hostname: MOCK_HOSTNAME,
};

function computeDerived(state: DemoState): DemoDerived {
  const blacklisted = state.blacklist.includes(state.hostname);
  const siteStatusEnabled = state.siteEnabled && !blacklisted;
  const isDarkActive = state.globalEnabled && siteStatusEnabled;
  return { isDarkActive, siteStatusEnabled };
}

export function useDemoState() {
  const [state, setState] = useState<DemoState>(DEFAULT_STATE);
  const derived = useMemo(() => computeDerived(state), [state]);

  const setGlobalEnabled = useCallback((globalEnabled: boolean) => {
    setState((prev) => ({ ...prev, globalEnabled }));
  }, []);

  const setSiteEnabled = useCallback((siteEnabled: boolean) => {
    setState((prev) => ({ ...prev, siteEnabled }));
  }, []);

  const setBrightness = useCallback((brightness: number) => {
    setState((prev) => ({ ...prev, brightness }));
  }, []);

  const setContrast = useCallback((contrast: number) => {
    setState((prev) => ({ ...prev, contrast }));
  }, []);

  const addToBlacklist = useCallback((domain: string) => {
    const trimmed = domain.trim().toLowerCase();
    if (!trimmed) return;
    setState((prev) => {
      if (prev.blacklist.includes(trimmed)) return prev;
      return { ...prev, blacklist: [...prev.blacklist, trimmed] };
    });
  }, []);

  const removeFromBlacklist = useCallback((domain: string) => {
    setState((prev) => ({
      ...prev,
      blacklist: prev.blacklist.filter((d) => d !== domain),
    }));
  }, []);

  const toggleSite = useCallback(() => {
    setState((prev) => ({ ...prev, siteEnabled: !prev.siteEnabled }));
  }, []);

  return {
    state,
    derived,
    setGlobalEnabled,
    setSiteEnabled,
    setBrightness,
    setContrast,
    addToBlacklist,
    removeFromBlacklist,
    toggleSite,
  };
}

export type UseDemoStateReturn = ReturnType<typeof useDemoState>;
