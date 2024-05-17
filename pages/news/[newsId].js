// our-domain.com/news/anything

import { useRouter } from "next/router";

export default function DetailPage() {
  const router = useRouter();
  const newsId = router.query.newsId;

  // send a request to the backend API
  // to fetch the news item with newsId
  // If we have a backend API then (which we don't here)

  return <h1>The Detail Page</h1>;
}
