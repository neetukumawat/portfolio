import weatherImg from "../assets/weather-app.jpg";
import rockpaperImg from "../assets/sn-rockpaper.jpg";
import githubImg from "../assets/github.png";
import tictactoeImg from "../assets/tictactoe.png";
import calculatorImg from "../assets/calcus.jpeg";

export const projects = [
    {
      id: 'weather-app',
      title: 'Weather App',
      image: weatherImg,
      description: 'City-wise weather dashboard showing current conditions and forecast.',
      tags: ['React', 'API', 'CSS'],
      sourceCode: 'https://github.com/neetukumawat/WeatherApp',
      liveDemo: 'https://<your-demo-url>/weather-app'
    },
    {
      id: 'github-user-finder',
      title: 'GitHub User Finder',
      image: githubImg,
      description: 'Search GitHub users, view profile and repos with a clean UI.',
      tags: ['React', 'GitHub API'],
      sourceCode: 'https://github.com/neetukumawat/GitHubUser_Finder',
      liveDemo: 'https://<your-demo-url>/github-user-finder'
    },
    {
      id: 'calculator',
      title: 'Calculator',
      image: calculatorImg,
      description: 'Responsive calculator with keyboard support and polished UI.',
      tags: ['React', 'CSS',"Javascript"],
      sourceCode: 'https://github.com/neetukumawat/CalculatorJs',
      liveDemo: 'https://<your-demo-url>/calculator'
    },
    {
      id: 'rock-paper-scissors',
      title: 'Rock • Paper • Scissors',
      image: rockpaperImg,
      description: 'Play vs computer with simple animations and score tracking.',
      tags: ['React','Javascript', 'Game'],
      sourceCode: 'https://github.com/neetukumawat/rockPaperScissor',
      liveDemo: 'https://<your-demo-url>/rps'
    },
    {
      id: 'tic-tac-toe',
      title: 'Tic Tac Toe',
      image: tictactoeImg,
      description: 'Classic logic game with win detection and reset.',
      tags: ['javascript', 'Game'],
      sourceCode: 'https://github.com/neetukumawat/tic-tac-toe-game',
      liveDemo: 'https://<your-demo-url>/tictactoe'
    }
  ];
  