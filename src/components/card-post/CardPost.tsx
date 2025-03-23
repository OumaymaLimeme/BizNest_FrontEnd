import * as React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import { Post } from '../../types/Post';

interface CardPostProps {
  post: Post;
}

export default function CardPost({ post }: CardPostProps) {
  const { title, content, images, subCategories } = post;
  const excerpt = content.length > 100 ? content.substring(0, 100) + '...' : content;

  return (
    <Card className="shadow-sm border rounded h-100">
      <Card.Img
        variant="top"
        src={images.length > 0
          ? images[0].url
          : 'https://www.bagandtote.com/cdn/shop/collections/73_600x.jpg?v=1563395900'
        }
        alt={title}
        className="card-img-top"
        style={{ height: '200px', objectFit: 'cover' }}
      />
      <Card.Body className="d-flex flex-column p-3">
        <Card.Title className="text-truncate mb-3" title={title} style={{ fontSize: '1.2rem' }}>
          {title}
        </Card.Title>

        {/* Tags */}
        <div className="mb-3">
          {subCategories.map((tag) => (
            <Badge key={tag.id} bg="info" className="me-1">
              {tag.name}
            </Badge>
          ))}
        </div>

        <Card.Text className="text-muted flex-grow-1" style={{ fontSize: '0.9rem' }}>
          {excerpt}
        </Card.Text>

        <Button variant="dark" className="w-100">
          Read More
        </Button>
      </Card.Body>
    </Card>
  );
}
