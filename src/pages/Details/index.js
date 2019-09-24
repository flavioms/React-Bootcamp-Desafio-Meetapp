import React from 'react';
import { Link } from 'react-router-dom';
import { MdEdit, MdCancel, MdEvent, MdRoom } from 'react-icons/md';
import PropTypes from 'prop-types';
import { Container, Title, Image, Description, Footer } from './styles';

export default function Details({ location }) {
  const { meetup } = location.state;
  return (
    <Container>
      <Title>
        <h2>{meetup.title}</h2>
        <Link to={{ pathname: '/New', state: { meetup } }}>
          <MdEdit size={20} />
          Editar
        </Link>
        <button type="button">
          <MdCancel size={20} />
          Cancelar
        </button>
      </Title>

      <Image src={meetup.File.url} alt={meetup.title} />

      <Description>{meetup.description}</Description>

      <Footer>
        <p>
          <MdEvent size={20} />
          {meetup.date}
        </p>
        <p>
          <MdRoom size={20} /> {meetup.location}
        </p>
      </Footer>
    </Container>
  );
}

Details.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      meetup: PropTypes.shape({
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
        location: PropTypes.string.isRequired,
        File: PropTypes.shape({ url: PropTypes.string.isRequired }).isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
};
