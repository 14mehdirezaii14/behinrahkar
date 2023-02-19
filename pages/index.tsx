import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { useQuery, QueryClient, dehydrate } from "react-query"
import { GetStaticProps, } from "next"
import Link from 'next/link';
import fetchPost from '@/components/fetchPosts';
import { Post } from '@/types/post';
import useSearchStore from '@/store/useSearchValue';
import { lazy, Suspense } from 'react';
import { CircularProgress } from '@mui/material';
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
      <Container>
        <Grid container spacing={2} alignItems="center">
          <Suspense fallback={<CircularProgress />}>
            {isLoading ? <CircularProgress /> : listPosts[0] ? "notFOund" : listPosts.map((item: Post) => {
              return (
                <Grid alignItems='center' key={item.id} item md={4}>
                  <Link href={`/post/${item.id}`}>
                    <BoxPost {...item} />
                  </Link>
                </Grid>
              )
            })}
          </Suspense>
        </Grid>
      </Container>
    </>
  )
}
