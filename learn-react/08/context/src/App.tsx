import Page from "./components/Page";
import CountOutsideDisplay from "./components/CountOutsideDisplay";
import CounterProvider from "./contexts/counter/CounterProvider";
import ConfigureProvider from "./contexts/configure/ConfigureProvider";

export default function App() {
  return (
    <>
      <ConfigureProvider>
        <CounterProvider>
          <Page />
          <CountOutsideDisplay />
        </CounterProvider>
      </ConfigureProvider>
    </>
  );
}
