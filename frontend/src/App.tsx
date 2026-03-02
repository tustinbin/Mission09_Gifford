import './App.css'
import teamInfo from './CollegeBasketballTeams.json'

function IntroductoryHeading(){
  return (
    <>
      <h1>March Madness React Companion!</h1>
      <p>Welcome to my website! The purpose of this website is to report a whole heaping-a spaghetti pile of informationey on march madness teams</p>
    </>
  );
}

function TeamCard({school, name, city, state}:{school: string; name: string; city: string; state: string;}){
  return (
    <>
      <h2>School Name: {school}</h2>
      <h2>Mascot Name: {name}</h2>
      <h2>Location: {city}, {state}</h2>
      <p>_____________________________________</p>
    </>
  );
}

function CardList(){
  return (
    <>
      {
        teamInfo.teams.map((singleTeam) => (<TeamCard {...singleTeam}/>))
      }
    </>
  )
}

function App() {
  return (
    <>
      <IntroductoryHeading />
      <CardList/>
    </>
  )
}

export default App
