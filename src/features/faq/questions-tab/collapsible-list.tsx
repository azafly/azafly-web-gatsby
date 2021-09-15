import React from 'react'



import { FaqCollapisbleCard } from './collapsible-card'

interface CollapsibleListProps {
    articles: any[],

}



export const CollapsibleList = ({ articles }: CollapsibleListProps) => {


    return (
        <div >
            {articles.map(({ content, title }) => <FaqCollapisbleCard title={title} content={content} />)}
        </div>
    )
}
