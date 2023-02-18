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
  const { data, isLoading } = useQuery(['allPosts'], () => fetchPost());
  const searchValuee = useSearchStore((state) => state.value)

  if (searchValuee[0] === "notFound") {
    return "NotFOund"
  }
  else if (searchValuee.length > 0) {
    return (
      <>
        <Container>
          <Grid container spacing={2}>
            {isLoading ? 'Loading ...' : searchValuee.map((item: any) => {
              return (
                <Grid alignItems='center' key={item.id} item md={4}>
                  <Link shallow={true} href={`/post/${item.id}`}>
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
  return (
    <>
      <Container>
        <Grid container spacing={2}>
          {isLoading ? 'Loading ...' : data.map((item: Post) => {
            return (
              <Grid alignItems='center' key={item.id} item md={4}>
                <Link shallow={true} href={`/post/${item.id}`}>
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
