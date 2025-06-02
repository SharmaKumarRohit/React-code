import { BASE_URL, SUPABASE_API_KEY } from "../constants";
import axios from "axios";
import { getUser } from "../utils/getUser";
import { useLoaderData } from "react-router-dom";
import styles from "./MyCourseVideos.module.css";
import ReactPlayer from "react-player/vimeo";
import { useState } from "react";
import NoFoundContent from "../components/NoFoundContent";

export async function myCourseVideosLoader({ params }) {
  const { courseID } = params;
  const { access_token } = await getUser();

  const { data: modulesRaw } = await axios.get(
    `${BASE_URL}rest/v1/modules?course_id=eq.${courseID}&select=*`,
    { headers: { apikey: SUPABASE_API_KEY } }
  );

  const modules = modulesRaw.sort((a, b) => a.number - b.number);

  const videos = await Promise.all(
    modules.map((module) =>
      axios.get(
        `${BASE_URL}rest/v1/videos?module_id=eq.${module.id}&select=*`,
        {
          headers: {
            apikey: SUPABASE_API_KEY,
            Authorization: `Bearer ${access_token}`,
          },
        }
      )
    )
  );

  const moduleVideos = videos.map((res) =>
    res.data.sort((a, b) => a.number - b.number)
  );

  return modules.map((mod, i) => ({
    module_name: mod.name,
    videos: moduleVideos[i],
    video_id: mod.id,
  }));
}

function MyCourseVideos() {
  const videosData = useLoaderData();

  const firstVideo = videosData
    .flatMap((m) => m.videos)
    .find((v) => v.vimeo_url)?.vimeo_url;

  const [videoUrl, setVideoUrl] = useState(firstVideo);
  const [activeVideo, setActiveVideo] = useState(firstVideo);

  if (!videoUrl) return <NoFoundContent>No videos found</NoFoundContent>;

  return (
    <div className={styles.myCourseSection}>
      <div className={styles.playlist}>
        {videosData.map((module) => (
          <div key={module.video_id} className={styles.module}>
            <h3>{module.module_name}</h3>
            <ul>
              {module.videos.map((video, index) => (
                <li
                  key={video.vimeo_url}
                  className={
                    video.vimeo_url === activeVideo ? styles.activeVideo : ""
                  }
                  onClick={() => {
                    setVideoUrl(video.vimeo_url);
                    setActiveVideo(video.vimeo_url);
                  }}
                >
                  {index + 1}. {video.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className={styles.videoContainer}>
        <ReactPlayer
          url={videoUrl}
          controls
          className={styles.video}
          width="100%"
          height="100%"
        />
      </div>
    </div>
  );
}

export default MyCourseVideos;
