import CommunityIcon from "../CommunityIcon/CommunityIcon"
import styles from './CommunityCard.module.css'

type CommunityCardProps = {
  community: string
  icon_image_src: string
  // descriptionは1行に15文字以上入れるとレイアウトが崩れる
  description: string
}


const CommunityCard = ({ community, icon_image_src, description }: CommunityCardProps) => {
  return (
    <div className={styles['community-card']}>
      <CommunityIcon icon_image_src={icon_image_src} />
      <div>
        <div className={styles['name']}>
          {community}
        </div>
        <div className={styles['description']}>
          {description}
        </div>
      </div>
      </div>
  )
};

export default CommunityCard;
