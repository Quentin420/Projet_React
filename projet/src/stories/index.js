import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import Profil from '../Components/Profil';
import jeanne from '../Images/jeanne.jpg';
import Followers from '../Components/Followers';
import Chart from '../Components/Chart';
import Barchart from '../Components/Barchart';
import Weather from '../Components/Weather';
import Clock from 'react-clock';
import SpotifyPlayer from 'react-spotify-player';
import Timer from '../Components/Timer';
import Note from '../Components/Note';
import Notes from '../Container/Notes';
import ToDo from '../Components/ToDo';
import TodoList from '../Container/TodoList';
import ListOfTDL from '../Container/ListOfTDL';
import VisualNumber from '../Components/VisualNumber';
import NumberList from '../Container/NumberList';

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

storiesOf('Weather', module).add('widget weather', () => <Weather />);
storiesOf('Spotify', module).add('widget spotify', () => <SpotifyPlayer uri="spotify:album:1TIUsv8qmYLpBEhvmBmyBk" size={size}
  view={view}
  theme={theme} />);


storiesOf('clock',module)
  .add('time',() => <Timer/>)



const notes=[
{title:'ho1', note:"j'ecrit vlllaaaa les notes dans mon carnet de note", date:'01/01/10'},
{title:'ho2', note:"j'ecrit vlllaaaa les notes dans mon carnet de note", date:'01/01/10'},
{title:'ho 3', note:"encore une note ", date:'01/01/10'},
{title:'ho 4e', note:"j'ecrit vlllaaaa les notes dans mon carnet de note que je me repetttteee sans arret, je met plusieur fois la meme lettre pour appuyer le mot", date:'01/01/10'},
{title:'ho5e', note:"j'ecrit vlllaaaa les notes dans mon carnet de note", date:'01/01/10'},
{title:'h6', note:"j'ecrit vlllaaaa les notes dans mon carnet de note", date:'01/01/10'},
{title:'h7', note:"j'ecrit vlllaaaa les notes dans mon carnet de note", date:'01/01/10'},
{title:'h8', note:"j'ecrit vlllaaaa les notes dans mon carnet de note", date:'01/01/10'},
{title:'h9', note:"j'ecrit vlllaaaa les notes dans mon carnet de note", date:'01/01/10'},
] 


storiesOf('Notes',module)
  .add('one note', () => <Note title="Damn Good Idea" note="les oiseaux sont les poissons du ciel!" date="03/04/2030" onClick={action('clicked')}/>)
  .add('plusieurs notes',()=> <Notes notes={notes}/>)


const Todos = [
  {ToDo:'manger chez mamie',checked:false},
  {ToDo:'acheter des pattes',checked:true},
  {ToDo:'vendre le chien',checked:true}, 
  {ToDo:'acheter la salade',checked:false},
]

storiesOf('ToDo List', module)
  .add('ToDo elem', () => <ToDo todo="acheter du painnfinogn reoihgrio firehgi rhgi rhgihrig hrihgrihgi rhgih righrihgi" />)
  .add('ToDo List', () => <TodoList TodoListName="truc pour maman" todos={Todos} />)
  .add('list of TodoList', () => <ListOfTDL />)


const numbers=[{logo:require("../icons/number.png"), title:"amis Facebook", quantity:"5400"},
{logo:require("../icons/computer.png"), title:"Followers Twitter", quantity:"43400"},
{logo:require("../icons/number.png"), title:"Fan Instagram", quantity:"2"},
{logo:require("../icons/number.png"), title:"Fan Instagram", quantity:"2"},
{logo:require("../icons/number.png"), title:"Fan Instagram", quantity:"2"},
{logo:require("../icons/number.png"), title:"Fan Instagram", quantity:"2"},
{logo:require("../icons/number.png"), title:"Fan Instagram", quantity:"2"},
]


storiesOf('VisualNumbers',module)
  .add('visualnumber', () => <VisualNumber logo={require("../icons/number.png")} title="Amis Facebook" quantity="400"/>)
  .add('NumberList', () => <NumberList numbers={numbers}/>)

