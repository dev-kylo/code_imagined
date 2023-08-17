import React from 'react'
import '../utils/fontawesome'
import { Link } from 'gatsby'
import Providers from '../providers/Providers'
import PageTitle from '../components/UI/pageTitle.styled'
import { H2 } from '../components/UI/headings.styled'
import Drawer from '../components/layout/sidenav/drawer'
import { TextContainer } from '../components/layout/containers/textContainer'

const Thankyou = () => {
    return (
        <Providers>
            <Drawer />
            <PageTitle postTitle>I'm so excited to have you on board!</PageTitle>
            <TextContainer>
                <H2>Wooohooo!</H2>
                <p>
                    Thank you so much! The first introductory email from me is on its way to your inbox. Please check
                    your Promotions folder and whitelist the address. One quick and easy way of doing that is by
                    dragging the email into the Primary folder. Otherwise you can follow{' '}
                    <a href="http://onlinegroups.net/blog/2014/02/25/how-to-whitelist-an-email-address/">
                        these instructions.
                    </a>
                </p>

                <p>
                    Feel free to contact me directly at kylo@thegreatsync.com. I LOVE to connect with fellow JS
                    learners.
                </p>

                <p>
                    {' '}
                    Also keep an eye on <Link to="/workshops">upcoming workshops</Link> I am running.
                </p>
            </TextContainer>
        </Providers>
    )
}

export default Thankyou
