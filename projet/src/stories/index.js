import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import Profil from '../Components/Profil';
import jeanne from '../Images/jeanne.jpg';
import Followers from '../Components/Followers';
import Chart from '../Components/Chart';
import Barchart from '../Components/Barchart';
import TodoList from '../Components/TodoList';
import Weather from '../Components/Weather';
import Calendrier from '../Components/Calendrier';
import Clock from 'react-clock';
import SpotifyPlayer from 'react-spotify-player';
import Calendar from 'rc-calendar';

import { Button, Welcome } from '@storybook/react/demo';

	 const infos = [
      {name: 'Page A', uv: 4000, pv: 2400, amt: 2400},
      {name: 'Page B', uv: 3000, pv: 1398, amt: 2210},
      {name: 'Page C', uv: 2000, pv: 9800, amt: 2290},
      {name: 'Page D', uv: 2780, pv: 3908, amt: 2000},
      {name: 'Page E', uv: 1890, pv: 4800, amt: 2181},
      {name: 'Page F', uv: 2390, pv: 3800, amt: 2500},
      {name: 'Page G', uv: 3490, pv: 4300, amt: 2100},
];

const data2 = [
      {name: 'Page A', uv: 4000, pv: 2400, amt: 2400},
      {name: 'Page B', uv: 3000, pv: 1398, amt: 2210},
      {name: 'Page C', uv: 2000, pv: 9800, amt: 2290},
      {name: 'Page D', uv: 2780, pv: 3908, amt: 2000},
      {name: 'Page E', uv: 1890, pv: 4800, amt: 2181},
      {name: 'Page F', uv: 2390, pv: 3800, amt: 2500},
      {name: 'Page G', uv: 3490, pv: 4300, amt: 2100},
];

const size = {
  width: '100%',
  height: 300,
};
const view = 'list'; // or 'coverart'
const theme = 'black'; // or 'white'

let now = new Date();


storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Button', module)
  .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
  .add('with some emoji', () => (
    <Button onClick={action('clicked')}>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  ));

storiesOf('Profil', module).add('widget profil', () => <Profil
             prenom="quentin"
             nom="lemerle"
             naissance="08/12/1996"
             image={jeanne}
             bgcolor="white"
              />);

storiesOf('Followers', module).add('widget followers', () => <Followers nbrfollowers="4500"/>);
storiesOf('Chart', module).add('widget chart', () => <Chart data ={infos}/>);
storiesOf('Barchart', module).add('widget barchart', () => <Barchart data ={data2}/>);
storiesOf('ToDo', module).add('widget todo', () => <TodoList />);
storiesOf('Weather', module).add('widget weather', () => <Weather />);
storiesOf('Spotify', module).add('widget spotify', () => <SpotifyPlayer uri="spotify:album:1TIUsv8qmYLpBEhvmBmyBk" size={size}
  view={view}
  theme={theme} />);

