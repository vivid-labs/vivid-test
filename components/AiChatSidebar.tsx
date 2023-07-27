import styles from "./AiChatSidebar.module.css";
import { Logo } from "./Logo";
import { CtaButton } from "./CtaButton";
export const AiChatSidebar = ({ override }: { override?: any }) => {
  return (
    <div style={override} className={styles.aiChatSidebar} figma-id="5:186:164">
    <div className={styles.mainContent} figma-id="5:186:165">
      <div className={styles.headerBar} figma-id="5:186:166">
        <p className={styles.diveDeeperWith} figma-id="5:186:167">
          Dive deeper with
        </p>
        <div className={styles.logo} figma-id="5:186:168">
          <Logo
            override={{
              position: "relative",
            }}
            figma-id="5:186:169"
          />
          <p className={styles.aiChat} figma-id="5:186:170">
            {" "}
            AI Chat
          </p>
        </div>
      </div>
      <div className={styles.chats} figma-id="5:186:171">
        <div className={styles.messageWrapper} figma-id="5:186:172">
          <div className={styles.initialChat} figma-id="5:186:173">
            <p
              className={styles.objectionsInConversation}
              figma-id="5:186:174"
            >
              What objections showed up in this conversation?
            </p>
          </div>
        </div>
        <div className={styles.messageWrapperDiv} figma-id="5:186:175">
          <div className={styles.teaser} figma-id="5:186:176">
            <p
              className={
                styles.priceBudgetCustomerExpectation
              }
              figma-id="5:186:177"
            >
              Price/budget - The customer mentioned their initial budget
              expectation was around &#x24;10K, significantly lower than the
              quote.{" "}
            </p>
            <p
              className={
                styles.timingCustomerProjects
              }
              figma-id="5:186:178"
            >
              Timing - The customer mentioned having other projects going on
              and wanting to think about timing/cash flow.
            </p>
          </div>
        </div>
        <div className={styles.frame13} figma-id="5:186:179">
          <div className={styles.frame15} figma-id="5:188:120" />
        </div>
      </div>
      <div className={styles.rillaAiChatIntroduction} figma-id="5:186:180">
        <div className={styles.heading} figma-id="5:186:181">
          <div className={styles.text} figma-id="5:186:182">
            <p className={styles.introducing} figma-id="5:186:183">
              Introducing
            </p>
            <p className={styles.rillaAiChat} figma-id="5:186:184">
              Rilla AI Chat
            </p>
          </div>
          <div className={styles.betaDiv} figma-id="5:186:185">
            <p className={styles.beta} figma-id="5:186:186">
              Beta
            </p>
          </div>
        </div>
        <p
          className={
            styles.objectionsToSalesScript
          }
          figma-id="5:186:187"
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
            position: "relative",
          }}
          figma-id="5:186:188"
        />
      </div>
    </div>
    <div className={styles.chat} figma-id="5:186:189">
      <div className={styles.chatInput} figma-id="5:186:190" />
      <p
        className={
          styles.noteRillaChatExperimental
        }
        figma-id="5:186:191"
      >
        Please note that Rilla Chat is currently experimental and may produce
        inaccurate information about the conversation.
      </p>
    </div>
   </div> 
  );
};
