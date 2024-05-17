// our-domain.com/news

import Link from "next/link";
import { Fragment } from "react";

export default function NewsPage() {
  return (
    <Fragment>
      <h1>The News Page</h1>
      <ul>
        <li>
          <Link href="/news/headline">Next js framework</Link>
        </li>
        <li>Something else</li>
      </ul>
    </Fragment>
  );
}
