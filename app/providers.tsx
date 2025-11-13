'use client';

import { useEffect, useState } from "react";
import { Provider } from "react-redux";
import { ToastContainer } from 'react-toastify';
import StorageWrapper from "../components/ecommerce/storage-wrapper";
import store from "../redux/store";
import Preloader from "../components/elements/Preloader";

export function Providers({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

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

