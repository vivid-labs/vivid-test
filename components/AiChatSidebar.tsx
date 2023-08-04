import styles from "./AiChatSidebar.module.css";
import { Logo } from "./Logo";
import { CtaButton } from "./CtaButton";

export const AiChatSidebar = ({ override }: { override?: any }) => {
  return (
    <div className={styles.chatContainer} style={override}>
      <div className={styles.aiChatSidebar}>
        <HeaderText />
        <MainChat />
        <RillaAiChatIntro />
      </div>
      <DisclaimerText />
    </div>
  );
};

const DisclaimerText = () => (
  <div className={styles.disclaimerText}>
    <div className={styles.chatSection} />
    <p className={styles.chatInputField}>
      Please note that Rilla Chat is currently experimental and may produce
      inaccurate information about the conversation.
    </p>
  </div>
);

const HeaderText = () => (
  <div className={styles.headerText}>
    <p className={styles.sidebarHeader}>Dive deeper with</p>
    <div className={styles.mainContent}>
      <Logo />
      <p className={styles.sidebarLogo}> AI Chat</p>
    </div>
  </div>
);

const MainChat = () => (
  <div className={styles.chatIntro}>
    <div className={styles.messageContent}>
      <div className={styles.initialMessage}>
        <p className={styles.mainChat}>
          What objections showed up in this conversation?
        </p>
      </div>
    </div>
    <div className={styles.frame13}>
      <div className={styles.teaserContent}>
        <p className={styles.priceBudget}>
          Price/budget - The customer mentioned their initial budget expectation
          was around &#x24;10K, significantly lower than the quote.{" "}
        </p>
        <p className={styles.timingProjects}>
          Timing - The customer mentioned having other projects going on and
          wanting to think about timing/cash flow.
        </p>
      </div>
    </div>
    <div className={styles.chatsSection}>
      <div className={styles.frame15} />
    </div>
  </div>
);

const RillaAiChatIntro = () => (
  <div className={styles.rillaChatIntro}>
    <div className={styles.headingSection}>
      <div className={styles.textContent}>
        <p className={styles.introText}>Introducing</p>
        <p className={styles.rillaChat}>Rilla AI Chat</p>
      </div>
      <div className={styles.betaBadge}>
        <p className={styles.betaText}>Beta</p>
      </div>
    </div>
    <p className={styles.objectionInfo}>
      From objections to where the sales rep went off script &#x2013; AI Chat
      has answers for all your questions.
    </p>
    <CtaButton
      variants="Gradient"
      text="Start asking questions"
      override={{
        height: "fit-content",
        width: "fit-content",
      }}
    />
  </div>
);
