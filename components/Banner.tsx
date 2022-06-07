import styles from "../styles/Banner.module.css";
import Link from "next/link";
import Image from "next/image";

export default function Banner() {
  return (
    <div className={styles.container}>
      <div className={styles.projectBox}>
        <h2>The Project:</h2>
        <p>
          You can find all details and codebase of this project in our GitHub
          repository. Please take a look and give us a star. ⭐ 😉
        </p>
        <div className={styles.buttonLine}>
          <Link href="https://github.com/fl4viooliveira/blogproject">
            <button>
              <span className={styles.gitCat}>
                <Image
                  src="/icons/git.svg"
                  alt="git cat"
                  width={30}
                  height={30}
                />
              </span>
              Repository
            </button>
          </Link>
        </div>
      </div>
      <div className={styles.helpBox}>
        <h2>How help this Open Source project?</h2>
        <ul className={styles.helpItems}>
          <li>
            <span className={styles.img}>
              <Image
                src="/icons/git-mask.svg"
                alt="git mask"
                width={30}
                height={30}
              />
            </span>
            <span>Code contribution.</span>
          </li>
          <li>
            <span className={styles.img}>
              <Image
                src="/icons/heart.svg"
                alt="heart"
                width={30}
                height={30}
              />
            </span>
            <span>Sponsoring the project.</span>
          </li>
          <li>
            <span className={styles.img}>
              <Image
                src="/icons/design-pencil.svg"
                alt="design-pencil"
                width={30}
                height={30}
              />
            </span>
            <span>Writing a post.</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
