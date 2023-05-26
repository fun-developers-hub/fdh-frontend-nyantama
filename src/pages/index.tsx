import Head from "next/head";
import MainContainer from "../components/Layout/MainContainer/MainContainer";
import EventStatus from "../components/Elements/EventStatus/EventStatus";

export default function Home() {
  return (
    <>
      <Head>
        <title>FUN Developers Hub</title>
        <meta
          name="description"
          content="Online platform for developer communities at FUN"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <MainContainer>Hello! This is FUN Dev Hub.</MainContainer>
        <EventStatus status="active" />
      </main>
    </>
  );
}