import React from "react";

type Props = {
  link: string;
};

const VideoFrame = ({ link }: Props) => {
  return (
    <iframe
      className="w-full min-h-[180px] md:h-[450px] lg:h-[600px] xl:h-[780px]"
      src={link}
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
    ></iframe>
  );
};

export default VideoFrame;
