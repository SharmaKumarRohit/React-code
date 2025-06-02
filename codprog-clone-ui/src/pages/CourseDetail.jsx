import axios from "axios";
import { BASE_URL, SUPABASE_API_KEY } from "../constants";
import { Link, useLoaderData, useSearchParams } from "react-router-dom";
import styles from "./CourseDetail.module.css";
import Container from "../components/UI/Container";
import coding from "../assets/coding.svg";
import TextAnimation from "../components/UI/TextAnimation";

export async function courseDetailLoader({ params }) {
  const { id: courseID } = params;
  const URL = `${BASE_URL}rest/v1/modules?course_id=eq.${courseID}&select=*`;
  const { data: modules } = await axios.get(URL, {
    headers: { apikey: SUPABASE_API_KEY },
  });
  return { modules, courseID };
}

function CourseDetail() {
  const { modules, courseID } = useLoaderData();
  const [searchParams] = useSearchParams();
  const courseName = searchParams.get("name");
  const amount = searchParams.get("amount");
  // console.log(modules);
  return (
    <Container>
      <header className={styles.header}>
        <div className={styles.header_content}>
          <TextAnimation>{courseName}</TextAnimation>
          <p className={styles.course_desc}>
            Unlock Your Full Potential with {courseName}: Become a Pro in
            Building Powerful and Scalable Web Applications!
          </p>
          <div className={styles.btn_container}>
            <Link
              to={`/payment/${courseID}?name=${courseName}&amount=${amount}`}
              className={styles.course_btn}
            >
              Buy Now
            </Link>
            <a href="#curriculum" className={styles.course_btn}>
              View More
            </a>
          </div>
        </div>
        <img
          src={coding}
          alt="Illustration of person doing coding"
          className={styles.course_img}
        />
      </header>
      <section id="curriculum" className={styles.curriculum_container}>
        <h2 className={styles.curriculum}>Curriculum</h2>
        {modules
          .sort((a, b) => a.number - b.number)
          .map((module) => {
            const { id, number, name, description } = module;
            return (
              <div key={id} className={styles.curriculum_content}>
                <h3 className={styles.chapter}>Chapter {number}</h3>
                <h2 className={styles.chapter_name}>{name}</h2>
                <p>{description}</p>
              </div>
            );
          })}
        <div>
          <Link
            to={`/payment/${courseID}?name=${courseName}&amount=${amount}`}
            className={styles.course_btn}
          >
            Buy Now
          </Link>
        </div>
      </section>
    </Container>
  );
}

export default CourseDetail;
