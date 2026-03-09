import React from 'react';
import FadeIn from '../FadeIn';

export default function VideoSection() {
  return (
    <section className="max-w-[750px] mx-auto px-4 mb-20">
      <FadeIn>
        <div className="rounded-2xl overflow-hidden shadow-xl">
          <video
            controls
            className="w-full aspect-video bg-black"
            poster="https://imotions.com/wp-content/uploads/2025/11/iMotions-11-promo-video-cover.jpg"
          >
            <source src="https://imotions-website-videos.s3.eu-central-1.amazonaws.com/wp-content/uploads/2025/11/03122445/iMotions-11-promo-2025_sm.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </FadeIn>
    </section>
  );
}
