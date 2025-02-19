import StartupCard from "@/components/StartupCard";
import SearchForm from "../../components/SearchForm";
import {STARTUPS_QUERY} from "@/sanity/lib/queries";
import {StartupTypeCard} from "@/components/StartupCard";
import {sanityFetch, SanityLive} from "@/sanity/lib/live";
import {auth} from "@/auth";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{query?: string}>;
}) {
  const query = (await searchParams).query;
  const params = {search: query || null};

  const session = await auth();

  console.log("-----------", session?.id);

  const {data: posts} = await sanityFetch({query: STARTUPS_QUERY, params});

  return (
    <>
      <section className="pink_container">
        <h1 className="heading">
          Your School Don't Teach This, <br />
          But Don't Worry We Are Here.
        </h1>
        <p className="sub-heading !max-w-3xl">Learn Early, To Build Wealth</p>
        <SearchForm query={query} />
      </section>
      <section className="section_container">
        <p className="text-30-semibold">
          {query
            ? `Search results for "${query}"`
            : "Reading Is First Step To Build Mental Wealth, So Let's Begin."}
        </p>

        <ul className="mt-7 card_grid">
          {posts?.length > 0 ? (
            posts.map((post: StartupTypeCard, index: number) => (
              <StartupCard key={post?._id} post={post} />
            ))
          ) : (
            <p className="no-results">No startups found</p>
          )}
        </ul>
      </section>

      <SanityLive />
    </>
  );
}
