import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Fade } from "@/components/Fade";
import { findWork, site } from "@/content/site";
import styles from "./page.module.css";

type Props = PageProps<"/referenssit/[id]">;

/** Kohteet ovat sisältötiedostossa, joten kaikki sivut voidaan esirenderöidä. */
export function generateStaticParams() {
  return site.work.items.map((item) => ({ id: item.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const item = findWork(id);
  if (!item) return {};

  const title = `${item.title}, ${item.place} – ${site.company}`;
  const description = item.details;

  return {
    title,
    description,
    alternates: { canonical: `/referenssit/${item.id}` },
    openGraph: { title, description, url: `/referenssit/${item.id}` },
  };
}

export default async function WorkPage({ params }: Props) {
  const { id } = await params;
  const item = findWork(id);
  if (!item) notFound();

  return (
    <>
      <Nav />
      <main id="sisalto">
        <article className={`${styles.article} on-load`}>
          <div className="wrap">
            <Fade as="p" i={0} className={styles.crumb}>
              <Link href="/#referenssit">← {site.work.back}</Link>
            </Fade>

            <Fade as="h1" i={1} className={styles.title}>
              {item.title}, {item.place}
            </Fade>

            <Fade as="p" i={2} className={styles.lede}>
              {item.facts}
            </Fade>

            <Fade i={3} className={styles.photo}>
              <Image
                src={item.image}
                alt={`${item.title}, ${item.place}`}
                fill
                sizes="(max-width: 1120px) 100vw, 1120px"
                priority
              />
            </Fade>

            <Fade as="div" i={4} className={styles.details}>
              {item.details}
            </Fade>

            {item.gallery.length > 0 && (
              <ul className={styles.gallery}>
                {item.gallery.map((photo, i) => (
                  <Fade key={photo.src} as="li" i={5 + i} className={styles.galleryItem}>
                    <Image
                      src={photo.src}
                      alt={photo.alt}
                      fill
                      // Parittomalla määrällä ensimmäinen kuva on täysleveä (ks. CSS).
                      sizes={
                        i === 0 && item.gallery.length % 2 === 1
                          ? "(max-width: 820px) 100vw, 820px"
                          : "(max-width: 640px) 100vw, 410px"
                      }
                    />
                  </Fade>
                ))}
              </ul>
            )}

            <Fade i={5} className={styles.cta}>
              <Link className="btn" href="/#yhteys">
                Kysy tulevista kohteista
              </Link>
            </Fade>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
