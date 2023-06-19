import styles from "./Content.module.css";
import content from "./content.jpg";
import { InviteEmail } from "./InviteEmail";
import { Button } from "./Button";

export const Content = ({ override }: { override?: any }) => {
  return (
    <div style={override} className={styles.content}>
      <img
        src={content.src}
        className={
          styles.objectFitCoverOpacity_1d2e2e0e68f0404c71db06348976ba084f36ad43a
        }
      />
      <div className={styles.frame_2}>
        <div className={styles.heading}>
          <p className={styles.inviteTeammates}>Invite Teammates</p>
        </div>
        <div className={styles.teammates}>
          <div className={styles.emailInput}>
            <div className={styles.frame_12}>
              <InviteEmail />
              <p className={styles.enterTeammateEmails}>
                Enter teammate emails
              </p>
            </div>
          </div>
          <p className={styles.text1AdditionalSeatInvited}>
            1 additional seat invited
          </p>
        </div>
        <Button
          type="Primary"
          text="Invite!"
          override={{
            height: "fit-content",
            width: "100%",
          }}
        />
      </div>
    </div>
  );
};
