/**
 * useNodeLibraryNav — stack-based navigation hook for the 3-level node library.
 */

import { useState, useCallback } from 'react';
import { type NavLevel } from './nodeLibraryData';

export function useNodeLibraryNav() {
  const [navStack, setNavStack] = useState<NavLevel[]>([{ type: 'home' }]);
  const [searchQuery, setSearchQuery] = useState('');

  const currentLevel = navStack[navStack.length - 1]!;

  const navigateTo = useCallback((level: NavLevel) => {
    setNavStack((prev) => [...prev, level]);
    setSearchQuery('');
  }, []);

  const goBack = useCallback(() => {
    setNavStack((prev) => (prev.length > 1 ? prev.slice(0, -1) : prev));
    setSearchQuery('');
  }, []);

  const goHome = useCallback(() => {
    setNavStack([{ type: 'home' }]);
    setSearchQuery('');
  }, []);

  return {
    currentLevel,
    searchQuery,
    setSearchQuery,
    navigateTo,
    goBack,
    goHome,
  };
}
