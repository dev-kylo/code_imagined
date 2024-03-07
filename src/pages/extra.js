import React from "react"
import "../utils/fontawesome"
import { Link } from "gatsby"
import { Container } from "@mantine/core"
import Providers from "../providers/Providers"
import PageTitle from "../components/UI/pageTitle.styled"
import { TextContainer } from "../components/layout/containers/textContainer"
import SignUp from "../features/signup/signup.styled"
import SEO from "../layout/seo"

const Extra = () => {
  return (
    <>
      <SEO
        title="Extra Reading"
        description="Extra resources and reading material relating to The Great Sync mental model, visual learning and mnemonics."
      />
      <Providers>
        <PageTitle postTitle>Extra Reading</PageTitle>
        <Container>
          <TextContainer>
            <p>
              Here is a list of my favourite resources and extra reading
              material for JavaScript, visual learning and mnemonics.
            </p>
            <p>
              For the ultimate visual learning experience that uses memory
              techniques to build a visual model of JavaScript, make sure to
              check out{" "}
              <Link to="/courses/the-syncer-program">
                The Syncer Program: Level Up With Visual & Mnemonic JavaScript
              </Link>
            </p>

            <h2>Posts I have written</h2>
            <ul>
              <li>
                <Link to="/posts/why-javascript-is-difficult">
                  Why Learning Javascript is Difficult.
                </Link>
              </li>
              <li>
                <Link to="/posts/tips-and-advice-for-learning-javascript/">
                  Tips and advice for learning JavaScript and applying for tech
                  roles
                </Link>
              </li>
              <li>
                <Link to="/posts/the-great-sync-improves-how-you-learn-javascript/">
                  The Great Sync improves how you learn javascript
                </Link>
              </li>
            </ul>

            <h2>Javascript Resources</h2>
            <ul>
              <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://eloquentjavascript.net/Eloquent_JavaScript.pdf"
                >
                  Eloquent Javascript
                </a>{" "}
                - free PDF version of the book
              </li>
              <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://javascript30.com/"
                >
                  30 Days of Javascript
                </a>{" "}
                - a free course by Wes Bos
              </li>
              <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://dev.to/lydiahallie/javascript-visualized-the-javascript-engine-4cdf"
                >
                  JavaScript Visualized
                </a>{" "}
                - a blog series by Lydia Hallie
              </li>
            </ul>
            <h2>Visual Learning</h2>
            <ul>
              <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://thegreatsync.com/posts/top-5-visual-learning-resources-for-webdevelopers/"
                >
                  The top 5 visual learning resources for web developers
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://maggieappleton.com/"
                >
                  Illustrated.dev
                </a>{" "}
                - a digital garden by Maggie Appleton
              </li>
              <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://justjavascript.com/"
                >
                  Just Javascript
                </a>{" "}
                - JS Mental Model by Dan Abramov
              </li>
              <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.youtube.com/watch?v=8pTEmbeENF4"
                >
                  The future of Programming
                </a>{" "}
                - a video presentation by Bret Victor
              </li>
            </ul>
            <h2>Mnemonics and Memory Techniques</h2>
            <ul>
              <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.scribd.com/book/190998703/Moonwalking-with-Einstein-The-Art-and-Science-of-Remembering-Everything?utm_medium=cpc&utm_source=google_search&utm_campaign=3Q_Google_DSA_NB_RoW&utm_device=c&gclid=Cj0KCQiAk4aOBhCTARIsAFWFP9FSuFwpFREDPc4UgH4FcKplWnVAmAFAhYy34h6X86OBYOyzLjUAL7caAhrdEALw_wcB"
                >
                  Moonwalking with Einstein
                </a>{" "}
                - a fantastic journey into memory and memory palaces
              </li>
              <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://artofmemory.com/"
                >
                  The Art of Memory
                </a>{" "}
                - a starting point for learning mnemonics
              </li>
              <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.amazon.ae/Make-Stick-Science-Successful-Learning/dp/0674729013/ref=asc_df_0674729013/?tag=googleshopp09-21&linkCode=df0&hvadid=358980517099&hvpos=&hvnetw=g&hvrand=15271797545226424067&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=1000013&hvtargid=pla-434742935023&psc=1"
                >
                  Make it Stick
                </a>{" "}
                - about general learning best practices, featuring mnemonics
              </li>
            </ul>
          </TextContainer>
        </Container>
        <SignUp />
      </Providers>
    </>
  )
}

export default Extra
