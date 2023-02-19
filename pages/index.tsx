import Head from 'next/head'
import BoxPost from '@/components/BoxPost'
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { useQuery, QueryClient, dehydrate } from "react-query"
import { GetStaticProps, } from "next"// import { fetchPosts } from '@/components/fetchPosts';
import Link from 'next/link';
import fetchPost from '@/components/fetchPosts';
import { Post } from '@/types/post';
import useSearchStore from '@/store/useSearchValue';
import { useEffect, useState } from 'react';
import { error } from 'console';

export const getStaticProps: GetStaticProps = async () => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery(['allPosts'], () => fetchPost());
  return {
    props: {
      dehydratedState: dehydrate(queryClient)
    }
  };
};

export default function Home() {
  
  const listPosts = useSearchStore((state) => state.value)
  const setAllPost = useSearchStore((state) => state.setAllPost)
  const { isLoading } = useQuery(['allPosts'], () => fetchPost(), {
    onSuccess: (data) => setAllPost(data)
  });

  if (isLoading) {
    return "Loading ..."
  }

  if (listPosts[0] === "notFound") {
    return "NotFOund"
  }

  return (
    <>
      <Container>
        <Grid container spacing={2}>
          {listPosts.map((item: Post) => {
            return (
              <Grid alignItems='center' key={item.id} item md={4}>
                <Link href={`/post/${item.id}`}>
                  <BoxPost {...item} />
                </Link>
              </Grid>
            )
          })}
        </Grid>
      </Container>
    </>
  )
}
