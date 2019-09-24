import React, { useState, useEffect } from 'react';
import { format, parseISO } from 'date-fns';
import { Link } from 'react-router-dom';
import { MdAdd, MdOpenInNew } from 'react-icons/md';
import api from '~/services/api';
import { Container, Title, ListMeetup, Details } from './styles';

export default function Dashboard() {
  const [meetups, setMeetups] = useState([]);

  useEffect(() => {
    async function loadMeetups() {
      const response = await api.get('organizing');
      const data = response.data.map(meetup => {
        const newMeetup = Object.assign({}, meetup);
        newMeetup.date = format(
          parseISO(meetup.date),
          "d 'de' MMMM 'às' kk:mm'hrs'"
        );
        return newMeetup;
      });
      setMeetups(data);
    }
    loadMeetups();
  }, []);
  return (
    <Container>
      <Title>
        <h2>Meus meetups</h2>
        <Link to="/new">
          <MdAdd size={20} />
          Novo Meetup
        </Link>
      </Title>

      <ListMeetup>
        {meetups.map(meetup => (
          <li key={String(meetup.id)}>
            {meetup.title}
            <Details>
              {meetup.date}
              <Link
                to={{
                  pathname: '/Details',
                  state: { meetup },
                }}
              >
                <MdOpenInNew size={20} />
              </Link>
            </Details>
          </li>
        ))}
      </ListMeetup>
    </Container>
  );
}
