"use client";
import { Provider } from "react-redux";
import { store } from "@/store";
import React from "react";

interface Props {
  children: React.ReactNode;
}

function Providers({ children }: Props) {
  return <Provider store={store}>{children}</Provider>;
}

export default Providers;
