import styles from "./BrowseCategories.module.css";
import { CategoryCard } from "./CategoryCard";
import { ImagePlaceholderComponent3 } from "./ImagePlaceholderComponent3";
import { PaintBrush } from "./PaintBrush";
import { Monkey } from "./Monkey";
import { Swatches } from "./Swatches";
import { ImagePlaceholderComponent4 } from "./ImagePlaceholderComponent4";
import { MusicNotes } from "./MusicNotes";
import { ImagePlaceholderComponent5 } from "./ImagePlaceholderComponent5";
import { Camera } from "./Camera";
import { ImagePlaceholderComponent6 } from "./ImagePlaceholderComponent6";
import { VideoCamera } from "./VideoCamera";
import { ImagePlaceholderComponent7 } from "./ImagePlaceholderComponent7";
import { MagicWand } from "./MagicWand";
import { ImagePlaceholderComponent8 } from "./ImagePlaceholderComponent8";
import { Basketball } from "./Basketball";
import { ImagePlaceholderComponent9 } from "./ImagePlaceholderComponent9";
import { Planet } from "./Planet";
import { ImagePlaceholderComponent10 } from "./ImagePlaceholderComponent10";
import { ImagePlaceholderComponent11 } from "./ImagePlaceholderComponent11";
import { ImagePlaceholderComponent12 } from "./ImagePlaceholderComponent12";
import { ImagePlaceholderComponent13 } from "./ImagePlaceholderComponent13";
import { ImagePlaceholderComponent14 } from "./ImagePlaceholderComponent14";
import { ImagePlaceholderComponent15 } from "./ImagePlaceholderComponent15";
import { ImagePlaceholderComponent16 } from "./ImagePlaceholderComponent16";
import { ImagePlaceholderComponent17 } from "./ImagePlaceholderComponent17";
import { ImagePlaceholderComponent18 } from "./ImagePlaceholderComponent18";
import { ImagePlaceholderComponent19 } from "./ImagePlaceholderComponent19";
import { ImagePlaceholderComponent20 } from "./ImagePlaceholderComponent20";
import { ImagePlaceholderComponent21 } from "./ImagePlaceholderComponent21";
import { ImagePlaceholderComponent22 } from "./ImagePlaceholderComponent22";
import { ImagePlaceholderComponent23 } from "./ImagePlaceholderComponent23";

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
                categoryImage={<ImagePlaceholderComponent3 />}
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
                  flex: "1 1 0%",
                }}
              />
              <CategoryCard
                property_1="Category Card"
                categoryImage={<ImagePlaceholderComponent4 />}
                categoryIcon={<MusicNotes />}
                categoryName="Music"
              />
              <CategoryCard
                property_1="Category Card"
                categoryImage={<ImagePlaceholderComponent5 />}
                categoryIcon={<Camera />}
                categoryName="Photography"
                style={{
                  height: "fit-content",
                  flex: "1 1 0%",
                }}
              />
            </div>
            <div className={styles.categoryCardsRowDiv}>
              <CategoryCard
                property_1="Category Card"
                categoryImage={<ImagePlaceholderComponent6 />}
                categoryIcon={<VideoCamera />}
                categoryName="Video"
              />
              <CategoryCard
                property_1="Category Card"
                categoryImage={<ImagePlaceholderComponent7 />}
                categoryIcon={<MagicWand />}
                categoryName="Utility"
              />
              <CategoryCard
                property_1="Category Card"
                categoryImage={<ImagePlaceholderComponent8 />}
                categoryIcon={<Basketball />}
                categoryName="Sport"
              />
              <CategoryCard
                property_1="Category Card"
                categoryImage={<ImagePlaceholderComponent9 />}
                categoryIcon={<Planet />}
                categoryName="Virtual Worlds"
                style={{
                  height: "fit-content",
                  flex: "1 1 0%",
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
                categoryImage={<ImagePlaceholderComponent10 />}
                categoryIcon={<PaintBrush />}
                categoryName="Art"
                style={{
                  height: "fit-content",
                  flex: "1 1 0%",
                }}
              />
              <CategoryCard
                property_1="Category Card Small"
                categoryImage={<Monkey />}
                categoryIcon={<Swatches />}
                categoryName="Collectibles"
                style={{
                  height: "fit-content",
                  flex: "1 1 0%",
                }}
              />
              <CategoryCard
                property_1="Category Card Small"
                categoryImage={<ImagePlaceholderComponent11 />}
                categoryIcon={<MusicNotes />}
                categoryName="Music"
                style={{
                  height: "fit-content",
                  flex: "1 1 0%",
                }}
              />
              <CategoryCard
                property_1="Category Card Small"
                categoryImage={<ImagePlaceholderComponent12 />}
                categoryIcon={<Camera />}
                categoryName="Photography"
                style={{
                  height: "fit-content",
                  flex: "1 1 0%",
                }}
              />
            </div>
            <div className={styles.categoryCardsRowDiv2}>
              <CategoryCard
                property_1="Category Card Small"
                categoryImage={<ImagePlaceholderComponent13 />}
                categoryIcon={<VideoCamera />}
                categoryName="Video"
                style={{
                  height: "100%",
                  flex: "1 1 0%",
                }}
              />
              <CategoryCard
                property_1="Category Card Small"
                categoryImage={<ImagePlaceholderComponent14 />}
                categoryIcon={<MagicWand />}
                categoryName="Utility"
                style={{
                  height: "100%",
                  flex: "1 1 0%",
                }}
              />
              <CategoryCard
                property_1="Category Card Small"
                categoryImage={<ImagePlaceholderComponent15 />}
                categoryIcon={<Basketball />}
                categoryName="Sport"
                style={{
                  height: "100%",
                  flex: "1 1 0%",
                }}
              />
              <CategoryCard
                property_1="Category Card Small"
                categoryImage={<ImagePlaceholderComponent16 />}
                categoryIcon={<Planet />}
                categoryName="Virtual Worlds"
                style={{
                  height: "fit-content",
                  flex: "1 1 0%",
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
                categoryImage={<ImagePlaceholderComponent17 />}
                categoryIcon={<PaintBrush />}
                categoryName="Art"
                style={{
                  height: "100%",
                  flex: "1 1 0%",
                }}
              />
              <CategoryCard
                property_1="Category Card Small"
                categoryImage={<Monkey />}
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
                categoryImage={<ImagePlaceholderComponent18 />}
                categoryIcon={<MusicNotes />}
                categoryName="Music"
                style={{
                  height: "100%",
                  flex: "1 1 0%",
                }}
              />
              <CategoryCard
                property_1="Category Card Small"
                categoryImage={<ImagePlaceholderComponent19 />}
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
                categoryImage={<ImagePlaceholderComponent20 />}
                categoryIcon={<VideoCamera />}
                categoryName="Video"
                style={{
                  height: "100%",
                  flex: "1 1 0%",
                }}
              />
              <CategoryCard
                property_1="Category Card Small"
                categoryImage={<ImagePlaceholderComponent21 />}
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
                categoryImage={<ImagePlaceholderComponent22 />}
                categoryIcon={<Basketball />}
                categoryName="Sport"
                style={{
                  height: "100%",
                  flex: "1 1 0%",
                }}
              />
              <CategoryCard
                property_1="Category Card Small"
                categoryImage={<ImagePlaceholderComponent23 />}
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
    default:
      return null;
  }
};
