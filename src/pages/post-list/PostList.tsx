import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../../stores/post_store/PostStore';
import { fetchPosts } from '../../stores/post_store/PostSlice';
import CardPost from '../../components/card-post/CardPost';
import { Container, Row, Col, Spinner, Alert } from 'react-bootstrap';

const PostList: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { posts, loading, error } = useSelector((state: RootState) => state.posts);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  if (loading) {
    return (
      <Container fluid className="text-center my-5">
        <Spinner animation="border" variant="primary" role="status" />
        <p className="mt-2">Loading posts...</p>
      </Container>
    );
  }

  if (error) {
    return (
      <Container fluid className="my-5">
        <Alert variant="danger">Error: {error}</Alert>
      </Container>
    );
  }

  return (
    <Container fluid className="my-5">
      <h2 className="text-center mb-4">Posts</h2>
      <Row className="g-4">
        {posts.map((post) => (
          <Col key={post.id} xs={12} sm={6} md={4} lg={3}>
            <CardPost post={post} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default PostList;
