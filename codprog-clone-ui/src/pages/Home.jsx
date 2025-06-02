import axios from "axios";
import { GET_ALL_COURSES, SUPABASE_API_KEY } from "../constants";
import { Link, useLoaderData } from "react-router-dom";
import styles from "./Home.module.css";
import hero from "../assets/hero.png";
import courseImage from "../assets/thumbnail.svg";
import Container from "../components/UI/Container";

export async function homeLoader() {
  const { data } = await axios.get(GET_ALL_COURSES, {
    headers: {
      apikey: SUPABASE_API_KEY,
    },
  });
  return data;
}

function Home() {
  const courses = useLoaderData();
  return (
    <Container>
      <section className={styles.hero}>
        <div className={styles.hero_content}>
          <h1 className={styles.hero_heading}>
            We teach everything{" "}
            <span className={styles.line}>from scratch.</span>
          </h1>
          <p className={styles.hero_sub_heading}>
            And make sure you understand everything
          </p>
          <a
            href="#learning"
            className={`${styles.home_btn} ${styles["mt-1"]}`}
          >
            Start Learning
          </a>
        </div>
        <img
          src={hero}
          className={styles.hero_image}
          alt="A person looking at the computer screen"
        />
      </section>
      <section id="learning" className={styles.course_section}>
        <h1 className={styles.course_heading}>Our Most Popular Courses</h1>
        <div className={styles.course_cards}>
          {courses.map((course) => {
            const { name, description, amount, id } = course;
            return (
              <div key={id} className={styles.course_card}>
                <img
                  src={courseImage}
                  className={styles.course_img}
                  alt="Course generic thumbnail"
                />
                <p className={styles.name}>{name}</p>
                <p className={styles.price}>₹ {amount}</p>
                <p className={styles.description}>{description}</p>
                <Link
                  to={`/course-detail/${id}?name=${name}&amount=${amount}`}
                  className={styles.home_btn}
                >
                  View Course
                </Link>
              </div>
            );
          })}
        </div>
      </section>
    </Container>
  );
}

export default Home;
