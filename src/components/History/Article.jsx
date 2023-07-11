import React, {useState} from 'react';
import {Box} from "@mui/material";

const Article = ({article}) => {
    const [isOpen, setIsOpen] = useState(false)
    return (<div>
        <Box onClick={() => setIsOpen((x) => !x)}>
            <h2>{article.title}</h2>
            <span>{new Date(article.event_date_utc)}</span>
        </Box>
        {isOpen && (
            <div>
                <p>{article.details}</p>
                <p>Source{article.links.length > 1 && "s"}: {article.link.map((x, i) => (
                    <a href={x} key={1}>i</a>
                ))}</p>
            </div>)}

    </div>);
}

export default Article