import Image from "next/image";
import CommunityIcon from "../CommunityIcon/CommunityIcon";
import styles from "./EventCard.module.css";

type eventCardProps = {
    size: "small" | "medium";
    icon_image_src: string;
    date_start: Date;
    date_end?: Date;
    event: string;
    community: string;
    alt?: string;
};

const sizeTemplate = { small: { width: 300, height: 300 } , medium: { width: 450, height: 400 } };

const EventCard = ({
    size = "medium",
    icon_image_src,
    date_start,
    date_end = date_start,
    event,
    community,
    alt = "",
  }: eventCardProps) => {

    const sizeCustom: { width: number, height: number } = (() => {
        switch (size) {
            case "small":
                return sizeTemplate.small;
            case "medium":
                return sizeTemplate.medium;
            default:
                // set 'medium' as default
                return sizeTemplate.medium;
        }
    })();

    const date: string = (() => {
        if (date_start === date_end) {
            return date_start.toLocaleDateString('ja-JP');
        } else {
            return `${date_start.toLocaleDateString('ja-JP')} - ${date_end.toLocaleDateString('ja-JP')}`;
        }
    })();

    return (
        <div className={styles["event-card"]} style={{width: sizeCustom.width, height: sizeCustom.height}}>
            <div className={styles["event-card-image"]}>
                <Image
                    src={icon_image_src}
                    alt={alt}
                    width={sizeCustom.width}
                    height={sizeCustom.height}
                />
            </div>

            <div className={styles["event-card-information"]}>
                <CommunityIcon 
                    size={size}
                    icon_image_src="/fun.jpg"
                    alt="FUN"
                />
                <div className={styles["event-name"]}>
                    {event}
                </div>
                <div className={styles["event-date"]}>
                    {date}
                </div>
                <div className={styles["event-community"]}>
                    by {community}
                </div>
            </div>
        </div>
    );
};

export default EventCard;