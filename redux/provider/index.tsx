"use client";
import { PersistGate } from "redux-persist/integration/react";
import store from "../store/store";
import { Provider } from "react-redux";
import { persistStore } from "redux-persist";
import Loading from "@/app/loading";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export function Providers({ children }: { children: React.ReactNode }) {
  const persistor = persistStore(store);
  useEffect(() => {
    AOS.init({
      easing: "ease-out-cubic",
      offset: 50,
    });
  }, []);
  return (
    <Provider store={store}>
      <PersistGate loading={<Loading />} persistor={persistor}>
        <div className="new-body">{children}</div>
      </PersistGate>
    </Provider>
  );
}
