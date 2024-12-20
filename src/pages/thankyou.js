import React, { useEffect, useState } from 'react'
import '../utils/fontawesome'
import Providers from '../providers/Providers'
import PageTitle from '../components/UI/pageTitle.styled'
import { H2 } from '../components/UI/headings.styled'
import { TextContainer } from '../components/layout/containers/textContainer'
import SEO from '../layout/seo'
import { Button } from '../components/UI/button.styled'
import isBrowser from '../utils/isBrowser'
import { getTokenFromURL } from '../utils/getTokenFromUrl'

const Thankyou = () => {
    const [userId, setUserId] = useState(null)

    useEffect(() => {
        if (isBrowser()) {
            const id = getTokenFromURL('ck_subscriber_id', window.location.search)
            if (id) setUserId(id)
        }
    }, [])

    return (
        <>
            <SEO title="Welcome to The Great Sync" />
            <Providers>
                <PageTitle postTitle>Welcome to The Great Sync!</PageTitle>
                <div style={{ maxWidth: '900px', margin: 'auto' }}>
                    <TextContainer small>
                        <H2> I can't wait for you to explore JavaScript with me!</H2>
                        <p>
                            Below you can access the PDF below on How to Learn JS Memorably. I'll also be sending you
                            some free resources over the next few days to help you get started.
                        </p>

                        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.5rem' }}>
                            <Button
                                color="yellow"
                                type="external"
                                link="https://thegreatsync.com/courses/3-steps-to-confidence/the-great-sync-learning-system-roadmap/?token=luki23U4ssj83"
                            >
                                How to Learn JS Memorably
                            </Button>
                        </div>

                        <p>
                            If you're the impatient kind 😉, and you would like to create your own unforgettable visual
                            mental model of all the major JavaScript concepts, you can dive straight into{' '}
                            <a
                                href={`https://thesyncerprogram.thegreatsync.com?ck_subscriber_id=${
                                    userId || 'unknown'
                                }`}
                            >
                                Imagine JavaScript - Master the Fundamentals
                            </a>
                            .
                        </p>
                        <p>PS... I give all new subscribers a 40% discount. </p>
                    </TextContainer>
                </div>
            </Providers>
        </>
    )
}

export default Thankyou
