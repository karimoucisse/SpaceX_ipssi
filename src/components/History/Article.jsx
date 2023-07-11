import React, { useState } from 'react';
import { Box, Card, CardContent, Link, Typography } from '@mui/material';

const Article = ({ article }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Card
      sx={{
        display: 'flex',
        p: 4,
        height: 200,
        width: 300,
        mb: 4,
        boxShadow:
          'rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px',
        borderRadius: '20px',
      }}
    >
      <Link href={article.links.article} color="inherit">
        <CardContent
          sx={{
            backgroundColor: '#1c2930',
            width: '100%',
            height: '100%',
            borderRadius: '20px',
          }}
        >
          <Typography gutterBottom variant="h5" component="div" color="white">
            {article.title}
          </Typography>
          <Typography variant="body2" color="white">
            {article.details}
          </Typography>
        </CardContent>
      </Link>
    </Card>
  );
};

export default Article;
