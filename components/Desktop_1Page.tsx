import styles from "./Desktop_1Page.module.css";
import vivid_c29056e1fa6303a7ab7a81c293cba932538a9aea from "./c29056e1fa6303a7ab7a81c293cba932538a9aea.jpg";
import vivid_c82a3cf50915 from "./c82a3cf50915.svg";
import vivid_9fe519a440a7 from "./9fe519a440a7.svg";
import { Feature } from "./Feature";
import { City } from "./City";

export const Desktop_1Page = () => {
  return (
    <div className={styles.desktop_1Page0}>
      <div className={styles.desktop_1Page1}>
        <img
          src={vivid_c29056e1fa6303a7ab7a81c293cba932538a9aea.src}
          className={styles.desktop_1Page2}
        />
        <p className={styles.desktop_1Page3}>
          Switzerland Has Never Been So Affordable
        </p>
        <p className={styles.desktop_1Page4}>
          Discover Switzerland. Choose the best programs, guides, hotels and
          restaurants.
        </p>
        <div className={styles.desktop_1Page5}>
          <p className={styles.desktop_1Page6}>Start to explore</p>
        </div>
        <div className={styles.desktop_1Page7}>
          <div className={styles.desktop_1Page8}>
            <img
              src={vivid_c82a3cf50915.src}
              className={styles.desktop_1Page9}
            />
            <p className={styles.desktop_1Page10}>MilanTour</p>
          </div>
          <div className={styles.desktop_1Page11}>
            <div className={styles.desktop_1Page12}>
              <p className={styles.desktop_1Page13}>Day tours</p>
              <p className={styles.desktop_1Page14}>Multi-day tours</p>
              <p className={styles.desktop_1Page15}>Attractions</p>
              <p className={styles.desktop_1Page16}>Themes</p>
            </div>
            <img
              src={vivid_9fe519a440a7.src}
              className={styles.desktop_1Page17}
            />
          </div>
        </div>
      </div>
      <div className={styles.desktop_1Page18}>
        <Feature
          title="Audio Guid"
          description="Travel on your own. Use the services of an audio guide."
          moreTitle="Select guide"
          icon="7:13"
        />
        <Feature
          title="Programs"
          description="Choose a travel program that is right for you."
          moreTitle="Select program"
          icon="7:64"
        />
        <Feature
          title="Hotels & Restaurant"
          description="Book hotels and restaurants at the best prices"
          moreTitle="Learn more"
          icon="7:70"
        />
      </div>
      <div className={styles.desktop_1Page19}>
        <p className={styles.desktop_1Page20}>Top Programs</p>
        <p className={styles.desktop_1Page21}>
          Our programs are compiled by the best guides. Each tourist will be
          able to choose a program according to their level.
        </p>
        <div>
          <City
            backgroundImage="9:39"
            title="Mountains, Canada"
            price="$80"
            time="3 hours"
            guideName="Tim Hencordin"
            guidePosition="City Guide"
          />
          <City
            backgroundImage="9:41"
            title="Camping"
            price="$80"
            time="3 hours"
            guideName="Tim Hencordin"
            guidePosition="City Guide"
          />
          <City
            backgroundImage="9:40"
            title="Jungle, Sweden"
            price="$80"
            time="3 hours"
            guideName="Tim Hencordin"
            guidePosition="City Guide"
          />
          <City
            backgroundImage="9:43"
            title="Berlin"
            price="$90"
            time="10 hours"
            guideName="Keny iman"
            guidePosition="City Guide"
          />
        </div>
      </div>
      <div className={styles.desktop_1Page22}>
        <div className={styles.desktop_1Page23}>
          <div className={styles.desktop_1Page24}>
            <p className={styles.desktop_1Page25}>MilanTour</p>
            <p className={styles.desktop_1Page26}>
              Our vision is to provide convenience
              <br />
              and help you to find your best place for traveling
            </p>
          </div>
          <div className={styles.desktop_1Page27}>
            <div className={styles.desktop_1Page28}>
              <p className={styles.desktop_1Page29}>About</p>
              <p className={styles.desktop_1Page30}>Traveles</p>
              <p className={styles.desktop_1Page31}>Partnership</p>
              <p className={styles.desktop_1Page32}>How to travel</p>
              <p className={styles.desktop_1Page33}>Our plans</p>
            </div>
            <div className={styles.desktop_1Page34}>
              <p className={styles.desktop_1Page35}>Community</p>
              <p className={styles.desktop_1Page36}>Events</p>
              <p className={styles.desktop_1Page37}>Blog</p>
              <p className={styles.desktop_1Page38}>Podcast</p>
              <p className={styles.desktop_1Page39}>Invite a friend</p>
            </div>
            <div className={styles.desktop_1Page40}>
              <p className={styles.desktop_1Page41}>Socials</p>
              <p className={styles.desktop_1Page42}>Discord</p>
              <p className={styles.desktop_1Page43}>Instagram</p>
              <p className={styles.desktop_1Page44}>Twitter</p>
              <p className={styles.desktop_1Page45}>Facebook</p>
            </div>
          </div>
        </div>
        <div className={styles.desktop_1Page46}>
          <p className={styles.desktop_1Page47}>
            2023 MilanTour. All rights reserved
          </p>
          <div className={styles.desktop_1Page48}>
            <p className={styles.desktop_1Page49}>Privacy & Policy</p>
            <p className={styles.desktop_1Page50}>Terms & Conditions</p>
          </div>
        </div>
      </div>
    </div>
  );
};
