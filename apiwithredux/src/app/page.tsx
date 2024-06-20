"use client";

import store from "@/store/store";
import { Provider } from "react-redux";
import FetchUserButton from "./FetchUserButton";

export default function Home() {
  return (
    <Provider store={store}>
      <h1 className="text-red-600 text-3xl text-center m-8">API Call Using Redux Toolkit</h1>
      <main className="flex flex-col mt-22 items-center p-6 border bg-zinc-900">
        <FetchUserButton />
      </main>
    </Provider>
  );
}
