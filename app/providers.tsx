'use client';

import { useEffect, useState } from "react";
import { Provider } from "react-redux";
import { ToastContainer } from 'react-toastify';
import StorageWrapper from "../components/ecommerce/storage-wrapper";
import store from "../redux/store";
import Preloader from "../components/elements/Preloader";

export function Providers({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true); // Start with true to match initial render
  const [mounted, setMounted] = useState(false); // Track if component is mounted

  useEffect(() => {
    setMounted(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  // Don't render children until mounted to avoid hydration mismatch
  if (!mounted) {
    return <Preloader />;
  }

  if (loading) {
    return <Preloader />;
  }

  return (
    <Provider store={store}>
      <StorageWrapper>
        {children}
        <ToastContainer />
      </StorageWrapper>
    </Provider>
  );
}

