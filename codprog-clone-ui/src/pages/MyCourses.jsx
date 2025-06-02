import { requireAuth } from "../utils/requireAuth";
import isTokenExpired from "../utils/isTokenExpired";
import refreshToken from "../utils/refreshToken";
import { getUser } from "../utils/getUser";
import { BASE_URL, SUPABASE_API_KEY } from "../constants";
import axios from "axios";
import { data, Link, useLoaderData } from "react-router-dom";
import Container from "../components/UI/Container";
import styles from "./MyCourses.module.css";
import courseImage from "../assets/thumbnail.svg";

export async function myCourseLoader({ request }) {
  const pathname = new URL(request.url).pathname;
  await requireAuth({ redirectTo: pathname });
  let { access_token, user_id, expires_at } = await getUser();

  if (isTokenExpired(expires_at)) {
    access_token = await refreshToken();
  }
  const subscriptionsEndpoint = `${BASE_URL}rest/v1/subscriptions?user_id=eq.${user_id}&select=*`;
  const { data: subscriptions } = await axios.get(subscriptionsEndpoint, {
    headers: {
      Authorization: `Bearer ${access_token}`,
      apikey: SUPABASE_API_KEY,
    },
  });
  const coursesNumbers = subscriptions
    .map((course) => `"${course.course_id}"`)
    .join(",");
  const myCoursesEndpoint = `${BASE_URL}rest/v1/courses?id=in.%28${coursesNumbers}%29`;
  const { data: myCourses } = await axios.get(myCoursesEndpoint, {
    headers: {
      Authorization: `Bearer ${access_token}`,
      apikey: SUPABASE_API_KEY,
    },
  });
  return myCourses;
}
function MyCourses() {
  const myCourses = useLoaderData();
  return (
    <Container>
      <div className={styles.mycourses_container}>
        <h2 className={styles.title}>
          {myCourses.length === 0
            ? "You do not have any courses enrolled."
            : "Enrolled Courses"}
        </h2>
        <div className={styles.mycourse}>
          {myCourses.map((course) => (
            <div key={course.id} className={styles.mycourse_content}>
              <img
                src={courseImage}
                className={styles.img}
                alt="Course generic thumbnail"
              />
              <h2 className={styles.course_name}>{course.name}</h2>
              <Link
                key={course.id}
                to={course.id.toString()}
                className={styles.watch_now_btn}
              >
                Watch Now
              </Link>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
}

export default MyCourses;
