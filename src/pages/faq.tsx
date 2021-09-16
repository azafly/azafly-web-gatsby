
import React from 'react'

import { SEO } from "../components/seo";
import { Layout } from "../components/layout";


import { FAQ as FAQView } from '../features/faq/index';


export const FAQ = () => {
    return (
        <>

            <Layout>
                <FAQView />
            </Layout>

        </>
    )
}


export default FAQ
