import './App.css'
import teamInfo from './CollegeBasketballTeams.json'

function IntroductoryHeading(){
  return (
    //this is the intro that shows up at the top
    <>
      <h1>March Madness React Companion!</h1>
      <p>Welcome to my website! The purpose of this website is to report a whole heaping-a spaghetti pile of informationey on march madness teams</p>
    </>
  );
}

function TeamCard({school, name, city, state}:{school: string; name: string; city: string; state: string;}){
  return (
    // this function makes an entry of each item in the json file
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
    //this function uses map to put all the json entries together. calling teamCard as many times as it needs to
    <>
      {
        teamInfo.teams.map((singleTeam) => (<TeamCard {...singleTeam}/>))
      }
    </>
  )
}

function App() {
  return (
    //assembles the output functions together
    <>
      <IntroductoryHeading />
      <CardList/>
    </>
  )
}

export default App
