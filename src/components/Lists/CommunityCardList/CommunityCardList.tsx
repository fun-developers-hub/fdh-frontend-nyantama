import CommunityCard from "@/components/Elements/CommunityCard/CommunityCard"
import styles from './CommunityCardList.module.css'

type CommunityCardListProps = {
  communities: {
    community: string
    icon_image_src: string
    // descriptionは1行に15文字以上入れるとレイアウトが崩れる
    description: string
  } []
}

const CommunityCardList = ({ communities }: CommunityCardListProps) => {
  return (
    <div className={styles['community-card-list']}>
      {communities.map((c) =>
        <CommunityCard community={c.community} icon_image_src={c.icon_image_src} description={c.description} />
      )}
    </div>
  )
}

export default CommunityCardList
