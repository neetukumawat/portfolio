import weatherImg from "../assets/weather-app.jpg";
import rockpaperImg from "../assets/sn-rockpaper.jpg";
import githubImg from "../assets/github.png";
import todoImg from "../assets/todo.png";
import analogclockImg from "../assets/clock.jpg";
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
      liveDemo: 'https://neetukumawat.github.io/WeatherApp/'
    },
    {
      id: 'github-user-finder',
      title: 'GitHub User Finder',
      image: githubImg,
      description: 'Search GitHub users, view profile and repos with a clean UI.',
      tags: ['React', 'GitHub API'],
      sourceCode: 'https://github.com/neetukumawat/GitHubUser_Finder',
      liveDemo: 'https://neetukumawat.github.io/GitHubUser_Finder/'
    },
    {
      id: 'calculator',
      title: 'Calculator',
      image: calculatorImg,
      description: 'Responsive calculator with keyboard support and polished UI.',
      tags: ['React', 'CSS',"Javascript"],
      sourceCode: 'https://github.com/neetukumawat/CalculatorJs',
      liveDemo: 'https://neetukumawat.github.io/CalculatorJs/'
    },
    {
      id: 'rock-paper-scissors',
      title: 'Rock • Paper • Scissors',
      image: rockpaperImg,
      description: 'Play vs computer with simple animations and score tracking.',
      tags: ['React','Javascript', 'Game'],
      sourceCode: 'https://github.com/neetukumawat/rockPaperScissor',
      liveDemo: 'https://neetukumawat.github.io/rockPaperScissor/'
    },
    {
      id: 'tic-tac-toe',
      title: 'Tic Tac Toe',
      image: tictactoeImg,
      description: 'Classic logic game with win detection and reset using javascript.',
      tags: ['javascript', 'Game'],
      sourceCode: 'https://github.com/neetukumawat/tic-tac-toe-game',
      liveDemo: 'https://neetukumawat.github.io/tic-tac-toe-game/'
    },
    {
      id: 'todo-list',
      title: 'Todo List',
      image: todoImg,
      description: 'Todo List allows users to add, edit, and delete tasks, helping to manage daily activities.',
      tags: ['javascript', 'CSS', 'HTML'],
      sourceCode: 'https://github.com/neetukumawat/Todo',
      liveDemo: 'https://neetukumawat.github.io/Todo/'
    },
    {
      id: 'AnalogClock',
      title: 'AnalogClock',
      image: analogclockImg,
      description: 'Analog Clock - Displays current time with hour, minute, and second hands.',
      tags: ['javascript', 'CSS', 'HTML'],
      sourceCode: 'https://github.com/neetukumawat/AnalogClock',
      liveDemo: 'https://neetukumawat.github.io/AnalogClock/'
    }
  ];
  