"use client";

import React, { createContext, useContext, useState, useEffect, useCallback } from "react";

export type ConsentStatus = "accepted" | "rejected" | null;

interface CookieConsentContextType {
  consent: ConsentStatus;
  isOpen: boolean;
  openCookieSettings: () => void;
  closeBanner: () => void;
  acceptAll: () => void;
  rejectOptional: () => void;
  showPrivacyModal: boolean;
  openPrivacyModal: () => void;
  closePrivacyModal: () => void;
}

const CookieConsentContext = createContext<CookieConsentContextType | undefined>(undefined);

const STORAGE_KEY = "3c_cookie_consent";

export const CookieConsentProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [consent, setConsent] = useState<ConsentStatus>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [showPrivacyModal, setShowPrivacyModal] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Initialize consent status from localStorage on mount
  useEffect(() => {
    setMounted(true);
    try {
      const stored = localStorage.getItem(STORAGE_KEY) as ConsentStatus;
      if (stored === "accepted" || stored === "rejected") {
        setConsent(stored);
        setIsOpen(false);
      } else {
        // Wait 400ms after initial page render for smooth, non-intrusive entrance
        const timer = setTimeout(() => {
          setIsOpen(true);
        }, 400);
        return () => clearTimeout(timer);
      }
    } catch {
      // localStorage may fail in restricted/private environments
      setIsOpen(true);
    }
  }, []);

  const acceptAll = useCallback(() => {
    setConsent("accepted");
    setIsOpen(false);
    try {
      localStorage.setItem(STORAGE_KEY, "accepted");
    } catch (e) {
      console.warn("Unable to save cookie consent to localStorage", e);
    }
  }, []);

  const rejectOptional = useCallback(() => {
    setConsent("rejected");
    setIsOpen(false);
    try {
      localStorage.setItem(STORAGE_KEY, "rejected");
    } catch (e) {
      console.warn("Unable to save cookie consent to localStorage", e);
    }
  }, []);

  const openCookieSettings = useCallback(() => {
    setIsOpen(true);
  }, []);

  const closeBanner = useCallback(() => {
    setIsOpen(false);
  }, []);

  const openPrivacyModal = useCallback(() => {
    setShowPrivacyModal(true);
  }, []);

  const closePrivacyModal = useCallback(() => {
    setShowPrivacyModal(false);
  }, []);

  // Avoid SSR hydration mismatch
  if (!mounted) {
    return <>{children}</>;
  }

  return (
    <CookieConsentContext.Provider
      value={{
        consent,
        isOpen,
        openCookieSettings,
        closeBanner,
        acceptAll,
        rejectOptional,
        showPrivacyModal,
        openPrivacyModal,
        closePrivacyModal,
      }}
    >
      {children}
    </CookieConsentContext.Provider>
  );
};

export const useCookieConsent = (): CookieConsentContextType => {
  const context = useContext(CookieConsentContext);
  if (!context) {
    // Return safe fallback if used outside provider
    return {
      consent: null,
      isOpen: false,
      openCookieSettings: () => {},
      closeBanner: () => {},
      acceptAll: () => {},
      rejectOptional: () => {},
      showPrivacyModal: false,
      openPrivacyModal: () => {},
      closePrivacyModal: () => {},
    };
  }
  return context;
};
