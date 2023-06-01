import styles from "./BrowseCategories.module.css";
import { CategoryCard } from "./CategoryCard";
import { ImagePlaceholder } from "./ImagePlaceholder";
import { PaintBrush } from "./PaintBrush";
import { Swatches } from "./Swatches";
import { MusicNotes } from "./MusicNotes";
import { Camera } from "./Camera";
import { VideoCamera } from "./VideoCamera";
import { MagicWand } from "./MagicWand";
import { Basketball } from "./Basketball";
import { Planet } from "./Planet";

export const BrowseCategories = ({
  style,
  screen,
}: {
  style?: any;
  screen: string;
}) => {
  switch (screen) {
    case "Desktop":
      return (
        <div style={style} className={styles.browseCategories}>
          <div className={styles.sectionHeadline}>
            <p className={styles.browseCategoriesText}>Browse Categories</p>
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
                categoryImage={<ImagePlaceholder />}
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
    case "Tablet":
      return (
        <div style={style} className={styles.browseCategoriesComponent}>
          <div className={styles.sectionHeadlineDiv}>
            <p className={styles.browseCategoriesText1}>Browse Categories</p>
          </div>
          <div className={styles.categoryCardsGridDiv}>
            <div className={styles.categoryCardsRowDiv1}>
              <CategoryCard
                property_1="Category Card Small"
                categoryImage={<ImagePlaceholder />}
                categoryIcon={<PaintBrush />}
                categoryName="Art"
                style={{
                  height: "fit-content",
                }}
              />
              <CategoryCard
                property_1="Category Card Small"
                categoryImage={<ImagePlaceholder />}
                categoryIcon={<Swatches />}
                categoryName="Collectibles"
                style={{
                  height: "fit-content",
                }}
              />
              <CategoryCard
                property_1="Category Card Small"
                categoryImage={<ImagePlaceholder />}
                categoryIcon={<MusicNotes />}
                categoryName="Music"
                style={{
                  height: "fit-content",
                }}
              />
              <CategoryCard
                property_1="Category Card Small"
                categoryImage={<ImagePlaceholder />}
                categoryIcon={<Camera />}
                categoryName="Photography"
                style={{
                  height: "fit-content",
                }}
              />
            </div>
            <div className={styles.categoryCardsRowDiv2}>
              <CategoryCard
                property_1="Category Card Small"
                categoryImage={<ImagePlaceholder />}
                categoryIcon={<VideoCamera />}
                categoryName="Video"
                style={{
                  height: "100%",
                  flex: "1 1 0%",
                }}
              />
              <CategoryCard
                property_1="Category Card Small"
                categoryImage={<ImagePlaceholder />}
                categoryIcon={<MagicWand />}
                categoryName="Utility"
                style={{
                  height: "100%",
                  flex: "1 1 0%",
                }}
              />
              <CategoryCard
                property_1="Category Card Small"
                categoryImage={<ImagePlaceholder />}
                categoryIcon={<Basketball />}
                categoryName="Sport"
                style={{
                  height: "100%",
                  flex: "1 1 0%",
                }}
              />
              <CategoryCard
                property_1="Category Card Small"
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
    case "Mobile":
      return (
        <div style={style} className={styles.browseCategoriesComponent1}>
          <div className={styles.sectionHeadlineDiv1}>
            <p className={styles.browseCategoriesText2}>Browse Categories</p>
          </div>
          <div className={styles.categoryCardsGridDiv1}>
            <div className={styles.categoryCardsRowDiv3}>
              <CategoryCard
                property_1="Category Card Small"
                categoryImage={<ImagePlaceholder />}
                categoryIcon={<PaintBrush />}
                categoryName="Art"
                style={{
                  height: "100%",
                  flex: "1 1 0%",
                }}
              />
              <CategoryCard
                property_1="Category Card Small"
                categoryImage={<ImagePlaceholder />}
                categoryIcon={<Swatches />}
                categoryName="Collectibles"
                style={{
                  height: "100%",
                  flex: "1 1 0%",
                }}
              />
            </div>
            <div className={styles.categoryCardsRowDiv4}>
              <CategoryCard
                property_1="Category Card Small"
                categoryImage={<ImagePlaceholder />}
                categoryIcon={<MusicNotes />}
                categoryName="Music"
                style={{
                  height: "100%",
                  flex: "1 1 0%",
                }}
              />
              <CategoryCard
                property_1="Category Card Small"
                categoryImage={<ImagePlaceholder />}
                categoryIcon={<Camera />}
                categoryName="Photography"
                style={{
                  height: "100%",
                  flex: "1 1 0%",
                }}
              />
            </div>
            <div className={styles.categoryCardsRowDiv5}>
              <CategoryCard
                property_1="Category Card Small"
                categoryImage={<ImagePlaceholder />}
                categoryIcon={<VideoCamera />}
                categoryName="Video"
                style={{
                  height: "100%",
                  flex: "1 1 0%",
                }}
              />
              <CategoryCard
                property_1="Category Card Small"
                categoryImage={<ImagePlaceholder />}
                categoryIcon={<MagicWand />}
                categoryName="Utility"
                style={{
                  height: "100%",
                  flex: "1 1 0%",
                }}
              />
            </div>
            <div className={styles.categoryCardsRowDiv6}>
              <CategoryCard
                property_1="Category Card Small"
                categoryImage={<ImagePlaceholder />}
                categoryIcon={<Basketball />}
                categoryName="Sport"
                style={{
                  height: "100%",
                  flex: "1 1 0%",
                }}
              />
              <CategoryCard
                property_1="Category Card Small"
                categoryImage={<ImagePlaceholder />}
                categoryIcon={<Planet />}
                categoryName="Virtual Worlds"
                style={{
                  height: "100%",
                  flex: "1 1 0%",
                }}
              />
            </div>
          </div>
        </div>
      );
  }
};
