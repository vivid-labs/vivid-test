import styles from "./ScreeneqDesktopPage.module.css";
import { CategoryCard } from "./CategoryCard";
import { ImagePlaceholder } from "./ImagePlaceholder";
import { PaintBrush } from "./PaintBrush";
import { Monkey } from "./Monkey";
import { Swatches } from "./Swatches";
import { MusicNotes } from "./MusicNotes";
import { Camera } from "./Camera";
import { VideoCamera } from "./VideoCamera";
import { MagicWand } from "./MagicWand";
import { Basketball } from "./Basketball";
import { Planet } from "./Planet";

export const ScreeneqDesktopPage = ({ style }: { style?: any }) => {
  return (
    <div style={style} className={styles.screeneqDesktopPage}>
      <div className={styles.sectionHeadline}>
        <p className={styles.browseCategories}>Browse Categories</p>
      </div>
      <div className={styles.categoryCardsGrid}>
        <div className={styles.categoryCardsRow}>
          <CategoryCard
            property_1="Category Card"
            categoryImage={<ImagePlaceholder />}
            categoryIcon={<PaintBrush />}
            categoryName="Art"
          />
          <CategoryCard
            property_1="Category Card"
            categoryImage={<Monkey />}
            categoryIcon={<Swatches />}
            categoryName="Collectibles"
            style={{
              height: "fit-content",
            }}
          />
          <CategoryCard
            property_1="Category Card"
            categoryImage={<ImagePlaceholder />}
            categoryIcon={<MusicNotes />}
            categoryName="Music"
          />
          <CategoryCard
            property_1="Category Card"
            categoryImage={<ImagePlaceholder />}
            categoryIcon={<Camera />}
            categoryName="Photography"
            style={{
              height: "fit-content",
            }}
          />
        </div>
        <div className={styles.categoryCardsRowDiv}>
          <CategoryCard
            property_1="Category Card"
            categoryImage={<ImagePlaceholder />}
            categoryIcon={<VideoCamera />}
            categoryName="Video"
          />
          <CategoryCard
            property_1="Category Card"
            categoryImage={<ImagePlaceholder />}
            categoryIcon={<MagicWand />}
            categoryName="Utility"
          />
          <CategoryCard
            property_1="Category Card"
            categoryImage={<ImagePlaceholder />}
            categoryIcon={<Basketball />}
            categoryName="Sport"
          />
          <CategoryCard
            property_1="Category Card"
            categoryImage={<ImagePlaceholder />}
            categoryIcon={<Planet />}
            categoryName="Virtual Worlds"
            style={{
              height: "fit-content",
            }}
          />
        </div>
      </div>
    </div>
  );
};
