import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';

const containerStyle = {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  gap: '50px',
  rowGap: '40px',
  marginTop: '10px',
};

const cardStyle = {
  maxWidth: 275,
  height: 'auto',
  marginBottom: 30,
  marginTop: 7,
  cursor: 'pointer',
  padding: '16px',
  border: '2px solid #ccc',
  borderRadius: 8,
  overflow: 'hidden',
  transition: 'background-color 0.3s ease, box-shadow 0.3s ease',
};

export default function Cards() {
  const navigate = useNavigate();
  const [hoveredCard, setHoveredCard] = React.useState(null);

  const handleCardClick = (route) => {
    navigate(route);
    window.scrollTo({ top: 0, behavior: 'auto' });
  };

  const handleMouseEnter = (cardId) => {
    setHoveredCard(cardId);
  };

  const handleMouseLeave = () => {
    setHoveredCard(null);
  };

  const isHovered = (cardId) => cardId === hoveredCard;

  const cards = [
    { id: 'AmazonProduct', title: 'Amazon Product Description', description: 'Create compelling product descriptions for Amazon listings.' },
    { id: 'AmazonPfeature', title: 'Amazon Product Features (bullets)', description: 'Create key feature and benefit bullet points for Amazon listings under the "about this item" section.' },
    { id: 'BlogPost', title: 'Blog Post Conclusion Paragraph', description: 'Wrap up your blog posts with an engaging conclusion paragraph.' },
    { id: 'BlogPostIntro', title: 'Blog Post Intro Paragraph', description: 'Write an engaging opening paragraph for your blog post.' },
    { id: 'BlogPostOutline', title: 'Blog Post Outline', description: 'Create lists and outlines for articles, for example for "How to" style blog posts and articles.' },
    { id: 'BlogPostTopicIdeas', title: 'Blog Post Topic Ideas', description: 'Generate new blog post topics that will engage readers and rank well on Google.' },
    { id: 'BusinessOrProductName', title: 'Business or Product Name', description: 'Generate a winning name for your business or product.' },
    { id: 'Commands', title: 'Commands', description: 'Tell charli exactly what to write with a command.' },
    { id: 'CreativeStory', title: 'Creative Story', description: 'Write creative stories to engage readers.' },
    { id: 'EmailSubjectLines', title: 'Email Subject Lines', description: 'Get your emails opened with irresistible subject lines.' },
    { id: 'CompanyBio', title: 'Company Bio', description: 'Share your company\'s story with a compelling bio.' },
    { id: 'ContentImprover', title: 'Content Improver', description: 'Enhance a piece of content by rewriting it to be more engaging, creative, and captivating.' },
    { id: 'FacebookAds', title: 'Facebook Ad Primary Text', description: 'Craft compelling primary text for Facebook ads that attract users.' },
    { id: 'JobDescription', title: 'Job Description', description: 'Create a clear and concise job description to attract suitable candidates.' },
    { id: 'LinkedInTopicIdeas', title: 'LinkedIn Topic Ideas', description: 'Get inspired with LinkedIn topic ideas to share with your network.' },
  ];

  return (
    <div style={containerStyle}>
      {cards.map((card) => (
        <div
          key={card.id}
          style={{
            ...cardStyle,
            backgroundColor: isHovered(card.id) ? '#60381a' : 'white',
            boxShadow: isHovered(card.id) ? '0 0 10px rgba(0, 0, 0, 0.2)' : 'none',
          }}
          onClick={() => handleCardClick(`/${card.id}`)}
          onMouseEnter={() => handleMouseEnter(card.id)}
          onMouseLeave={handleMouseLeave}
        >
          <Card>
            <CardContent>
              <Typography variant="h5" component="div">
                {card.title}
              </Typography>
              <Typography variant="body2">
                {card.description}
              </Typography>
            </CardContent>
          </Card>
        </div>
      ))}
    </div>
  );
}
