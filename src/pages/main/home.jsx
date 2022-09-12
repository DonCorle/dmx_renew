/* eslint-disable */
import React, { useState } from "react";
import { useRouter } from "next/router";
import Layout from "../../components/Layout";
import { fetcher } from "../../lib/api";
import { getIdFromLocalCookie, getTokenFromServerCookie } from "../../lib/auth";
import { useFetchUser } from "../../lib/authContext";

const Home = ({ avatar }) => {
  const { user } = useFetchUser();
  const [image, setImage] = useState(null);
  const router = useRouter();

  return (
    <Layout>
      <div className="app">
        <div className="app-nav">
          <h1>Home</h1>
        </div>
        <div>
          <h1 className="text-2xl font-bold">
            Hello{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">
              {user}
            </span>
            <span>👋</span>
          </h1>
        </div>
      </div>
    </Layout>
  );
};

export default Home;

export async function getServerSideProps({ req }) {
  const jwt = getTokenFromServerCookie(req);
  if (!jwt) {
    return {
      redirect: {
        destination: "/",
      },
    };
  } else {
    const responseData = await fetcher(
      `${process.env.NEXT_PUBLIC_STRAPI_URL}/users/me`,
      {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      }
    );
    const avatar = responseData.avatar ? responseData.avatar : "default_avatar";
    return {
      props: {
        avatar,
      },
    };
  }
}
