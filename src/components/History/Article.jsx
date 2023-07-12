import React, { useState } from 'react';
import { Box, Card, CardContent, Link, Typography } from '@mui/material';

const Article = ({ article }) => {
  return (
    <Card
      sx={{
        display: 'flex',
        p: 4,
        height: 200,
        width: 300,
        // mb: 4,
        boxShadow:
          'rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px',
        borderRadius: '20px',
        backgroundColor: '#1c2930',
        justifyContent: 'center',
        // alignItems: "center",
      }}
    >
      <Link
        href={article.links.article}
        target="blank"
        color="inherit"
        sx={{
          width: '100%',
          height: '100% !important',
        }}
      >
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            color="white"
            mb={2}
          >
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
