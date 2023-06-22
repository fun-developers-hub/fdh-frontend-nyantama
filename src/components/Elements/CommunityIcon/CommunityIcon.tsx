import Image from "next/image";
import styles from "./CommunityIcon.module.css";

type communityIconProps = {
  size?: "small" | "medium" | "large" | number;
  icon_image_src: string;
  alt?: string;
};

const sizeTemplate = { small: 60, medium: 80, large: 100 };

const CommunityIcon = ({
  size = "medium",
  icon_image_src,
  alt = "",
}: communityIconProps) => {
  const sizeCustom: number = (() => {
    if (size === "small") {
      return sizeTemplate.small;
    } else if (size === "medium") {
      return sizeTemplate.medium;
    } else if (size === "large") {
      return sizeTemplate.large;
    } else {
      return size;
    }
  })();

  return (
    <Image
      className={styles["communityicon-image"]}
      src={icon_image_src}
      alt={alt}
      height={sizeCustom}
      width={sizeCustom}
    />
  );
};

export default CommunityIcon;
