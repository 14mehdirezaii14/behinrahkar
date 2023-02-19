import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { useQuery, QueryClient, dehydrate } from "react-query"
import { GetStaticProps, } from "next"
import Link from 'next/link';
import fetchPost from '@/components/fetchPosts';
import { Post } from '@/types/post';
import useSearchStore from '@/store/useSearchValue';
import { lazy, Suspense } from 'react';
import { CircularProgress, Typography } from '@mui/material';
import Loading from '@/components/Loading';
const BoxPost = lazy(() => import('../components/BoxPost'))

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
  return (
    <>
      <Container className='mt-10'>
        <Suspense fallback={<Loading />}>
          <Grid container spacing={2} >
            {isLoading ? <Loading /> : listPosts[0] === "notFound" ? "notFound" : listPosts.map((item: Post) => {
              return (
                <Grid alignItems='center' key={item.id} item md={4}>
                  <Link href={`/post/${item.id}`}>
                    <BoxPost {...item} />
                  </Link>
                </Grid>
              )
            })}

          </Grid>
        </Suspense>
      </Container>
    </>
  )
}
