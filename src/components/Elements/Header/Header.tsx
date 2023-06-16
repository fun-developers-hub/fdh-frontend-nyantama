import style from './Header.module.css'

const Header = () => {
  return (
    <div className={style['header-outer']}>
      <div className={style['header-inner']}>
        <div className={style['site-title']}>
          FUN Developers Hub
        </div>
        <div className={style['site-subtitle']}>
          公立はこだて未来大学<br />
          技術コミュニティ総合プラットフォーム
        </div>
      </div>
      <div className={style['header-inner']}>
        <div className={style['page-links']}>
          <div className={style['page-link']}>Events</div>
          <div className={style['page-link']}>Communities</div>
        </div>
      </div>
    </div>
  )
}

export default Header
