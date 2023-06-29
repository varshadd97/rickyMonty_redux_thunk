/** @format */
"use client";

import Image from "next/image";
import React from "react";
import { Provider } from "react-redux";
import RickyMonty from "./RickyMonty";

import store from "../app/redux/store";

export default function Home() {
  return (
    <Provider store={store}>
      <RickyMonty/>
    </Provider>
  );
}
