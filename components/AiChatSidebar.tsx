import styles from "./AiChatSidebar.module.css";
import { Logo } from "./Logo";
import { CtaButton } from "./CtaButton";
export const AiChatSidebar = ({ override }: { override?: any }) => {
  return (
    <div style={override} className={styles.aiChatSidebar}>
    <div className={styles.mainContent}>
      <div className={styles.headerBar}>
        <p className={styles.diveDeeperWith}>Dive deeper with</p>
        <div className={styles.logo}>
          <Logo />
          <p className={styles.aiChat}> AI Chat</p>
        </div>
      </div>
      <div className={styles.chats}>
        <div className={styles.messageWrapper}>
          <div className={styles.initialChat}>
            <p className={styles.objectionsInConversation}>
              What objections showed up in this conversation?
            </p>
          </div>
        </div>
        <div className={styles.messageWrapperDiv}>
          <div className={styles.teaser}>
            <p
              className={
                styles.priceBudgetCustomerExpectation
              }
            >
              Price/budget - The customer mentioned their initial budget
              expectation was around &#x24;10K, significantly lower than the
              quote.{" "}
            </p>
            <p
              className={
                styles.timingCustomerProjects
              }
            >
              Timing - The customer mentioned having other projects going on
              and wanting to think about timing/cash flow.
            </p>
          </div>
        </div>
        <div className={styles.frame13}>
          <div className={styles.frame15} />
        </div>
      </div>
      <div className={styles.rillaAiChatIntroduction}>
        <div className={styles.heading}>
          <div className={styles.text}>
            <p className={styles.introducing}>Introducing</p>
            <p className={styles.rillaAiChat}>Rilla AI Chat</p>
          </div>
          <div className={styles.betaDiv}>
            <p className={styles.beta}>Beta</p>
          </div>
        </div>
        <p
          className={
            styles.objectionsToSalesRepAnswers
          }
        >
          From objections to where the sales rep went off script &#x2013; AI
          Chat has answers for all your questions.
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
    </div>
    <div className={styles.chat}>
      <div className={styles.chatInput} />
      <p
        className={
          styles.noteRillaChatExperiment
        }
      >
        Please note that Rilla Chat is currently experimental and may produce
        inaccurate information about the conversation.
      </p>
    </div>
   </div> 
  );
};
