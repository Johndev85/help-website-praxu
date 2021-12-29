//styles
import styles from "./help-website.module.scss"

//components
import Layout from "../../components/Layout/Layout"
import CardInformation from "../../components/CardInformation/CardInformation"
import SearchBar from "../../components/SearchBar/SearchBar"
import CardArticles from "../../components/CardArticles/CardArticles"

const HelpWebsite = () => {
  return (
    <Layout>
      <section className={styles.container}>
        <section className={styles.container__hero}>
          <h1>
            Help <span> Center</span>
          </h1>
          <SearchBar />
        </section>
        <section className={styles.container__mid}>
          <div className={styles.container__mid__cards}>
            <CardInformation
              title="Getting Started"
              text="Learn how to create an account, set up your wallet, and what you can do on Praxu"
            />
            <CardInformation
              title="FAQs"
              text="Learn answers to frequently asked questions on Praxu"
            />
            <CardInformation
              title="Buying"
              text="Learn how to purchase tickets and understand gas fees and what’s gas free on Praxu"
            />
            <CardInformation
              title="Selling"
              text="Learn how to list your tickets for sale and understand the different ways to list your tickets"
            />
            <CardInformation
              title="Account Help"
              text="Learn how to adjust your account settings and configure your Praxu profile"
            />
            <CardInformation
              title="User Safety"
              text="Learn more about anti-fraud and user safety processes on Praxu"
            />
          </div>
          <div className={styles.container__mid__cardsBottom}>
            <CardInformation
              title="Partners"
              text="Learn how you can partner with us to enage with the Praxu team"
            />
            <CardInformation
              title="Developers"
              text="Learn how you can develop with Praxu"
            />
          </div>
        </section>
        <section className={styles.container__articles}>
          <div className={styles.container__articles_titles}>
            <h2>Promoted Articles</h2>
          </div>
          <div className={styles.container__articles__cards}>
            <CardArticles
              title="How do I create a Praxu account?"
              text="Learn how you can develop with Praxu ..."
            />
            <CardArticles
              title="How do I sell a ticket in Praxu?"
              text="Learn how you can develop with Praxu ..."
            />
            <CardArticles
              title="What can I do if I think my account is compromised?"
              text="Learn how you can develop with Praxu ..."
            />
            <CardArticles
              title="How does the fee structure work on Praxu?"
              text="Learn how you can develop with Praxu ..."
            />
            <CardArticles
              title="How do I find my funds on Solana?"
              text="Learn how you can develop with Praxu ..."
            />
            <CardArticles
              title="Which blockchains does Praxu support?"
              text="Learn how you can develop with Praxu ..."
            />
            <CardArticles
              title="Where can I find a new ticket release?"
              text="Learn how you can develop with Praxu ..."
            />
            <CardArticles
              title="How do I keep my wallet and funds safe?"
              text="Learn how you can develop with Praxu ..."
            />
            <CardArticles
              title="How can I report fradulent content on Praxu?"
              text="Learn how you can develop with Praxu ..."
            />
            <CardArticles
              title="How can I buy a ticket on Praxu?"
              text="Learn how you can develop with Praxu ..."
            />
          </div>
        </section>
      </section>
    </Layout>
  )
}

export default HelpWebsite
